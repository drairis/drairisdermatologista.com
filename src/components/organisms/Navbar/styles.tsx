import styled, { css } from "styled-components";

interface NavbarProps {
  isTransparent?: boolean;
}

export const Container = styled.div<NavbarProps>`
  ${({ theme, isTransparent }) => css`
    height: 66px;
    width: 100vw;
    background-color: ${isTransparent ? "none" : "#c7b691dc"};
    position: fixed;
    top: 0;
    z-index: 10;
    transition: 240ms ease-in-out;

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2rem;
    padding-right: 5rem;

    span {
      font-weight: 600;
      color: white;
      font-size: 1.5rem;
      font-family: "Quicksand", sans-serif;
      cursor: pointer;
    }

    a {
      color: white;
      cursor: pointer;
      text-underline-offset: 0.25rem;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }

    .mobile-menu {
      display: none;
      color: #fff;
      cursor: pointer;
      transition: 140ms ease;
      font-size: 1.5rem;
      max-width: 1.5rem;

      &:hover {
        opacity: 0.75;
        transition: 140ms ease;
      }
    }

    @media screen and (max-width: ${theme.grid.container[0]}) {
      .links {
        display: none;
      }
      .mobile-menu {
        display: flex;
        font-size: 1.25rem;
        max-width: 1.25rem;
      }

      padding-right: 2rem;
    }
  `}
`;

interface SidebarProps {
  isOpen: boolean;
}

export const Sidebar = styled.div<SidebarProps>`
  ${({ isOpen }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    width: 80vw;
    max-width: 340px;
    background-color: #c7b691;
    transform: translateX(${isOpen ? "0" : "105vw"});
    transition: 240ms ease-in-out;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 15;
    padding: 3rem 1.5rem;

    .sidebar-links {
      margin-top: 4rem;
      width: 100%;
    }

    .close-icon {
      position: absolute;
      left: -1.5rem;
      top: 1rem;
      font-size: 3rem;
      width: 3rem;
      max-width: 3rem;
      height: 3rem;
      color: #fff;
      opacity: 0.85;
      transition: 140ms ease;

      &:hover {
        opacity: 1;
        transition: 140ms ease;
      }
    }

    a {
      color: #fff;
      width: 100%;
      background-color: #00000018;
      height: 50px;
      display: flex;
      align-items: center;
      padding: 0 1rem;
      border-radius: 0.5rem;
      transition: 140ms ease;
      text-decoration: none;

      :hover {
        transition: 140ms ease;
        background-color: #00000039;
      }
    }

    .polices {
      background: none;
      margin-top: 1rem;
      color: #6e4510;
    }
  `}
`;
