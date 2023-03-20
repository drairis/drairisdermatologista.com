import styled, { css } from "styled-components";

interface ModalOverlayProps {
  $isVisible: boolean;
  $darker?: boolean;
}

export const Container = styled.div<ModalOverlayProps>`
  ${({ $isVisible, $darker }) => css`
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    /* backdrop-filter: blur(5px); */
    background-color: ${$darker
      ? "rgba(0, 0, 0, 0.85)"
      : "rgba(0, 0, 0, 0.75)"};
    display: ${$isVisible ? "block" : "none"};
    z-index: ${$isVisible ? "5" : "-1"};
  `}
`;
