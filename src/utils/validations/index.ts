import { Dispatch, SetStateAction } from "react";
import * as yup from "yup";

export const validateNameField = (
  name: string,
  setState: Dispatch<SetStateAction<string>>
) => {
  if (name.length < 3) {
    setState("Nome deve ter no mínimo 3 caracteres");
    return false;
  } else if (name.split(" ").length < 2) {
    setState("Nome deve ter no mínimo 2 palavras");
    return false;
  } else {
    setState("");
    return true;
  }
};

export const validateEmailField = async (
  email: string,
  setState: Dispatch<SetStateAction<string>>
) => {
  try {
    await yup
      .string()
      .email("Insira um email válido")
      .required("Este campo é obrigatório")
      .validate(email);
    return true;
  } catch (err) {
    const { errors } = err as any;
    setState(errors.map((e: string) => e).join(", "));
    return false;
  }
};

export const validatePhoneField = (
  phone: string,
  setState: Dispatch<SetStateAction<string>>
) => {
  if (phone.length < 15) {
    setState("Insira um telefone válido");
    return false;
  } else {
    setState("");
    return true;
  }
};
