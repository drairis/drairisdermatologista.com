import { crm } from "./api";

export const createLeadService = async ({
  name,
  email,
  phone,
  url,
  resume,
  organizationName,
}: {
  name: string;
  email?: string;
  phone: string;
  url?: string;
  resume?: string;
  organizationName?: string;
}) => {
  const lead = {
    name,
    email,
    phone,
    url,
    message: resume,
    organization_name: organizationName,
  };

  const response = await crm.post(`/deal/${process.env.CRM_TOKEN}`, lead);
  return response.data;
};
