import { PushDataLayerProps } from "interfaces";
const enviroment = process.env.NEXT_PUBLIC_ENVIRONMENT;

declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

export const pushDataLayer = ({ ...rest }: PushDataLayerProps): void => {
  if (enviroment !== "production") return;
  if (!window.dataLayer) window.dataLayer = [];

  window.dataLayer.push(rest);
};
