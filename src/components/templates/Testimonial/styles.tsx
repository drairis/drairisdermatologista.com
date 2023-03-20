import { motion } from "framer-motion";
import styled, { css } from "styled-components";

export const Container = styled(motion.section)`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    min-height: 800px;
    background-color: ${theme.colors.background[0]};
    padding: 12rem 0;
    position: relative;
    overflow-x: hidden;

    h3 {
      width: 100%;
      text-align: center;
      font-size: 3rem;
      color: ${theme.colors.grays[50]};
      margin-bottom: 4rem;
      font-family: "Quicksand", sans-serif;
      font-weight: 300;
    }

    .wave {
      position: absolute;
    }

    .top {
      top: 0;
      left: 0;
    }

    .bottom {
      bottom: 0;
      right: 0;
    }

    @media screen and (max-width: ${theme.grid.container[1]}) {
      h3 {
        font-size: 2.5rem;
      }
    }
  `}
`;

export const Content = styled(motion.div)`
  display: flex;
  width: 100%;
  justify-content: space-between;

  > :last-child {
    margin-right: 0;
    border-right: none;
  }

  @media screen and (max-width: ${({ theme }) => theme.grid.container[0]}) {
    justify-content: center;
    flex-wrap: wrap;
  }
`;

export const TestimonialCard = styled(motion.div)`
  ${({ theme }) => css`
    min-height: 340px;
    min-width: 290px;
    width: 100%;
    max-width: 550px;
    padding: 1rem 2rem;
    border-right: 1px solid #cecece;
    text-align: center;

    span {
      font-size: 1.25rem;
    }

    h5 {
      width: 100%;
      font-size: 1.5rem;
      margin-bottom: 0.25rem;
      color: #6e6f74;
      font-family: "Quicksand", sans-serif;
      font-weight: 500;
    }

    p {
      color: ${theme.colors.primary[2]};
      margin-top: 1rem;
      font-family: "Quicksand", sans-serif;
      font-weight: 300;
    }

    @media screen and (max-width: ${({ theme }) => theme.grid.container[0]}) {
      border-bottom: 1px solid #cecece;
      border-right: none;
      margin-bottom: 2rem;
    }
  `}
`;
