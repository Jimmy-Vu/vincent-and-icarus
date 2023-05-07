import * as dotenv from 'dotenv';
import express, { type Response, type NextFunction } from 'express';
import type { TypedRequestBody } from "../types";
import twilio from "twilio";
import cors from "cors";
import multer from "multer";
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
// const jsonMiddleware = express.json();
// app.use(jsonMiddleware);

app.post('/api/message', multer().none(), (req: TypedRequestBody<{ name: string, number: string, archetype: string }>, res: Response, next: NextFunction) => {
  console.log('Order received');
  console.log('BODY', req.body);
  if (Object.entries(req.body).length === 0) {
    res.status(500).json({ message: 'Missing body' });
    return;
  }
  const { name, number: userNum, archetype } = req.body;
  client.messages
    .create({
      body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
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
})

app.listen(process.env.PORT, () => {
  console.log(`Express listening on port ${process.env.PORT}`);
});
