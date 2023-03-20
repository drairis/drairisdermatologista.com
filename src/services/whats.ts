export const sendWhatsApp = (destination: string) => {
  const url = `https://api.whatsapp.com/send?phone=${encodeURIComponent(
    destination
  )}&text=`;
  return url;
};
