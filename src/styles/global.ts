import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    scroll-behavior: smooth;
  }

  body {
    overflow: hidden auto;
    width: 100vw;
  }

  #__next {
    width: 100%;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
    height: fit-content;
    width: fit-content;
  }

  a {
    color: ${({ theme }) => theme.colors.text["link"]};
    cursor: pointer;
  }

  button {
    text-transform: capitalize !important;
  }

  .MuiPopover-paper {
    min-height: 110px !important;
    min-width: 80px;

  }

  .MuiMenuItem-root, .MuiMenu-list {
    width: 100%;
  }
  
  .MuiToolbar-root {
    padding: 0 !important;
  }

  .items {
    position: relative;
    border-radius: 0.25rem;
    background: white;
    color: rgba(black, 0.8);
    overflow: hidden;
    font-size: 0.9rem;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1), 0px 10px 20px rgba(0, 0, 0, 0.1);
    padding: 0;
    min-width: 240px;
  }

  .item {
    display: block;
    width: 100%;
    text-align: left;
    background: transparent;
    border: none;
    padding: 0.5rem 1.25rem;
    border-bottom: 1px solid #eaeaea;

    color: #909090;
  }

  .item.is-selected,
  .item:hover {
    color: #2a9bf7;
    background: #f5f5f5;
  }
`;
