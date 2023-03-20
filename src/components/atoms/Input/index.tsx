import { Container } from "./styles";
import TextField from "@mui/material/TextField";
import { TextFieldProps } from "@mui/material/TextField";
import { Variants } from "framer-motion";

type InputProps = TextFieldProps & {
  variants?: Variants;
};

export const Input = ({ variants, ...props }: InputProps) => {
  return (
    <Container variants={variants}>
      <TextField fullWidth variant="filled" {...props} />
    </Container>
  );
};
