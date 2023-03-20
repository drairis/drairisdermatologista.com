import { ServicePage } from "interfaces";
import Prismic from "prismic-javascript";
import { DefaultClient } from "prismic-javascript/types/client";
import { Document } from "prismic-javascript/types/documents";

export const getPrismicClient = (): DefaultClient => {
  const endpoint = process.env.PRISMIC_ENDPOINT || "";
  const prismic = Prismic.client(endpoint);

  return prismic;
};

export const getByUID = async (
  uid: string,
  type?: string
): Promise<Document | null> => {
  const prismic = getPrismicClient();
  const response = await prismic.getByUID(type || "landing_page", uid, {});
  return response;
};

export const getAllServices = async (): Promise<ServicePage[]> => {
  const prismic = getPrismicClient();
  const response = await prismic.query(
    Prismic.Predicates.at("document.type", "service_page"),
    { orderings: "[my.service_page.date desc]" }
  );

  return response.results;
};

export const getHightlightedServices = async (): Promise<ServicePage[]> => {
  const prismic = getPrismicClient();
  const response = await prismic.query(
    Prismic.Predicates.at("document.type", "service_page"),
    { orderings: "[my.service_page.date desc]" }
  );

  return response.results.filter(
    (service: ServicePage) => service.data.flagged
  );
};

export const getServicesByUID = async (
  uid: string
): Promise<Document | null> => {
  const prismic = getPrismicClient();
  const response = await prismic.getByUID("service_page", uid, {});
  return response;
};
