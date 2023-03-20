import React from "react";
import { OverlayProps } from "./interface";
import { Container } from "./styles";

export const Overlay = ({ close, isVisible, darker, id }: OverlayProps) => {
  return (
    <Container
      data-testid="overlay"
      onClick={close}
      $isVisible={isVisible}
      $darker={darker}
      id={id}
    />
  );
};
