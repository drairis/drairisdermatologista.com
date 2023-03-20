export const formatPhone = (phone: string): string => {
  return phone
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{4})(\d)/, "$1-$2")
    .replace(/(\d{4})-(\d)(\d{4})/, "$1$2-$3")
    .replace(/(-\d{4})\d+?$/, "$1");
};

export const removePhoneFormat = (phone: string): string => {
  return phone
    .replace("(", "")
    .replace(")", "")
    .replace("-", "")
    .replace(" ", "");
};

export const formatOnlyNumbers = (value: string): string => {
  return value.replace(/\D/g, "");
};
