import styled, { css } from "styled-components";

interface ContainerProps {
  $isOpen?: boolean;
}

export const Container = styled.div<ContainerProps>`
  ${({ $isOpen, theme }) => css`
    display: ${$isOpen ? "none" : "flex"};
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    background-color: #128c7e;
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 2rem;
    z-index: 25;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
    svg {
      max-width: 2rem;
    }

    @media screen and (max-width: ${theme.grid.container[1]}) {
      right: 1rem;
      bottom: 1rem;
    }
  `}
`;

export const Modal = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    max-width: 25rem;
    min-height: 25rem;
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    background-color: #ffffff;
    border-radius: 1rem;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
    z-index: 15;
    margin: 0;

    svg {
      cursor: pointer;
      position: absolute;
      right: 1.5rem;
      top: 1.5rem;
      font-size: 2rem;
      max-width: 2rem;
      max-height: 2rem;
      transition: 140ms ease;

      &:hover {
        opacity: 0.5;
        transition: 140ms ease;
      }
    }

    @media screen and (max-width: ${theme.grid.container[1]}) {
      right: 1rem;
      left: 1rem;
      width: calc(100vw - 2rem);
      max-width: calc(100vw - 2rem);
    }
  `}
`;

export const ContactFormContainer = styled.form`
  ${() => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 1rem;
    margin-top: 0.875rem;

    h3 {
      margin-bottom: 2rem;
      color: gray;
      padding-right: 2.5rem;
      font-family: "Quicksand", sans-serif;
      font-weight: 500;
    }

    & > div {
      margin-bottom: 1rem;
    }
  `}
`;
