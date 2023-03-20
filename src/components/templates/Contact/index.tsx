import {
  Button,
  Grid,
  Input,
  ShowInView,
  SocialMedia,
  Text,
  Snackbar,
} from "components";
import { container, fadeIn, popUp } from "constants/animations";
import { motion } from "framer-motion";
import { ContactSlice, DATA_LAYER_EVENTS } from "interfaces";
import { useRouter } from "next/router";
import { useMemo, useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
// import { sendEmailService } from "services/contact/email";
import { createLeadService } from "services/crm/createLeadService";
import { pushDataLayer } from "utils";
import { formatPhone, removePhoneFormat } from "utils/formatter";
import { validateEmail } from "utils/validate";
import { Address, ContactForm, Container, Content, Header } from "./styles";

interface ContactProps {
  slice: ContactSlice;
}

export const Contact = ({ slice }: ContactProps) => {
  const router = useRouter();
  const isHomePage = useMemo(() => router.pathname === "/", [router.pathname]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [emailError, setEmailError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      // await sendEmailService({ name, phone, email, message });
      await createLeadService({
        name,
        email,
        phone: removePhoneFormat(phone),
        resume: message,
      });
      setSuccess(true);
      resetState();
      pushDataLayer({
        dl_eventAction: DATA_LAYER_EVENTS.FORM_SUBMITTED,
        event: "formSubmitted",
      });
    } catch (err) {
      setError(true);
      console.error(err);
    }
    setLoading(false);
  };

  const resetState = () => {
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  const openMaps = () => {
    const url =
      "https://www.google.com/maps/place/EDIFICIO+SILVIO+MENICUCCI+-+R.+Albita,+131+-+Cruzeiro,+Belo+Horizonte+-+MG,+30310-160/@-19.9407696,-43.9264357,19z/data=!4m5!3m4!1s0xa699c7bafad7d5:0x7ecdff52e0558ba5!8m2!3d-19.9409382!4d-43.926278";
    window.open(url, "_blank");
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
    return !name || !email || phone.length < 15 || loading;
  }, [name, email, phone.length, loading]);

  return (
    <Container id="contato" variants={container[0]}>
      {isHomePage && (
        <img
          alt=""
          src="/assets/shapes/contact-wave.svg"
          className="wave top"
        />
      )}
      <Grid>
        <ShowInView>
          <Header>
            <Text variants={popUp} render={slice.primary.contact_title} />
            <Text variants={popUp} render={slice.primary.contact_subtitle} />
          </Header>
        </ShowInView>
      </Grid>
      <Grid>
        <ShowInView fullWidth>
          <Content variants={container[0]}>
            <ContactForm onSubmit={handleSubmit} variants={container[2]}>
              <Input
                variants={fadeIn}
                label="Seu nome"
                placeholder="Ex.: Maria da Silva"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                variants={fadeIn}
                label="Seu melhor email"
                placeholder="Ex.: marial.silva@email.com"
                value={email}
                onChange={handleEmailChange}
                onBlur={handleValidateEmail}
                helperText={emailError}
              />
              <Input
                variants={fadeIn}
                label="Telefone"
                placeholder="Ex.: (12) 9 8765-4321"
                value={phone}
                onChange={(e) => setPhone(formatPhone(e.target.value))}
              />
              <Input
                variants={fadeIn}
                label="Mensagem"
                multiline
                minRows={3}
                maxRows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <Button
                disabled={disabledButton}
                loading={loading}
                variants={popUp}
              >
                {slice.primary.contact_button_label[0].text}
              </Button>
            </ContactForm>
            <Address variants={container[2]}>
              <motion.img
                alt=""
                src="/assets/shapes/blob-address.svg"
                className="blob"
                variants={{
                  ...popUp,
                  animate: {
                    ...popUp.animate,
                    scale: 3.5,
                  },
                }}
              />
              <Text variants={fadeIn} render={slice.primary.address_title} />
              <Text variants={fadeIn} render={slice.primary.street_name} />
              <Text variants={fadeIn} render={slice.primary.city} />
              <Text variants={fadeIn} render={slice.primary.cep} />

              <motion.div variants={popUp} className="address-line" />
              <Button
                onClick={openMaps}
                variants={popUp}
                size="small"
                rounded
                outline
              >
                <FaMapMarkerAlt style={{ marginRight: "0.5rem" }} />
                Ver no mapa
              </Button>
              <SocialMedia />
            </Address>
          </Content>
        </ShowInView>
      </Grid>

      <Snackbar
        open={success}
        setOpen={setSuccess}
        message="Confira sua caixa de entrada ;)"
      />

      <Snackbar
        open={error}
        setOpen={setError}
        severity="error"
        message="Ocorreu um erro ao enviar a mensagem :/"
      />
    </Container>
  );
};
