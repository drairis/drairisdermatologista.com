import { ClinicModal, Text, Button, ShowInView } from "components";
import { AnimateSharedLayout } from "framer-motion";
import { ClinicSlice, ClinicSliceItem } from "interfaces";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";
import {
  Container,
  ImageContainer,
  ModalContainer,
  ModalContent,
} from "./styles";
import { container, popUp } from "constants/animations";
import { Overlay } from "components/atoms";
import { useGlobalContext } from "contexts";

interface ClinicSliceProps {
  slice: ClinicSlice;
}

export const Clinic = ({ slice }: ClinicSliceProps) => {
  const [card, setCard] = useState<ClinicSliceItem | undefined>();
  const { setIsChatOpen } = useGlobalContext();

  const items = slice.items;

  return (
    <AnimateSharedLayout>
      <ShowInView fullWidth variants={container[0]}>
        <Container id="clinica">
          <Text
            width="1024px"
            variants={popUp}
            render={slice.primary.clinic_title}
          />
          {slice.primary.clinic_subtitle && (
            <Text
              width="1024px"
              variants={popUp}
              render={slice.primary.clinic_subtitle}
            />
          )}
          <ImageContainer>
            {items.map((item, index) => (
              <ClinicModal
                onClick={() => setCard(item)}
                isOpen={
                  card?.clinic_image_title[0].text ===
                  item?.clinic_image_title[0].text
                }
                key={index}
                item={item}
              />
            ))}
          </ImageContainer>
          <Button
            outline
            color="primary"
            rounded
            onClick={() => setIsChatOpen(true)}
          >
            {slice.primary.clinic_button_label[0].text}
          </Button>
        </Container>
        {card !== undefined && (
          <>
            <ModalContainer
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.35, ease: "easeIn" }}
            >
              <AiOutlineClose onClick={() => setCard(undefined)} />
              <ModalContent>
                <motion.img
                  layoutId={card.clinic_image.url}
                  alt={card.clinic_image.alt}
                  src={card.clinic_image.url}
                />

                <Text render={card.clinic_image_title} />
                <Text render={card.clinic_info} />
              </ModalContent>
              <Overlay
                darker
                isVisible={card !== undefined}
                close={() => setCard(undefined)}
              />
            </ModalContainer>
          </>
        )}
      </ShowInView>
    </AnimateSharedLayout>
  );
};
