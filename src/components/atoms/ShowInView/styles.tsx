import { motion } from "framer-motion";
import styled, { css } from "styled-components";

interface ContainerProps {
  $fullWidth?: boolean;
}

export const Container = styled(motion.div)<ContainerProps>`
  ${({ $fullWidth }) => css`
    display: block;
    width: ${$fullWidth ? "100%" : "auto"};
  `}
`;
