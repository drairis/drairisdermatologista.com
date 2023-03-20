import { forwardRef } from "react";
import { TextField, TextFieldProps } from "@mui/material";
import styled, { css } from "styled-components";

export const Container = styled.div`
  ${() => css`
    width: 100%;

    fieldset {
      width: 100%;
      height: 100%;
    }

    input {
      position: relative;
      z-index: 1;
    }

    label {
      z-index: 2;
    }

    *::before,
    *::after {
      width: 100%;
    }
  `}
`;

const InputElement = (props: TextFieldProps, ref: any) => {
  return (
    <Container className={props.className}>
      <TextField fullWidth {...props} ref={ref} />
    </Container>
  );
};

export const Input = forwardRef(InputElement);
