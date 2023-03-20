export const truncateString = (str: string, num: number): string => {
  if (str.length <= num) {
    return str;
  }
  return `${str.slice(0, num)}...`;
};

export const capitalizeFirstLetter = (str: string): string =>
  str[0].toUpperCase() + str.slice(1);

export const normalizeString = (str: string): string =>
  str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

export const firstName = (str: string): string => {
  const name = str.split(" ");
  return name[0];
};

export const capitalize = (str: string): string => {
  const words = str.split(" ");
  const capitalizedWords = words.map((word) => {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  });
  return capitalizedWords.join(" ");
};

export const initials = (str: string): string => {
  const name = str.split(" ");
  const initials = name
    .slice(0, 2)
    .map((word) => {
      return word[0].toUpperCase();
    })
    .join("");
  return initials;
};
