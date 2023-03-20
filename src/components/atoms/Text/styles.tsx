import { motion } from "framer-motion";
import styled, { css } from "styled-components";

interface TextContainerProps {
  $width?: string;
}

export const Container = styled(motion.div)<TextContainerProps>`
  ${({ $width }) => css`
    width: ${$width ? "100%" : "auto"};};	
    max-width: ${$width ? $width : "auto"};
  `}
`;
