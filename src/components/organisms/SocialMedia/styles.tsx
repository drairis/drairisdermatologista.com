import { motion } from "framer-motion";
import styled, { css } from "styled-components";

export const Container = styled(motion.div)`
  ${({ theme }) => css`
    display: flex;
    color: ${theme.colors.primary[1]};
    position: absolute;
    bottom: -2.5rem;
    z-index: 2;

    h4 {
      margin-top: 1rem;
      font-size: 1rem;
      opacity: 0.7;
    }

    a {
      margin-right: 1rem;

      &:last-child {
        margin-right: 0;
      }
    }

    svg {
      font-size: 1.5rem;
      max-width: 1.5rem;
      max-height: 1.5rem;
      transition: 140ms ease;
      opacity: 0.7;
      cursor: pointer;

      &:hover {
        transition: 140ms ease;
        opacity: 1;
      }
    }
  `}
`;

export const Icon = styled(motion.a)`
  ${({ theme }) => css`
    color: ${theme.colors.primary[1]};
  `}
`;
