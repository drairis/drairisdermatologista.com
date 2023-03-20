import { Builder, withChildren } from "@builder.io/react";
import { ContactForm, WhatsApp } from "components/organisms";

export const $ContactForm = () => {
  Builder.registerComponent(withChildren(ContactForm), {
    name: "Formulário de Contato",
    inputs: [],
  });
};

export const $WhatsApp = () => {
  Builder.registerComponent(WhatsApp, {
    name: "Whats App",
    inputs: [],
  });
};
