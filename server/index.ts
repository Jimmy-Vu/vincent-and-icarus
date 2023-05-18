import * as dotenv from 'dotenv';
import express, { type Response, type NextFunction } from 'express';
import type { TypedRequestBody } from "../types";
import twilio from "twilio";
import cors from "cors";
import multer from "multer";
import { type QueryResult } from 'pg';
import db from "./lib/db.js";
import path from 'path';
import staticMiddleware from './lib/static-middleware.js';
import { fileURLToPath } from 'url';
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhoneNum = process.env.TWILIO_PHONE_NUM;
const client = twilio(accountSid, authToken);
dotenv.config();

const app = express();
app.use(staticMiddleware);
const corsOptions = {
  origin: '*',
  credentials: true, // access-control-allow-credentials:true
  optionSuccessStatus: 200
}
app.use(cors(corsOptions));

app.get('/*', function (_req, res) {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const __filename = fileURLToPath(import.meta.url);
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const __dirname = path.dirname(__filename);
  console.log('__dirname', __dirname);
  res.sendFile(path.join(__dirname, '../../dist/index.html'), function (err) {
    if (err !== undefined) {
      console.error('err', err);
      res.status(500).send(err)
    }
  })
})

app.post('/api/message', multer().none(), (req: TypedRequestBody<{ name: string, number: string, archetype: string }>, res: Response, next: NextFunction) => {
  if (Object.entries(req.body).length === 0) {
    res.status(500).json({ message: 'Missing body' });
    return;
  }
  const { name, number: userNum, archetype } = req.body;
  let message = '';
  let sql = '';
  switch (archetype) {
    case '':
      sql = `
      SELECT *
        FROM "vincent"
        ORDER BY RANDOM() LIMIT 1`;
      break;
    case 'icarus':
      sql = `
      SELECT *
        FROM "icarus"
        ORDER BY RANDOM() LIMIT 1`;
      break;
    case 'neutral':
      sql = `
      SELECT *
        FROM "neutral"
        ORDER BY RANDOM() LIMIT 1`;
      break;
  }

  db.query(sql)
    .then((result: QueryResult<{ message: string }>) => {
      message = `Hey ${name}! ${result.rows[0].message}`;
      sendTextMsg(userNum, message, res);
    })
    .catch((err: Error) => { next(err); });
});

function sendTextMsg(userNum: string, bodyMsg: string, res: Response): void {
  client.messages
    .create({
      body: bodyMsg,
      from: `+${twilioPhoneNum}`,
      to: userNum
    })
    .then(message => {
      console.log(message.sid);
      res.status(200).json({ message: 'Message sent successfully' });
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'Failed to send message' })
    })
}

app.listen(process.env.PORT, () => {
  console.log(`Express listening on port ${process.env.PORT}`);
});
