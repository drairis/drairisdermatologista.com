import React from "react";
import { OverlayProps } from "./interface";
import { Container } from "./styles";
import { fadeIn } from "constants/animations";

export const Overlay = ({ close, isVisible, darker, id }: OverlayProps) => {
  return (
    <Container
      data-testid="overlay"
      variants={fadeIn}
      initial="initial"
      animate={isVisible ? "animate" : "initial"}
      transition={{ duration: 0.1 }}
      onClick={close}
      $isVisible={isVisible}
      $darker={darker}
      id={id}
    />
  );
};
