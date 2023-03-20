import type { NextApiRequest, NextApiResponse } from "next";
import { ADMIN_EMAIL_TEMPLATE } from "services/contact/email/templates/v1";
import { sendEmail } from "services/contact/nodemailer";

export default async function mailer(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const admin_email = process.env.ADMIN_MAIL || "";

  try {
    const { name, phone, message } = req.body;

    if (!name) {
      return res.status(403).json({ error: "missing informations" });
    }
    await sendEmail(
      admin_email,
      ADMIN_EMAIL_TEMPLATE({ name, email: "não informado", phone, message }),
      "[WPP] - Contato do site"
    );
    return res.status(200).json({ text: "Email sent successfully" });
  } catch (error) {
    return res.status(500).json({ error });
  }
}
