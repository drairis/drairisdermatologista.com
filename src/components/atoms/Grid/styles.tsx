import styled, { css } from "styled-components";
import { GridProps } from ".";

export const Container = styled.div<GridProps>`
  ${({ theme, breakpoint = 0 }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: ${theme.grid.container[breakpoint]};
    padding: 0 1rem;
  `}
`;
