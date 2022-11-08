import { Handler } from "@netlify/functions";
import { PrismaClient } from "@prisma/client";
import * as crypto from "crypto";
import { google } from "googleapis";

const prisma = new PrismaClient();

const handler: Handler = async (event, context) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }
  const params = new URLSearchParams(event.body ?? "");

  console.log(`Received record-payment request with ${params}`);

  // Check if the mac is valid
  if (!_isTransactionValid(params)) {
    return {
      statusCode: 400,
      body: "Invalid transaction",
    };
  }

  // Save the data to DB
  await prisma.transaction.create({
    data: {
      payment_id: String(params.get("payment_id")),
      status: String(params.get("status")),
      currency: String(params.get("currency")),
      fees: Number(params.get("fees")),
      amount: Number(params.get("amount")),
      longurl: String(params.get("longurl")),
      shorturl: String(params.get("shorturl")),
      purpose: String(params.get("purpose")),
      buyer_email: String(params.get("buyer")),
      buyer_name: String(params.get("buyer_name")),
      buyer_phone: String(params.get("buyer_phone")),
      mac: String(params.get("mac")),
      payment_request_id: String(params.get("payment_request_id")),
      time: new Date(),
    },
  });

  // Update the date to Google sheets
  await _updateSheet(params);

  // Return success
  return { statusCode: 200 };
};

// Function to update the Google sheets with the payment details
const _updateSheet = async (params: URLSearchParams): Promise<void> => {
  const auth = new google.auth.JWT({
    email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    key: process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY?.replace(/\\n/gm, "\n"),
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
  const sheet = google.sheets("v4");
  console.log(process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY);
  await sheet.spreadsheets.values.append({
    spreadsheetId: process.env.GOOGLE_SHEET_ID,
    auth: auth,
    range: process.env.GOOGLE_SHEET_TRANSACTIONS,
    valueInputOption: "RAW",
    requestBody: {
      values: [
        [
          new Date().toDateString(),
          params.get("payment_id"),
          params.get("status"),
          params.get("currency"),
          params.get("amount"),
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
