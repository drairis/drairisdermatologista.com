import { RichTextBlock } from "prismic-reactjs";
import {
  PrismicDocument,
  PrismicImage,
  PrismicLink,
  HighlightsSlice,
  TestimonialSlice,
  ParagraphSlice,
} from ".";

export type LandingPage = PrismicDocument<LandingPageInterface>;
export type LandingPageSlices = (
  | HighlightsSlice
  | TestimonialSlice
  | ParagraphSlice
)[];

export type LandingPageInterface = {
  title: RichTextBlock[];
  subtitle: RichTextBlock[];
  paragraph: RichTextBlock[];
  cover_image: PrismicImage;
  button_label: RichTextBlock[];
  button_url: PrismicLink;
  body: LandingPageSlices;
};
