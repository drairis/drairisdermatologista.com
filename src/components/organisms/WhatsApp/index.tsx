import React, { useMemo, useState } from "react";
import { AiOutlineClose, AiOutlineWhatsApp } from "react-icons/ai";

import { Input, Overlay, Button } from "components/atoms";
import { sendWhatsApp } from "services/whats";
import {
  formatPhone,
  pushDataLayer,
  validateEmailField,
  validateNameField,
  validatePhoneField,
} from "utils";
import { Container, Modal, ContactFormContainer } from "./styles";
import { authRoute, crmApi } from "services/api";

const contactPhoneNumber = process.env.NEXT_PUBLIC_CONTACT_NUMBER || "";

export const WhatsApp = ({
  title = "Entre em contato",
  dataLayerEvent,
}: {
  title: string;
  dataLayerEvent?: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!(await validateForm())) return;

    pushDataLayer({
      event: dataLayerEvent,
    });

    const url = sendWhatsApp(contactPhoneNumber);
    window.open(url, "_ blank");

    crmApi.post(authRoute("/deal"), {
      name,
      email,
      phone,
      message,
      organization_name: name,
    });
    resetState();
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    setNameError("");
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setEmailError("");
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(formatPhone(e.target.value));
    setPhoneError("");
  };

  const validateForm = async () => {
    if (
      validateNameField(name, setNameError) &&
      (await validateEmailField(email, setEmailError)) &&
      validatePhoneField(phone, setPhoneError)
    ) {
      return true;
    } else false;
  };

  const disableButton = useMemo(() => {
    return !name || !email || !phone || !message;
  }, [name, email, phone, message]);

  const resetState = () => {
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  return (
    <>
      {!isOpen && (
        <Container onClick={() => setIsOpen(true)} $isOpen={isOpen}>
          <AiOutlineWhatsApp />
        </Container>
      )}
      {isOpen && (
        <>
          <Modal>
            <AiOutlineClose onClick={() => setIsOpen(false)} />
            <ContactFormContainer onSubmit={handleSubmit}>
              <h3>{title}</h3>
              <Input
                label="Nome"
                placeholder="Ex.: João da Silva"
                value={name}
                onChange={handleNameChange}
                error={!!nameError}
                helperText={nameError}
              />
              <Input
                label="Email"
                placeholder="Ex.: joaodasilva@email.com"
                value={email}
                onChange={handleEmailChange}
                error={!!emailError}
                helperText={emailError}
              />
              <Input
                label="Telefone"
                placeholder="Ex.: (11) 99999-9999"
                value={phone}
                onChange={handlePhoneChange}
                error={!!phoneError}
                helperText={emailError}
              />
              <Input
                label="Mensagem"
                placeholder="Ex.: Olá, gostaria de saber mais sobre o seu serviço."
                value={message}
                multiline
                minRows={3}
                maxRows={4}
                onChange={(e) => setMessage(e.target.value)}
              />
              <Button fullWidth type="submit" disabled={disableButton}>
                Enviar mensagem
              </Button>
            </ContactFormContainer>
          </Modal>
          <Overlay isVisible={isOpen} close={() => setIsOpen(false)} />
        </>
      )}
    </>
  );
};
