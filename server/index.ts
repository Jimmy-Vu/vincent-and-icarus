import * as dotenv from 'dotenv';
import express, { type Response, type NextFunction } from 'express';
import type { TypedRequestBody } from "../types";
import twilio from "twilio";
import cors from "cors";
import multer from "multer";
import pg from 'pg';
import { type QueryResult } from 'pg';

const db = new pg.Pool({
  user: 'hightower',
  password: 'hightower',
  host: 'localhost',
  port: 5432,
  database: 'vincent_icarus_db'
});
const app = express();
dotenv.config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhoneNum = process.env.TWILIO_PHONE_NUM;
const client = twilio(accountSid, authToken);
const corsOptions = {
  origin: '*',
  credentials: true, // access-control-allow-credentials:true
  optionSuccessStatus: 200
}
app.use(cors(corsOptions));

app.post('/api/message', multer().none(), (req: TypedRequestBody<{ name: string, number: string, archetype: string }>, res: Response, next: NextFunction) => {
  console.log('Order received');
  console.log('BODY', req.body);
  if (Object.entries(req.body).length === 0) {
    res.status(500).json({ message: 'Missing body' });
    return;
  }
  const { name, number: userNum, archetype } = req.body;
  let message = '';
  let sql = '';
  switch (archetype) {
    case 'vincent':
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
  }
  db.query(sql)
    .then((result: QueryResult<{ message: string }>) => {
      message = result.rows[0].message;
      sendTextMsg(userNum, message, res);
      return res.status(400).json({ message: 'Your message has been sent.' })
    })
    .catch((err: Error) => { next(err); });
});

app.listen(process.env.PORT, () => {
  console.log(`Express listening on port ${process.env.PORT}`);
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
