import { TestimonialSlice } from "interfaces";
import { RichText } from "prismic-reactjs";
import { Container, Content, TestimonialCard } from "./styles";
import { Grid, ShowInView } from "components";
import { fadeIn } from "constants/animations";
import Rating from "@mui/material/Rating";
import { Text } from "components/atoms";
import { useRouter } from "next/router";
import { useMemo } from "react";

interface TestimonialProps {
  slice: TestimonialSlice;
}

export const Testimonial = ({ slice }: TestimonialProps) => {
  const router = useRouter();

  const isHome = useMemo(() => {
    return router.pathname === "/";
  }, [router.pathname]);

  return (
    <Container id="testemunhos">
      {isHome && (
        <img alt="" src="/assets/shapes/top-wave.svg" className="wave top" />
      )}
      <ShowInView>
        <Grid>
          <RichText render={slice.primary.testimonial_title} />
          <Content>
            {slice.items.map((item, index) => (
              <TestimonialCard key={index} variants={fadeIn}>
                <RichText render={item.testimonial_name} />
                <Rating readOnly defaultValue={5} />
                <Text variants={fadeIn} render={item.testimonial} />
              </TestimonialCard>
            ))}
          </Content>
        </Grid>
      </ShowInView>
      {isHome && (
        <img
          alt=""
          src="/assets/shapes/bottom-wave.svg"
          className="wave bottom"
        />
      )}
    </Container>
  );
};
