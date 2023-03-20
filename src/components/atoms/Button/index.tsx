import { Button as Element } from "@mui/material";
import styled, { css } from "styled-components";
import { pushDataLayer } from "utils";

interface ButtonProps {
  bgColor?: string;
  textColor?: string;
  onHoverBgColor?: string;
  onHoverTextColor?: string;
  dataLayerActionEvent?: string;
  dataLayerActionCategory?: string;
  dataLayerActionValue?: string;
  fullWidth?: boolean;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  children?: React.ReactNode;
}

export const Button = ({ onClick, ...rest }: ButtonProps) => {
  const handleClick = () => {
    pushDataLayer({
      event: rest.dataLayerActionEvent,
      category: rest.dataLayerActionCategory,
      value: rest.dataLayerActionValue,
    });

    onClick && onClick();
  };
  return (
    <ButtonElement onClick={handleClick} {...rest}>
      {rest.children}
    </ButtonElement>
  );
};

const ButtonElement = styled(Element)<ButtonProps>`
  ${({
    bgColor = "#000",
    textColor = "#fff",
    onHoverBgColor = "#522D0C",
    onHoverTextColor = "#fff",
  }) => css`
    background: ${bgColor} !important;
    color: ${textColor} !important;
    padding: 0.5rem 1.5rem !important;
    font-size: 1rem !important;
    font-weight: 700 !important;
    box-shadow: 3px 3px 6px 1px rgba(0, 0, 0, 0.45) !important;
    text-transform: unset !important;
    border-radius: 2rem !important;
    cursor: pointer;

    &:hover {
      background: ${onHoverBgColor} !important;
      color: ${onHoverTextColor} !important;
    }
  `}
`;
