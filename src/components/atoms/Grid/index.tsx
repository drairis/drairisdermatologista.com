import React from "react";
import { Container } from "./styles";

export interface GridProps {
  children: React.ReactNode;
  breakpoint?: number;
}

export const Grid = ({ children, breakpoint }: GridProps) => {
  return <Container breakpoint={breakpoint}>{children}</Container>;
};
