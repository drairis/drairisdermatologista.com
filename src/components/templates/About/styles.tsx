import { motion } from "framer-motion";
import styled, { css } from "styled-components";

export const Container = styled(motion.section)`
  ${({ theme }) => css`
    padding: 12rem 0;
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 10rem;
    overflow-x: hidden;

    .wave {
      position: absolute;
    }

    .bottom {
      bottom: 0;
      right: 0;
    }

    .behind {
      z-index: 0;
    }

    @media screen and (max-width: ${theme.grid.container[0]}) {
      flex-direction: column;
      padding: 0;
      padding-bottom: 0;
    }
  `}
`;

export const ImageMock = styled(motion.div)`
  ${({ theme }) => css`
    background-color: ${theme.colors.secondary[0]};
    width: 100%;
    max-width: 600px;
    height: 560px;
    position: relative;
    z-index: 1;

    img {
      position: absolute;
      left: -4rem;
      top: 2.5rem;
      height: 85%;
      width: 100%;
      max-width: 480px;
      object-fit: cover;
      object-position: top;
    }

    @media screen and (max-width: ${theme.grid.container[0]}) {
      max-width: 100%;

      img {
        left: 1rem;
        right: 1rem;
        width: calc(100% - 2rem);
      }
    }
  `}
`;

export const Content = styled(motion.div)`
  ${({ theme }) => css`
    width: 100%;
    max-width: 520px;
    position: relative;
    z-index: 2;
    min-height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h3 {
      font-size: 3rem;
      color: ${theme.colors.primary[1]};
      margin-bottom: 2rem;
    }

    .about-span {
      font-size: 1rem;
      color: ${theme.colors.secondary[0]};
      font-family: "Quicksand", sans-serif;
      font-weight: 500;
      margin-bottom: 0.5rem;
    }

    .paragraph {
      font-family: "Quicksand", sans-serif;
      font-weight: 300;
      p {
        line-height: 2rem;
        font-size: 1.25rem;
      }
      margin-bottom: 2rem;
    }

    button {
      max-width: 320px;
      margin-top: 1rem;
    }

    @media screen and (max-width: ${theme.grid.container[0]}) {
      max-width: 100%;
      padding: 1.5rem 1.5rem;
      h3,
      .paragraph,
        text-align: center;
        width: 100%;
      }
    }
  `}
`;

export const MainMock = styled(motion.div)`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .mock {
      height: 100%;
      width: 100%;
      max-width: 800px;
      z-index: -1;
      margin-right: 14rem;
    }

    @media screen and (max-width: ${theme.grid.container[0]}) {
      position: relative;

      .mock {
        display: none;
        position: relative;
      }
    }
  `}
`;
