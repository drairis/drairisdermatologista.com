import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.zoho.com",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD,
  },
});

export const sendEmail = async (
  emailToSend: string,
  HtmlBody: string,
  subject?: string
) => {
  // may need the following line in the future: if so, do not forget to delete it after using
  // process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
  const options = {
    from: '"Dra. Thaís Magalhães <noreply@drathaismagalhaes.com.br>"', // sender address
    to: emailToSend, // list of receivers
    subject: subject, // Subject line
    html: HtmlBody, // html body
  };

  const info = await transporter.sendMail(options);
  return info;
};
