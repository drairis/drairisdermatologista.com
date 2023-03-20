import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    min-height: 100vh;
    text-align: center;

    background-color: ${theme.colors.background[0]};

    h1 {
      color: ${theme.colors.primary[1]};
      font-size: 4rem;
      margin-bottom: 1rem;
    }

    h2 {
      color: gray;
    }
  `}
`;
