import nodemailer from 'nodemailer';
import smtpTransport from 'nodemailer-smtp-transport';

import {
  SMTP_HOST,
  SMTP_PORT,
  SMTP_USER,
  SMTP_PASSWORD,
  SMTP_FROM_EMAIL,
} from '../settings.js';

const sendEmail = async (email, subject, text) => {
  try {
    // const transporter = nodemailer.createTransport(
    //   smtpTransport({
    //     service: SERVICE,
    //     host: SMTP_HOST,
    //     auth: {
    //       user: SMTP_USER,
    //       pass: SMTP_PASSWORD,
    //     },
    //     tls: {
    //       rejectUnauthorized: false,
    //     },
    //   })
    // );
    var transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASSWORD,
      },
    });
    await transporter.sendMail({
      from: SMTP_FROM_EMAIL,
      to: email,
      subject: subject,
      text: text,
    });
  } catch (err) {
    console.log(err, 'email not sent');
  }
};

export default sendEmail;
