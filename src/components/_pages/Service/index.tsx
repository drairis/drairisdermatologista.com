import {
  Container,
  Header,
  Content,
  BlockContent,
  Section,
  BackgroundMockup,
  SectionLine,
} from "./styles";
import { motion } from "framer-motion";
import {
  ANIMATION_EASING,
  ANIMATION_DURATION,
  container,
  popUp,
  fadeIn,
} from "constants/animations";
import { ServicePageProps } from "pages/especialidade/[uid]";
import { Button, Text, ShowInView, Grid, ContactModal } from "components";
import { renderSlices } from "utils";
import { ParagraphSlice } from "interfaces";
import { useGlobalContext } from "contexts";

export const Service = ({ page, highlihtedServices }: ServicePageProps) => {
  const body = page.data.body as unknown as ParagraphSlice[];

  const { setIsChatOpen } = useGlobalContext();

  return (
    <Container variants={container[0]} animate="animate" initial="initial">
      <Header>
        <BackgroundMockup variants={fadeIn} />
        <motion.img
          className="cover-image"
          alt={page.data.cover_image?.alt}
          src={page.data.cover_image?.url}
          transition={{
            easy: ANIMATION_EASING.custom[0],
            duration: ANIMATION_DURATION.fast,
          }}
        />
        <Grid>
          <Text render={page.data.title} variants={fadeIn} />
          <Text render={page.data.subtitle} variants={popUp} />
        </Grid>
      </Header>
      <Content>
        <BlockContent>
          {body.map((section, index) => (
            <ShowInView key={index}>
              <Section>
                <Text
                  variants={fadeIn}
                  render={section.primary.paragraph_title}
                />
                {section.items.map((item, index) => (
                  <Text variants={fadeIn} key={index} render={item.paragraph} />
                ))}
              </Section>
            </ShowInView>
          ))}
          <Button onClick={() => setIsChatOpen(true)} variants={popUp} rounded>
            {page.data.button_label[0]?.text}
          </Button>
          <SectionLine
            variants={{
              initial: {
                height: "0%",
              },
              animate: {
                height: "100%",
              },
            }}
          />
        </BlockContent>
      </Content>
      {renderSlices(page.data.body, highlihtedServices)}
      <ContactModal />
    </Container>
  );
};
