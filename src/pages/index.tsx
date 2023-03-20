import { Home } from "components/_pages";
import { LandingPage, ServicePage } from "interfaces";
import { getByUID, getHightlightedServices } from "services/prismic";

export interface HomeProps {
  pageData: LandingPage;
  highlihtedServices: ServicePage[];
}

const Page = ({ pageData, highlihtedServices }: HomeProps) => {
  return <Home highlihtedServices={highlihtedServices} pageData={pageData} />;
};

export default Page;

export async function getStaticProps() {
  const pageData = await getByUID("dra-thais-magalhaes");
  const highlihtedServices = await getHightlightedServices();
  return {
    props: {
      pageData,
      highlihtedServices,
    },
    revalidate: 60,
  };
}
