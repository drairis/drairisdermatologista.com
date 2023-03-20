import { useMemo, useState } from "react";
import { Button, Input, Overlay } from "components";
import { AnimateSharedLayout } from "framer-motion";
import { AiOutlineClose, AiOutlineWhatsApp } from "react-icons/ai";
import { ContactFormContainer, Container, Modal } from "./styles";
import { useGlobalContext } from "contexts";
import { sendWhatsApp } from "services/contact/whats";
import { pushDataLayer } from "utils";
import { DATA_LAYER_EVENTS } from "interfaces";
import { formatPhone, removePhoneFormat } from "utils/formatter";
import { createLeadService } from "services/crm/createLeadService";
import { validateEmail } from "utils/validate";

const destination = process.env.WPP_NUMBER || "";

export const ContactModal = () => {
  const { isChatOpen, setIsChatOpen } = useGlobalContext();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [emailError, setEmailError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!handleValidateEmail || !validateEmail(email)) return;

    const url = sendWhatsApp(name, message, phone, destination);
    window.open(url, "_ blank");
    setIsChatOpen(false);
    setName("");
    setPhone("");
    setMessage("");
    pushDataLayer({
      dl_eventAction: DATA_LAYER_EVENTS.FORM_SUBMITTED,
      event: "formSubmitted",
    });
    try {
      await createLeadService({
        name,
        email,
        phone: removePhoneFormat(phone),
        resume: message,
      });
    } catch (err) {
      console.error(err);
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setEmailError("");
  };

  const handleValidateEmail = () => {
    if (validateEmail(email)) {
      setEmailError("");
      return true;
    } else if (email.length > 0) {
      setEmailError("Formato de e-mail inválido");
      return false;
    }
  };

  const disabledButton = useMemo(() => {
    return !name || !email || phone.length < 15;
  }, [email, name, phone.length]);

  const resetState = () => {
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  const handleClose = () => {
    setIsChatOpen(false);
    resetState();
  };

  return (
    <AnimateSharedLayout>
      <Container
        layoutId="contact-modal-wpp"
        onClick={() => setIsChatOpen(true)}
        $isOpen={isChatOpen}
        whileHover={{ scale: 1.1 }}
      >
        <AiOutlineWhatsApp />
      </Container>
      {isChatOpen && (
        <>
          <Modal layoutId="contact-modal-wpp">
            <AiOutlineClose onClick={handleClose} />
            <ContactFormContainer onSubmit={handleSubmit}>
              <h3>Agende uma consulta ;)</h3>
              <Input
                onChange={(e) => setName(e.target.value)}
                value={name}
                label="Seu nome"
              />
              <Input
                label="Seu melhor email"
                placeholder="Ex.: marial.silva@email.com"
                value={email}
                onChange={handleEmailChange}
                onBlur={handleValidateEmail}
                helperText={emailError}
              />
              <Input
                onChange={(e) => setPhone(formatPhone(e.target.value))}
                value={phone}
                label="Telefone"
              />
              <Input
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                label="Mensagem"
                multiline
                minRows={3}
                maxRows={3}
              />
              <Button disabled={disabledButton}>Enviar mensagem</Button>
            </ContactFormContainer>
          </Modal>
          <Overlay isVisible={isChatOpen} close={handleClose} />
        </>
      )}
    </AnimateSharedLayout>
  );
};
