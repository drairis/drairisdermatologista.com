import { Contact, Highlights, Testimonial, About, Clinic } from "components";
import {
  AboutSlice,
  ClinicSlice,
  ContactSlice,
  HighlightsSlice,
  LandingPageSlices,
  ServicePage,
  TestimonialSlice,
} from "interfaces";
import { Fragment } from "react";

export const renderSlices = (
  slice: LandingPageSlices,
  highlihtedServices: ServicePage[]
): React.ReactNode => {
  return slice.map((slice, index) => {
    switch (slice.slice_type) {
      case "highlights":
        return (
          <Highlights
            key={index}
            highlihtedServices={highlihtedServices}
            slice={slice as unknown as HighlightsSlice}
          />
        );

      case "testimonial":
        return (
          <Testimonial
            key={index}
            slice={slice as unknown as TestimonialSlice}
          />
        );

      case "contact":
        return <Contact key={index} slice={slice as unknown as ContactSlice} />;

      case "about":
        return <About key={index} slice={slice as unknown as AboutSlice} />;

      case "clinic":
        return <Clinic key={index} slice={slice as unknown as ClinicSlice} />;

      default:
        return <Fragment key={index} />;
    }
  });
};
