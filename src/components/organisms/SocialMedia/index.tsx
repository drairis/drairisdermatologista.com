import { Container, Icon } from "./styles";
import { BsSpotify, BsInstagram, BsLinkedin } from "react-icons/bs";
import { container, popUp } from "constants/animations";
import Link from "next/link";

export const SocialMedia = () => {
  return (
    <Container variants={container[2]} animate="animate" initial="initial">
      <Link
        href="https://open.spotify.com/playlist/2ROfTZPbVKCQJPw7It4uUy?si=eP8wkUnpRLyYzJbYSRGyVA"
        passHref
      >
        <Icon variants={popUp} rel="noreferrer noopenner" target="_blank">
          <BsSpotify />
        </Icon>
      </Link>
      <Link href="https://www.instagram.com/drathaisendocrinologia/" passHref>
        <Icon rel="noreferrer noopenner" target="_blank" variants={popUp}>
          <BsInstagram />
        </Icon>
      </Link>
      <Link
        href="https://www.linkedin.com/in/tha%C3%AFs-pereira-costa-magalh%C3%A3es-05805277"
        passHref
      >
        <Icon variants={popUp} rel="noreferrer noopenner" target="_blank">
          <BsLinkedin />
        </Icon>
      </Link>
    </Container>
  );
};
