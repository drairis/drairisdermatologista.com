import { ServiceCard, ShowInView, Grid } from "components";
import { container, popUp } from "constants/animations";
import { HighlightsSlice, ServicePage } from "interfaces";
import { RichText } from "prismic-reactjs";
import { Container, Content } from "./styles";
// import { AiOutlineArrowDown } from "react-icons/ai";

interface HighlightsProps {
  slice: HighlightsSlice;
  highlihtedServices: ServicePage[];
}

export const Highlights = ({ slice, highlihtedServices }: HighlightsProps) => {
  return (
    <Container
      id="especialidades"
      variants={container[0]}
      initial="initial"
      animate="animate"
    >
      <Grid>
        <ShowInView>
          <RichText render={slice.primary.highlights_title} />
          {slice.primary.highlights_subtitle && (
            <RichText render={slice.primary.highlights_subtitle} />
          )}
        </ShowInView>
      </Grid>
      <ShowInView>
        <Content>
          {highlihtedServices?.map((service, index) => (
            <ServiceCard
              key={index}
              variants={popUp}
              uid={service.uid}
              data={service.data}
            />
          ))}
        </Content>
      </ShowInView>
      {/* <ShowInView>
        <Button outline variants={popUp} size="small" rounded color="primary">
          <AiOutlineArrowDown size={16} />
        </Button>
      </ShowInView> */}
    </Container>
  );
};
