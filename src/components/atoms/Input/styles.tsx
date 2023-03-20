import { motion } from "framer-motion";
import styled, { css } from "styled-components";

export const Container = styled(motion.div)`
  ${() => css`
    width: 100%;
    margin-bottom: 1rem;

    div {
      &::before {
        content: none;
      }
    }
  `}
`;
