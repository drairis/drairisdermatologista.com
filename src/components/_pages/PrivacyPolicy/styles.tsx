import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  ${() => css`
    display: flex;
    padding: 8rem 1rem;
    justify-content: center;
    width: 100vw;
  `}
`;

export const Content = styled(motion.div)`
  ${() => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 800px;

    h1 {
      margin-bottom: 2rem;
    }

    p {
      line-height: 1.875rem;
    }
  `}
`;
