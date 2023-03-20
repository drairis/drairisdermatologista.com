import React from "react";
import { Variants } from "framer-motion";
import { Colors, Element } from "./styles";
import { BeatLoader } from "react-spinners";

interface ButtonElement {
  rounded?: boolean;
  outline?: boolean;
  fullWidth?: boolean;
  color?: Colors;
  size?: "small" | "normal";
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
}

interface ButtonProps extends ButtonElement {
  children: React.ReactNode;
  variants?: Variants;
}

export const Button = ({
  children,
  rounded,
  outline,
  fullWidth,
  color,
  size,
  loading,
  disabled,
  ...props
}: ButtonProps) => {
  return (
    <Element
      $rounded={rounded}
      $outline={outline}
      $fullWidth={fullWidth}
      $color={color}
      $size={size}
      disabled={loading || disabled}
      {...props}
    >
      {loading ? <BeatLoader color="#fff" size={12} /> : children}
    </Element>
  );
};
