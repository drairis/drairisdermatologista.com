import { render, RenderResult } from "@testing-library/react";
import { ThemeProvider } from "components/atoms";
import React from "react";

export const renderWithTheme = (children: JSX.Element): RenderResult => {
  return render(<ThemeProvider>{children}</ThemeProvider>);
};
