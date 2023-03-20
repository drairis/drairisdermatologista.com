import type { NextApiRequest, NextApiResponse } from "next";
import { sendEmail } from "services";

import {
  THANKS_TEMPLATE,
  ADMIN_EMAIL_TEMPLATE,
} from "services/contact/email/templates/v1";

export default async function mailer(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // const today = new Date();
  // const dd = String(today.getDate()).padStart(2, "0");
  // const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  // const yyyy = today.getFullYear();

  // const date = { dd, mm, yyyy };

  const admin_email = process.env.ADMIN_MAIL || "";
  try {
    const { name, email, phone, message } = req.body;
    if (!name || !email) {
      return res.status(403).json({ error: "missing informations" });
    }
    await sendEmail(
      admin_email,
      ADMIN_EMAIL_TEMPLATE({ name, email, phone, message }),
      "Contato do site"
    );
    await sendEmail(
      email,
      THANKS_TEMPLATE({ name, email, phone, message }),
      "Já recebemos seu email! Retornaremos em breve!"
    );
    return res.status(200).json({ text: "Email sent" });
  } catch (error) {
    return res.status(500).json({ error });
  }
}
