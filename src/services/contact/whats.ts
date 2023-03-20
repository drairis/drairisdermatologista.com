export const sendWhatsApp = (
  name: string,
  message: string,
  phone: string,
  destination: string
) => {
  const url = `https://api.whatsapp.com/send?phone=${encodeURIComponent(
    destination
  )}&text=${encodeURIComponent(
    `Olá, meu nome é ${name} e estou entrando em contato para agendar uma consulta. Meu número é ${phone}.\n\n${message}`
  )}`;
  return url;
};
