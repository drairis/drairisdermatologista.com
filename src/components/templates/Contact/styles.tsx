import { motion } from "framer-motion";
import styled, { css } from "styled-components";

export const Container = styled(motion.section)`
  ${() => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 600px;
    padding: 4rem 0;
    position: relative;
    padding-bottom: 10rem;
    overflow-x: hidden;

    .wave {
      position: absolute;
    }

    .top {
      top: -6rem;
      left: 0;
    }
  `}
`;

export const Header = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.primary[1]};
    padding: 2rem 0;
    position: relative;
    z-index: 1;

    h3 {
      font-size: 3rem;
      margin-bottom: 0.5rem;
    }

    h4 {
      font-size: 2rem;
      font-weight: 400;
      font-family: "Quicksand", sans-serif;
      font-weight: 300;
      letter-spacing: 0.12rem;
    }

    @media screen and (max-width: ${theme.grid.container[0]}) {
      h3 {
        font-size: 2.5rem;
      }

      h4 {
        font-size: 1.5rem;
      }
    }
  `}
`;

export const ContactForm = styled(motion.form)`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-width: 440px;
    border-radius: 0.5rem;

    div {
      * {
        color: ${theme.colors.primary[1]} !important;
      }
    }

    @media screen and (max-width: ${theme.grid.container[0]}) {
      min-width: 240px;
      width: 100%;
    }
  `}
`;

export const Content = styled(motion.div)`
  ${({ theme }) => css`
    margin-top: 2rem;
    display: flex;
    width: 100%;
    justify-content: space-between;

    @media screen and (max-width: ${theme.grid.container[0]}) {
      flex-direction: column;

      & > :first-child {
        margin-bottom: 4rem;
      }
    }
  `}
`;

export const Address = styled(motion.div)`
  ${({ theme }) => css`
    color: ${theme.colors.primary[1]};
    padding-bottom: 1rem;
    position: relative;

    .blob {
      position: absolute;
      z-index: 1;
      top: -3rem;
      transform: scale(3);
    }

    .address-line {
      width: 100%;
      height: 2px;
      background: #9465005f;
      position: absolute;
      left: 0;
      bottom: 0;
      z-index: 2 !important;
    }

    h4 {
      font-size: 2rem;
      margin-bottom: 1rem;
      font-family: "Quicksand", sans-serif;
      font-weight: 300;
      letter-spacing: 0.12rem;
      color: white;
      position: relative;
      z-index: 2;
      color: ${theme.colors.primary[1]};
    }

    button {
      position: relative;
      z-index: 2;
      margin-top: 1.25rem;
      color: ${theme.colors.primary[1]};
      border-color: ${theme.colors.primary[1]};
      svg {
        position: relative;
        z-index: 2;
        color: ${theme.colors.primary[1]};
        font-size: 0.875rem;
        max-width: 0.875rem;
        max-height: 0.875rem;
      }
    }

    p {
      position: relative;
      z-index: 2;
      margin-bottom: 0.5rem;
    }

    @media screen and (max-width: ${theme.grid.container[0]}) {
      .blob {
        display: none;
      }
    }
  `}
`;
