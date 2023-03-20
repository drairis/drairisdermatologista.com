import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5ede7;
    padding: 6rem 1rem;
    flex-direction: column;

    h3 {
      margin-bottom: 1rem;
      text-align: start;
      width: 100%;
      max-width: 1024px;
      color: ${theme.colors.grays[50]};
      font-size: 3rem;
      font-family: "Quicksand", sans-serif;
      font-weight: 500;
    }

    h4 {
      color: ${theme.colors.grays[50]};
      font-family: "Quicksand", sans-serif;
      font-weight: 300;
      margin-bottom: 3rem;
      max-width: 920px;
      line-height: 2.5rem;
      font-size: 1.5rem;

      strong {
        color: ${theme.colors.secondary[0]};
      }
    }

    @media screen and (max-width: ${theme.grid.container[1]}) {
      h3 {
        font-size: 2.5rem;
      }
    }
  `}
`;

export const ImageContainer = styled(motion.div)`
  ${() => css`
    width: 100%;
    max-width: 1024px;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    grid-gap: 2rem;
    margin-bottom: 3rem;
  `}
`;

export const ModalContainer = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 15;
  display: flex;
  justify-content: center;
  align-items: center;

  & > svg {
    position: absolute;
    top: 2rem;
    right: 3rem;
    width: 3rem;
    color: #fff;
    transition: 140ms ease;
    cursor: pointer;
    z-index: 15;

    & > :hover {
      opacity: 0.5;
      transition: 140ms ease;
    }
  }
`;

export const ModalContent = styled(motion.div)`
  width: 100%;
  max-width: 900px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 15;

  & > img {
    width: 100%;
    height: 100%;
    max-height: 600px;
    object-fit: cover;
    margin-bottom: 3rem;
  }

  h4,
  p {
    width: 100%;
    max-width: 600px;
    margin-bottom: 1.5rem;
    color: #fff;
  }

  h4 {
    font-size: 2.75rem;
  }

  p {
    line-height: 1.75rem;
  }

  text-align: center;
`;
