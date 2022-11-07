import { Handler } from "@netlify/functions";
import { PrismaClient } from "@prisma/client";
import * as crypto from "crypto";
import querystring from "querystring";

const prisma = new PrismaClient();

interface TransactionEntry {
  amount: number;
  buyer: string;
  buyer_name: string;
  buyer_phone: string;
  currency: string;
  fees: number;
  longurl: string;
  mac: string;
  payment_id: string;
  payment_request_id: string;
  purpose: string;
  shorturl: string;
  status: string;
}

const handler: Handler = async (event, context) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }
  const params = new URLSearchParams(event.body ?? "");

  console.log(params);

  if (event.body) {
    // Check if the mac is valid
    // if (!_isTransactionValid(newTransaction)) {
    //   return {
    //     statusCode: 400,
    //     body: "Invalid transaction"
    //   };
    // }

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

    // Return success
    return {
      statusCode: 200,
    };
  }

  // If body is not valid, then return 400
  return {
    statusCode: 400,
    body: "Invalid request body",
  };
};

// Checks the mac of the transaction using the algorithm described in
// https://support.instamojo.com/hc/en-us/articles/207816249-What-is-the-Message-Authentication-Code-in-Webhook-
const _isTransactionValid = (body: TransactionEntry): boolean => {
  const secret = process.env.INSTAMOJO_SECRET;
  if (secret) {
    const mac = body.mac;
    const newBody: { [id: string]: string | number } = {
      ...body,
    };
    delete newBody["mac"];
    let concat = "";

    Object.keys(newBody)
      .sort()
      .forEach((_, key) => (concat += String(newBody[key]))) + "|";

    // Remove the last pipe
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
