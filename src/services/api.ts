import axios from "axios";

export const crmApi = axios.create({
  baseURL: process.env.CRM_HOST,
});

export const authRoute = (
  route: string,
  params?: Record<string, string | number>
): string => {
  let searchParams = "";
  if (params) {
    searchParams = Object.entries(params)
      .map(([key, value]) => `${key}=${String(value)}`)
      .join("&");
  }
  return `${route}/${process.env.CRM_ACCOUNT_ID}${
    params ? `?${searchParams}` : ""
  }`;
};
