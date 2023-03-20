/* eslint-disable @typescript-eslint/no-explicit-any */
import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export interface ButtonElement {
  $rounded?: boolean;
  $outline?: boolean;
  $fullWidth?: boolean;
  $color?: Colors;
  $size?: "small" | "normal";
}

export type Colors = "primary" | "secondary" | "tertiary" | "white";

export const renderColor = (
  theme: any,
  color?: Colors,
  outline?: boolean
): string => {
  switch (color) {
    case "primary":
      return theme.colors.secondary[0];
    case "secondary":
      return theme.colors.primary[0];
    case "white":
      return "#fff";
    default:
      return outline ? "#fff" : theme.colors.primary[0];
  }
};

export const outlineHover = (color: string) => css`
  &:hover {
    transition: 140ms ease;
    background-color: ${color};
    color: white;
    border: 1px solid ${color};
    filter: brightness(93%);
  }
`;

export const hoverState = css`
  &:hover {
    transition: 140ms ease;
    filter: brightness(90%);
  }
`;

const sizes = {
  small: {
    fontSize: "0.75rem",
    padding: "0.5rem 1rem",
  },
  normal: {
    fontSize: "1rem",
    padding: "0.75rem 1.5rem",
  },
};

export const Element = styled(motion.button)<ButtonElement>`
  ${({
    theme,
    $fullWidth,
    $rounded,
    $color,
    $outline,
    $size = "normal",
  }) => css`
    outline: none;
    border: none;
    box-shadow: none;

    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${sizes[$size].padding};
    width: ${$fullWidth ? "100%" : "auto"};
    border-radius: ${$rounded ? "2rem" : "0.5rem"};
    background: ${$outline ? "none" : renderColor(theme, $color)};
    border: 1px solid ${renderColor(theme, $color, $outline)};
    color: ${$outline ? renderColor(theme, $color, $outline) : "#fff"};
    font-size: ${sizes[$size].fontSize};
    letter-spacing: 0.5px;
    white-space: nowrap;
    transition: 140ms ease;
    cursor: pointer;

    max-height: ${$size === "small" ? 30 : 50}px;

    ${$outline ? outlineHover(renderColor(theme, $color)) : hoverState}

    &:disabled {
      cursor: not-allowed;
      opacity: 0.35 !important;
    }
  `}
`;
