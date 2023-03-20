import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    overflow-x: hidden;
    scroll-behavior: smooth;
    font-size: 16px;

    ::-webkit-scrollbar {
      width: 16px;               /* width of the entire scrollbar */
    }

    ::-webkit-scrollbar-track {
      background: #c7b691;        /* color of the tracking area */
    }


    &::-webkit-scrollbar-thumb {
      background-color: #957333;    /* color of the scroll thumb */
      border-radius: 20px;       /* roundness of the scroll thumb */
      border: 5px solid #c7b691; 
    }
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
  
  body {
    background: #f5f5f5;
  }

  p {
    font-size: 16px;
    line-height: 1.5;
  }
`;
