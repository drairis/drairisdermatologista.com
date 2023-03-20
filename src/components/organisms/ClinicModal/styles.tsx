import { motion } from "framer-motion";
import styled, { css } from "styled-components";

interface ClinicModalContainerProps {
  $isOpen?: boolean;
}

export const Container = styled(motion.div)<ClinicModalContainerProps>`
  ${({ $isOpen }) => css`
    position: ${$isOpen ? "fixed" : "inherit"};
    top: 0;
    left: 0;
    width: ${$isOpen ? "100vw" : "100%"};
    height: ${$isOpen ? "100vmin" : "280px"};
    transition: all 1.5 ease;
    z-index: ${$isOpen ? "10" : "1"};
    background-color: #505050;
  `}
`;

export const Card = styled(motion.div)<ClinicModalContainerProps>`
  ${({ $isOpen }) => css`
    position: ${$isOpen ? "inherit" : "relative"};
    background-color: transparent;
    display: ${$isOpen ? "none" : "flex"};
    width: 100%;
    height: 280px;
    cursor: pointer;
    border-radius: ${$isOpen ? "0" : "1rem"};

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      position: absolute;
      left: 0;
      right: 0;
      border-radius: 1rem;
    }
  `}
`;
