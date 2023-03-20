import React from "react";
import { ThemeProvider as Provider } from "styled-components";

import { defaultTheme } from "styles/default";

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return <Provider theme={defaultTheme}>{children}</Provider>;
};
