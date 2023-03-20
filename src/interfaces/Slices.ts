import { RichTextBlock } from "prismic-reactjs";
import { PrismicImage, PrismicLink } from "./Prismic";

export interface ParagraphSlice {
  slice_type: string;
  slice_label: null | string | null;
  primary: {
    paragraph_title: RichTextBlock[];
  };
  items: {
    paragraph: RichTextBlock[];
  }[];
}

export type HighlightsSlice = {
  slice_type: string;
  slice_label: string | null;
  items: [];
  primary: {
    highlights_title: RichTextBlock[];
    highlights_subtitle: RichTextBlock[];
  };
};

export type TestimonialSlice = {
  slice_type: string;
  slice_label: string | null;
  items: {
    testimonial_name: RichTextBlock[];
    testimonial: RichTextBlock[];
  }[];
  primary: {
    testimonial_title: RichTextBlock[];
  };
};

export type ContactSlice = {
  slice_type: string;
  slice_label: string | null;
  items: [];
  primary: {
    contact_title: RichTextBlock[];
    contact_subtitle: RichTextBlock[];
    contact_button_label: RichTextBlock[];
    address_title: RichTextBlock[];
    street_name: RichTextBlock[];
    city: RichTextBlock[];
    cep: RichTextBlock[];
  };
};

export type AboutSlice = {
  slice_type: string;
  slice_label: string | null;
  items: [];
  primary: {
    about_title: RichTextBlock[];
    about_paragraph: RichTextBlock[];
    doctor_crm: RichTextBlock[];
    about_button_label: RichTextBlock[];
    about_button_link: PrismicLink;
    about_image: PrismicImage;
  };
};

export type ClinicSlice = {
  slice_type: string;
  slice_label: string | null;
  items: ClinicSliceItem[];
  primary: {
    clinic_title: RichTextBlock[];
    clinic_subtitle: RichTextBlock[];
    clinic_button_label: RichTextBlock[];
    clinic_button_link: PrismicLink;
    clinic_image: PrismicImage;
  };
};

export type ClinicSliceItem = {
  clinic_image_title: RichTextBlock[];
  clinic_info: RichTextBlock[];
  clinic_image: PrismicImage;
};
