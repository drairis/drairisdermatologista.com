import axios from "axios";

export const crm = axios.create({
  baseURL: process.env.CRM_HOST,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});
