import { PrivacyPolicy } from "components/_pages";
import { PrivacyPolicy as Interface } from "interfaces";
import { getByUID } from "services/prismic";

export interface PrivacyPolicyProps {
  pageData: Interface;
}

const Page = ({ pageData }: PrivacyPolicyProps) => {
  return <PrivacyPolicy pageData={pageData} />;
};

export default Page;

export async function getStaticProps() {
  const pageData = await getByUID("politica-de-privacidade", "privacy_policy");

  return {
    props: {
      pageData,
    },
    revalidate: 60,
  };
}
