import { motion } from "framer-motion";
import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100vw;
    min-height: 100vh;
    background-color: ${theme.colors.background[0]};
  `}
`;

export const Header = styled(motion.div)`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 100vh;
    position: relative;
    background-color: #000;
    color: #fff;
    padding: 6rem 1rem;
    z-index: 5;

    .content {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      z-index: 1;
      margin-bottom: 2rem;
      max-width: 880px;
      text-align: center;

      h2 {
        font-family: "Quicksand", sans-serif;
        font-weight: 300;
        line-height: 2.5rem;
      }
    }

    .copy-section {
      max-width: 500px;
      text-align: center;
      position: absolute;
      bottom: 2rem;
      opacity: 0.75;
      padding: 0 1rem;

      p {
        font-size: 0.875rem;
      }
    }

    img {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: top right;
      left: 0;
      top: 0;
    }

    h1 {
      font-size: 3rem;
      margin-bottom: 2rem;
    }

    h2 {
      margin-bottom: 3rem;
    }

    @media screen and (max-width: ${theme.grid.container[0]}) {
      h2 {
        font-size: 1.25rem;
        line-height: 1.25rem;
      }
    }
  `}
`;

export const Content = styled.div`
  width: 100%;
`;
