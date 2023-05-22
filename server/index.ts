import * as dotenv from 'dotenv';
import express, { type Response, type NextFunction } from 'express';
import type { TypedRequestBody } from "../types";
import twilio from "twilio";
import cors from "cors";
import multer from "multer";
import path from 'path';
import staticMiddleware from './lib/static-middleware.js';
import { fileURLToPath } from 'url';
import supabase from './lib/supabase.js';
dotenv.config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhoneNum = process.env.TWILIO_PHONE_NUM;
const client = twilio(accountSid, authToken);

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
  res.sendFile(path.join(__dirname, '../dist/index.html'), function (err) {
    if (err !== undefined) {
      console.error('err', err);
      res.status(500).send(err)
    }
  })
})

// eslint-disable-next-line @typescript-eslint/no-misused-promises
app.post('/api/message', multer().none(), async (req: TypedRequestBody<{ name: string, number: string, archetype: string }>, res: Response, next: NextFunction) => {
  const { name, number: userNum, archetype } = req.body;
  if (name === '' || userNum === '' || archetype === '') {
    console.error('one or more of the required fields are empty');
    res.status(500).json({ message: 'Missing required fields' });
    return;
  }

  if (supabase === undefined) {
    console.error('supabase is undefined');
    res.status(500).json({ message: 'Supabase is undefined' });
    return;
  }
  let message = '';
  switch (archetype) {
    case 'vincent': {
      const { data, error } = await supabase.rpc('get_random_message_vincent');
      message = `Hey ${name}! ${data}`;
      sendTextMsg(userNum, message, res);
      break;
    }
    case 'icarus': {
      const { data, error } = await supabase.rpc('get_random_message_icarus');
      message = `Hey ${name}! ${data}`;
      sendTextMsg(userNum, message, res);
      break;
    }
    case 'neutral': {
      const { data, error } = await supabase.rpc('get_random_message_neutral');
      message = `Hey ${name}! ${data}`;
      sendTextMsg(userNum, message, res);
      break;
    }
  }
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
