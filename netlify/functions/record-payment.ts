import { Handler } from "@netlify/functions";
import * as crypto from "crypto";
import { google } from "googleapis";
import axios from "axios";
import { MongoClient } from "mongodb";
import { IInstamojoPayment } from "../../lib/interfaces/IInstamojoPayment";
import { IPayment } from "../../lib/interfaces/IPayment";

const mongoClient = new MongoClient(process.env.MONGODB_URI!);
const clientPromise = mongoClient.connect();

const handler: Handler = async (event, context) => {
  /* Preconditions */
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }
  const params = new URLSearchParams(event.body ?? "");
  if (params.get("payment_id") == null) {
    return { statusCode: 401, body: "Payment Id is mandatory" };
  }

  console.log(`Received record-payment request with ${params}`);

  // Check if the mac is valid
  // if (!_isTransactionValid(params)) {
  //   return {
  //     statusCode: 400,
  //     body: "Invalid transaction",
  //   };
  // }

  // Get further transaction details from Instamojo
  const details = await _getPaymentDetails(params.get("payment_id") ?? "");
  const payment: IPayment = {
    ...details,
    fullfilment: "booked",
    mode: details.title.includes("Consultations")
      ? "consultation"
      : details.title.includes("On-Demand")
      ? "on-demand"
      : "workshop",
    created_at: new Date(details.created_at),
    updated_at: new Date(details.updated_at),
    amount: +details.amount,
    fees: +details.fees,
    total_taxes: +details.total_taxes,
  };

  // Save the data to DB
  const database = (await clientPromise).db(process.env.MONGODB_DATABASE!);
  const collection = database.collection(
    process.env.MONGODB_COLLECTION_PAYMENTS!
  );
  collection.insertOne(payment);

  // Update the date to Google sheets
  await _updateSheet(payment);

  // Return success
  return { statusCode: 200 };
};

const _getPaymentDetails = async (id: string): Promise<IInstamojoPayment> => {
  const token_data = new URLSearchParams();
  token_data.append("grant_type", "client_credentials");
  token_data.append("client_id", process.env.INSTAMOJO_CLIENT_ID!);
  token_data.append("client_secret", process.env.INSTAMOJO_CLIENT_SECRET!);
  console.log("Initiating token");
  const token_resp = await axios.post(
    `https://api.instamojo.com/oauth2/token/`,
    token_data,
    { headers: { "Accept-Encoding": "identity" } }
  );
  if (token_resp.status >= 300) {
    throw new Error(
      `Instamojo authentication failed with message: ${token_resp}`
    );
  }
  const token = token_resp.data;

  const payment_details_resp = await axios.get<IInstamojoPayment>(
    `https://api.instamojo.com/v2/payments/${id}`,
    {
      headers: {
        "Accept-Encoding": "identity",
        authorization: `Bearer ${token["access_token"]}`,
      },
    }
  );
  if (payment_details_resp?.status >= 300) {
    throw new Error(
      `Can't get payment details from Instamojo ${payment_details_resp}`
    );
  }

  return payment_details_resp.data;
};

// Function to update the Google sheets with the payment details
const _updateSheet = async (payment: IPayment): Promise<void> => {
  const auth = new google.auth.JWT({
    email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    key: process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY?.replace(/\\n/gm, "\n"),
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
  const sheet = google.sheets("v4");
  await sheet.spreadsheets.values.append({
    spreadsheetId: process.env.GOOGLE_SHEET_ID,
    auth: auth,
    range: process.env.GOOGLE_SHEET_TRANSACTIONS,
    valueInputOption: "RAW",
    requestBody: {
      values: [
        [
          payment.created_at,
          payment.title,
          payment.link.split("/")[-2],
          `${payment.order_info.unit_price} ${payment.currency}`,
          payment.amount,
          +payment.fees + +payment.total_taxes,
          payment.instrument_type,
          payment.name,
          payment.email,
          payment.phone,
        ],
      ],
    },
  });
};

// Checks the mac of the transaction using the algorithm described in
// https://support.instamojo.com/hc/en-us/articles/207816249-What-is-the-Message-Authentication-Code-in-Webhook-
const _isTransactionValid = (params: URLSearchParams): boolean => {
  const secret = process.env.INSTAMOJO_SECRET;
  if (secret) {
    const mac = params.get("mac");
    if (mac == null || mac == undefined) return false;

    params.sort();
    let concat = "";
    params.forEach((val, key) => {
      if (key != "mac") concat += val + "|";
    });
    concat = concat.slice(0, -1);

    const actual = crypto
      .createHmac("sha1", secret)
      .update(concat)
      .digest("hex");
    return actual === mac;
  } else {
    return true;
  }
};

export { handler };
