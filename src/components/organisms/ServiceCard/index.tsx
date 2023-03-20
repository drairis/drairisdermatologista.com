import { Button } from "components";
import { ANIMATION_DURATION, ANIMATION_EASING } from "constants/animations";
import { motion, Variants } from "framer-motion";
import { PrismicImage } from "interfaces";
import Link from "next/link";
import { RichTextBlock } from "prismic-reactjs";
import { truncateString } from "utils";
import { Container } from "./styles";
interface ServiceCardProps {
  data: {
    title: RichTextBlock[];
    subtitle: RichTextBlock[];
    cover_image: PrismicImage;
  };
  uid?: string;
  variants?: Variants;
}

export const ServiceCard = ({ data, uid, variants }: ServiceCardProps) => {
  return (
    <Link href={`/especialidade/${uid}`} passHref>
      <Container variants={variants}>
        <div className="img-wrapper">
          <motion.img
            alt={data.cover_image?.alt}
            src={data.cover_image?.url}
            transition={{
              easy: ANIMATION_EASING.custom[0],
              duration: ANIMATION_DURATION.fast,
            }}
          />
        </div>
        <div className="content">
          {data?.title && <h3>{data?.title[0].text}</h3>}
          {data?.subtitle && (
            <h4>{truncateString(data?.subtitle[0].text || "", 200)}</h4>
          )}
          <Button size="small" outline color="primary">
            Saiba mais
          </Button>
        </div>
      </Container>
    </Link>
  );
};
