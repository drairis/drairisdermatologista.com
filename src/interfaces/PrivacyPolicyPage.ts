import { RichTextBlock } from "prismic-reactjs";
import { PrismicDocument } from "./Prismic";

export type PrivacyPolicy = PrismicDocument<PrivacyPolicyInterface>;

export interface PrivacyPolicyInterface {
  title: RichTextBlock[];
  subtitle: RichTextBlock[];
  paragraph: RichTextBlock[];
}
