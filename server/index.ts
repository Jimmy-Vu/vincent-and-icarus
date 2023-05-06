import * as dotenv from 'dotenv';
import express from 'express';
const app = express();
dotenv.config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhoneNum = process.env.TWILIO_PHONE_NUM;
import twilio from "twilio";
const client = twilio(accountSid, authToken);
const staticMiddleware = require('./static-middleware');

app.use(staticMiddleware);
app.post('/api/message', (req, res, next) => {
  const { name, number: userNum, archetype } = req.body;
  console.log('Order recieved');
  client.messages
    .create({
      body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
      from: `+${twilioPhoneNum}`,
      to: `+${userNum}`
    })
    .then(message => console.log(message.sid));
})

app.listen(process.env.PORT, () => {
  console.log(`Express listening on port ${process.env.PORT}`);
});
