import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.a)`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-width: 260px;
    width: 100%;
    height: 400px;
    border-radius: 0.5rem 0.5rem 0 0;
    color: #000000;
    cursor: pointer;
    padding-bottom: 1rem;
    transition: 140ms ease;
    overflow: hidden;
    outline: none;
    text-decoration: none;
    box-shadow: 6px 6px 8px 2px rgba(121, 129, 148, 0.05);
    position: relative;
    background-color: #fdfdfd;

    img {
      width: 100%;
      height: 240px;
      min-height: 100%;
      border-radius: 0.5rem 0.5rem 0 0;
      margin-top: -1px;
      transition: 320ms ease;
      filter: brightness(85%);
    }

    h3 {
      font-size: 1.75rem;
      margin-bottom: 0.5rem;
      text-align: center;
      font-family: "Quicksand", sans-serif;
      font-weight: 300;
    }

    h4 {
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.5rem;
      text-align: center;
      font-family: "Quicksand", sans-serif;
      font-weight: 300;
    }

    .content {
      padding: 1rem;
      position: relative;
      height: 100%;
      width: 100%;
      padding-bottom: 3.5rem;

      display: flex;
      flex-direction: column;
      align-items: center;

      > button {
        position: absolute;
        bottom: 0;
      }
    }

    .img-wrapper {
      height: 240px;
      display: inline-block;
      overflow: hidden;
      padding-bottom: 2rem;
    }

    border-bottom: 3px solid ${theme.colors.primary[0]};
    &:hover {
      transition: 240ms ease;
      border-bottom: 3px solid ${theme.colors.secondary[1]};
      color: ${theme.colors.primary[2]};
      box-shadow: 3px 8px 8px 2px rgba(121, 129, 148, 0.3);

      img {
        filter: brightness(110%);
        transition: 320ms ease;
        transform: scale(1.09);
      }

      h3 {
        color: ${theme.colors.primary[1]};
      }

      button {
        background: ${theme.colors.secondary[1]};
        border: 1px solid ${theme.colors.secondary[1]};
        color: white;
      }
    }
  `}
`;
