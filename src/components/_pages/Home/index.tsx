/* eslint-disable @next/next/link-passhref */
import { Button, Text, ContactModal } from "components";
import { container, fadeIn, popUp } from "constants/animations";
import { useGlobalContext } from "contexts";
import { motion } from "framer-motion";
import { HomeProps } from "pages";
import { renderSlices } from "utils";
import { Container, Header, Content } from "./styles";

export const Home = ({ pageData, highlihtedServices }: HomeProps) => {
  const content = pageData.data;

  const { setIsChatOpen } = useGlobalContext();

  return (
    <Container>
      <Header variants={container[0]} initial="initial" animate="animate">
        <motion.img
          alt={content.cover_image.alt}
          src={content.cover_image.url}
          variants={{
            ...fadeIn,
            animate: {
              opacity: 0.5,
            },
          }}
        />
        <div className="content">
          <Text variants={fadeIn} render={content.title} />
          <Text variants={fadeIn} render={content.subtitle} />
          <Button variants={popUp} onClick={() => setIsChatOpen(true)}>
            <Text render={content.button_label} />
          </Button>
        </div>
        <div className="copy-section">
          <Text
            transition={{ delay: 3.5 }}
            variants={fadeIn}
            render={content.paragraph}
          />
        </div>
      </Header>

      <Content>{renderSlices(content.body, highlihtedServices)}</Content>

      <ContactModal />
    </Container>
  );
};
