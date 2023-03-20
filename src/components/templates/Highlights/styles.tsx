import { motion } from "framer-motion";
import styled, { css } from "styled-components";

export const Container = styled(motion.section)`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 4rem 1rem;
    background-color: #f5ede7;

    svg {
      max-width: 1.5rem;
      max-height: 1.5rem;
    }

    & > div > div > h3 {
      width: 100%;
      font-size: 3rem;
      margin-bottom: 1rem;
      color: ${theme.colors.grays[50]};
      text-align: center;
      font-family: "Quicksand", sans-serif;
      font-weight: 500;
    }

    & > div > div > h4 {
      width: 100%;
      font-size: 2rem;
      color: ${theme.colors.grays[50]};
      text-align: center;
      margin-bottom: 2rem;
      font-family: "Quicksand", sans-serif;
      font-weight: 300;
    }

    @media screen and (max-width: ${theme.grid.container[0]}) {
      & > div > div > h3,
      & > div > div > h4 {
        text-align: start;
      }

      & > div > div > h3 {
        font-size: 2.5rem;
      }
      & > div > div > h4 {
        font-size: 1.5rem;
      }
    }
  `}
`;
export const Content = styled(motion.section)`
  ${({ theme }) => css`
    display: grid;
    width: 100%;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    padding: 2rem 0;
    grid-gap: 2rem;
    /* & > a {
      margin-right: 2rem;
      margin-bottom: 2rem;
    }
    & > :last-child {
      margin-right: 0;
      margin-bottom: 0;
    } */

    @media screen and (max-width: ${theme.grid.container[0]}) {
      /* flex-wrap: wrap;
      justify-content: center; */

      /* & > a {
        margin-right: 0;
        margin-bottom: 2rem;
      } */
    }
  `}
`;
