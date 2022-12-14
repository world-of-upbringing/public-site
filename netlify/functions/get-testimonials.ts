import { Handler } from "@netlify/functions";
import { google } from "googleapis";

const handler: Handler = async (event, _) => {
  if (event.httpMethod !== "GET") {
    return { statusCode: 405, data: "Method not supported" };
  }

  const values = await _getFromSheets();
  const response = JSON.stringify(_sheetToObject(values));
  return { statusCode: 200, body: response };
};

const _sheetToObject = (data: string[][]) => {
  const len = data.length;
  const res = [];
  for (let i = 1; i < len; i++) {
    res.push({
      img: data[i][0],
      testimonial: data[i][1],
    });
  }
  return res;
};

const _getFromSheets = async (): Promise<any[][]> => {
  const auth = new google.auth.JWT({
    email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    key: process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY?.replace(/\\n/gm, "\n"),
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
  const sheet = google.sheets("v4");
  const values = await sheet.spreadsheets.values.get({
    spreadsheetId: process.env.GOOGLE_SHEET_ID,
    auth: auth,
    range: process.env.GOOGLE_SHEET_TESTIMONIALS,
  });
  return values.data.values ?? [];
};

export { handler };
