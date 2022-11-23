import { Handler } from "@netlify/functions";
import { google } from "googleapis";
import { IWorkshop } from "../../lib/interfaces/IWorkshops";

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
  const headers: { [id: string]: number } = {};
  data[0].forEach((element, index) => {
    headers[element] = index;
  });

  for (let i = 1; i < len; i++) {
    res.push({
      Title: data[i][headers["Title"]],
      Subtitle: data[i][headers["Subtitle"]],
      Language: data[i][headers["Language"]],
      Date: data[i][headers["Date"]],
      Duration: Number(data[i][headers["Duration (hours)"]]),
      PaymentLink: data[i][headers["Instamojo Link"]],
      Amount: Number(data[i][headers["Amount"]]),
      Description: data[i][headers["Description"]],
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
