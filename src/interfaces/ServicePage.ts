import { RichTextBlock } from "prismic-reactjs";
import { PrismicDocument, PrismicImage, PrismicLink } from ".";
import { LandingPageSlices } from "./LandingPage";

export type ServicePage = PrismicDocument<ServicePageInterface>;

export type ServicePageInterface = {
  title: RichTextBlock[];
  subtitle: RichTextBlock[];
  paragraph: RichTextBlock[];
  cover_image: PrismicImage;
  button_label: RichTextBlock[];
  button_url: PrismicLink;
  flagged: boolean;
  body: LandingPageSlices;
};
