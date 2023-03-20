import React from "react";
import { ContainerComponent } from "./styles";

interface ContainerProps {
  children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <ContainerComponent data-testid="container-component">
      {children}
    </ContainerComponent>
  );
};
