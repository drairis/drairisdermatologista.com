import { Container } from "./styles";
import { RichText, RichTextBlock } from "prismic-reactjs";
import {
  TargetAndTransition,
  Transition,
  VariantLabels,
  Variants,
} from "framer-motion";

interface TextProps {
  render: RichTextBlock[];
  variants?: Variants;
  transition?: Transition;
  exit?: TargetAndTransition | VariantLabels;
  width?: string;
}
export const Text = ({
  render,
  variants,
  transition,
  exit,
  width,
}: TextProps) => {
  return (
    <Container
      $width={width}
      exit={exit}
      variants={variants}
      transition={transition}
    >
      {render && <RichText render={render} />}
    </Container>
  );
};
