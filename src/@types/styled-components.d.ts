import { defaultTheme } from "../styles/default";

type Theme = typeof defaultTheme;

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
