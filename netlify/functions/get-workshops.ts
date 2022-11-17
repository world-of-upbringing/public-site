import { Handler } from "@netlify/functions";
import { google } from "googleapis";
import { IWorkshop } from "../../common/interfaces/IWorkshops";

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
  const res: IWorkshop[] = [];
  for (let i = 1; i < len; i++) {
    res.push({
      Title: data[i][0],
      Subtitle: data[i][1],
      Date: data[i][2],
      Duration: Number(data[i][3]),
      PaymentLink: data[i][4],
      Amount: Number(data[i][5]),
      Description: data[i][6],
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
    range: process.env.GOOGLE_SHEET_WORKSHOPS,
  });
  return values.data.values ?? [];
};

export { handler };
