import { Text } from "components/atoms";
import { PrivacyPolicyProps } from "pages/politicas-de-privacidade";
import { Container, Content } from "./styles";

export const PrivacyPolicy = ({ pageData }: PrivacyPolicyProps) => {
  return (
    <Container>
      <Content>
        <h1>{pageData.data.title[0].text}</h1>
        <Text render={pageData.data.paragraph} />
      </Content>
    </Container>
  );
};
