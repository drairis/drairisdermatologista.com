import { Grid, Button, Text, ShowInView } from "components";
import { fadeIn, popUp, container } from "constants/animations";
import { AboutSlice } from "interfaces";
import { motion } from "framer-motion";
import { Container, Content, ImageMock, MainMock } from "./styles";
import { useRouter } from "next/router";
import { useMemo } from "react";
import { useGlobalContext } from "contexts";

interface AboutProps {
  slice: AboutSlice;
}

export const About = ({ slice }: AboutProps) => {
  const router = useRouter();
  const isHomePage = useMemo(() => router.pathname === "/", [router.pathname]);

  const { setIsChatOpen } = useGlobalContext();

  return (
    <Container id="sobre">
      <Grid>
        <ShowInView>
          <Content variants={container[0]} initial="initial" animate="animate">
            <p className="about-span">
              {">"} CRM: {slice.primary.doctor_crm[0].text}
            </p>
            <Text variants={fadeIn} render={slice.primary.about_title} />
            <div className="paragraph">
              <Text variants={fadeIn} render={slice.primary.about_paragraph} />
            </div>
            <Button
              onClick={() => setIsChatOpen(true)}
              variants={popUp}
              rounded
              outline
              color="primary"
            >
              {slice.primary.about_button_label[0]?.text}
            </Button>
          </Content>
        </ShowInView>
      </Grid>
      <MainMock variants={container[0]} animate="animate" initial="initial">
        <div className="mock" />
        <ImageMock>
          <motion.img
            variants={fadeIn}
            src={slice.primary.about_image.url}
            alt="About"
          />
          <motion.div className="image-mock" />
        </ImageMock>
      </MainMock>
      {isHomePage && (
        <img
          alt=""
          className="wave bottom behind"
          src="/assets/shapes/about-wave.svg"
        />
      )}
    </Container>
  );
};
