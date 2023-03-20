import { Input } from "components/atoms";
import { Container } from "./styles";

export const ContactForm = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container>
      <Input label="Seu nome completo" />
      <Input label="Seu melhor email" />
      <Input label="Seu telefone" />
      <Input label="Sua mensagem" multiline rows={4} />
      {children}
    </Container>
  );
};
