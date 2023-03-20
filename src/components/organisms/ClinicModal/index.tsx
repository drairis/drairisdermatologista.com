import { Card } from "./styles";
import { motion } from "framer-motion";
import { fadeIn } from "constants/animations";
import { ClinicSliceItem } from "interfaces";

interface ClinicModalProps {
  isOpen?: boolean;
  onClick?: () => void;
  card?: string;
  item?: ClinicSliceItem;
}

export const ClinicModal = ({ isOpen, onClick, item }: ClinicModalProps) => {
  return (
    <>
      <Card
        variants={fadeIn}
        whileHover={{ scale: 1.05 }}
        $isOpen={isOpen}
        onClick={onClick}
      >
        <motion.img
          layoutId={item?.clinic_image.url}
          alt={item?.clinic_image.alt}
          src={item?.clinic_image.url}
        />
      </Card>
    </>
  );
};
