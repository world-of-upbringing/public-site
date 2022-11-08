import { Handler } from "@netlify/functions";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const handler: Handler = async (event, context) => {
  if (event.httpMethod !== "GET") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }
  const params = event.queryStringParameters;
  if (
    params == null ||
    params == undefined ||
    params["payment-id"] == undefined
  ) {
    return { statusCode: 400, body: "Query parameters missing" };
  }
  const paymentId = params["payment-id"];

  console.log(`Received get-payment request with ${params}`);

  try {
    const data: any = await prisma.transaction.findFirstOrThrow({
      where: {
        payment_id: paymentId,
      },
    });
    delete data["id"];
    console.log(data);
    return { statusCode: 200, body: JSON.stringify(data) };
  } catch (e: unknown) {
    let msg = "";
    if (typeof e === "string") {
      msg = e;
    } else if (e instanceof Error) {
      msg = e.message;
    }
    return { statusCode: 500, body: msg };
  }
};

export { handler };
