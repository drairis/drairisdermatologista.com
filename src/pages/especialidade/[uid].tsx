import { Service } from "components/_pages";
import { ServicePage } from "interfaces";
import { GetStaticPropsContext } from "next";
import {
  getAllServices,
  getServicesByUID,
  getHightlightedServices,
} from "services/prismic";

export interface ServicePageProps {
  page: ServicePage;
  highlihtedServices: ServicePage[];
}

const Page = ({ page, highlihtedServices }: ServicePageProps) => {
  return <Service highlihtedServices={highlihtedServices} page={page} />;
};

export default Page;

export async function getStaticPaths() {
  const services = await getAllServices();
  return {
    paths: services.map((service) => ({ params: { uid: service.uid } })),
    fallback: false,
  };
}

export async function getStaticProps(ctx: GetStaticPropsContext) {
  const { uid } = ctx.params as { uid: string };
  const page = await getServicesByUID(uid);
  const highlihtedServices = await getHightlightedServices();

  return {
    props: {
      page,
      highlihtedServices,
    },
    revalidate: 60,
  };
}
