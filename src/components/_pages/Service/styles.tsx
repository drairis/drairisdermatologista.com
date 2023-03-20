import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.article)`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100vw;
  background-color: #f5f5f5;
`;

export const Header = styled(motion.section)`
  ${({ theme }) => css`
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 4rem 1rem;
    padding-top: 8rem;
    text-align: center;

    .cover-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      position: absolute;
      left: 0;
      top: 0;
      opacity: 0.35 !important;
      z-index: 2;
    }

    h1 {
      font-size: 6rem;
      letter-spacing: 0.625rem;
      margin-bottom: 1.5rem;
      position: relative;
      color: #fff;
      z-index: 2;
      width: 100%;
      text-align: center;
      font-family: "Quicksand", sans-serif;
      font-weight: 500;
    }

    h2 {
      position: relative;
      z-index: 2;
      color: white;
      margin-bottom: 2rem;
      width: 100%;
      text-align: center;
      font-family: "Quicksand", sans-serif;
      font-weight: 300;
      line-height: 2.75rem;
    }
    .button-container {
      position: relative;
      z-index: 2;
    }

    @media screen and (max-width: ${theme.grid.container[0]}) {
      h1 {
        font-size: 3rem;
        text-align: start;
      }

      h2 {
        font-size: 1.25rem;
        line-height: 2rem;
        text-align: start;
      }
    }

    @media screen and (max-width: ${theme.grid.container[2]}) {
      h1 {
        font-size: 2rem;
      }
    }
  `}
`;

export const Content = styled.section`
  ${({ theme }) => css`
    position: relative;
    width: 100%;
    padding: 8rem 0;

    display: flex;
    justify-content: center;

    @media screen and (max-width: ${theme.grid.container[1]}) {
      flex-direction: column-reverse;
      padding: 4rem 0;
    }
  `}
`;

export const Block = styled.section`
  ${({ theme }) => css`
    background-color: ${theme.colors.secondary[0]};
    width: 100%;
    min-width: 60px;
    max-width: 340px;
    height: 340px;
  `}
`;

export const BlockContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    padding: 2rem;

    @media screen and (max-width: ${theme.grid.container[1]}) {
      padding: 2rem 1rem;
    }
    @media screen and (max-width: ${theme.grid.container[2]}) {
      border-left: none;
    }
  `}
`;

export const SectionLine = styled(motion.div)`
  ${({ theme }) => css`
    height: 100%;
    width: 0.5rem;
    background-color: ${theme.colors.secondary[1]};
    position: absolute;
    left: 0;
    bottom: 0;
  `}
`;

export const Section = styled.section`
  ${({ theme }) => css`
    width: 100%;
    max-width: 550px;
    color: ${theme.colors.grays[50]};
    padding: 0 1rem;

    h3 {
      margin-bottom: 2.5rem;
      font-size: 2rem;
      color: ${theme.colors.grays[70]};
      font-family: "Quicksand", sans-serif;
      font-weight: 600;
    }

    p {
      line-height: 2rem;
      margin-bottom: 2rem;
      font-family: "Quicksand", sans-serif;
      font-weight: 300;
      font-size: 1.25rem;
    }

    ul,
    ol {
      line-height: 2rem;
      padding-left: 2.5rem;
      margin-bottom: 2rem;
      font-family: "Quicksand", sans-serif;
      font-weight: 300;
    }
  `}
`;

export const BackgroundMockup = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  right: 0;
  top: 0;
  background-color: #000000;
`;
