import axios from "axios";

interface EmailServiceProps {
  email: string;
  name: string;
  phone?: string;
  message: string;
}

export const sendEmailService = async (fields: EmailServiceProps) => {
  await axios.post("/api/mailer/v1", {
    name: fields.name,
    phone: fields.phone,
    email: fields.email,
    message: fields.message,
  });
};
