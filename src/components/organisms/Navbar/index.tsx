import { useEffect, useMemo, useState } from "react";
import { Stack } from "@mui/material";
import { useRouter } from "next/router";
import { ImMenu } from "react-icons/im";
import { AiFillCloseCircle } from "react-icons/ai";
import { Container, Sidebar } from "./styles";
import { Overlay } from "components";
import Link from "next/link";

export const Navbar = ({ isHome }: { isHome: boolean }) => {
  const router = useRouter();
  const isHomePage = useMemo(() => router.pathname === "/", [router.pathname]);

  const [isOnTop, setInOnTop] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setInOnTop(false);
      } else {
        setInOnTop(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Container isTransparent={isOnTop && isHome}>
        <Overlay
          isVisible={isSidebarOpen}
          close={() => setIsSidebarOpen(false)}
        />
        <div>
          <span onClick={() => router.push("/")}>Dra. Thaís Magalhães</span>
        </div>
        <Stack direction="row" spacing={3} className="links">
          <a href={isHomePage ? "#" : "/"}>Início</a>
          <a href={isHomePage ? "#sobre" : "/#sobre"}>Sobre a Thaís</a>
          <a href={isHomePage ? "#especialidades" : "/#especialidades"}>
            Especialidades
          </a>
          <a href={isHomePage ? "#clinica" : "/#clinica"}>A Clínica</a>
          <a href={isHomePage ? "#contato" : "/#contato"}>Contato</a>
        </Stack>
        <ImMenu
          onClick={() => setIsSidebarOpen((current) => !current)}
          className="mobile-menu"
          size={24}
        />
      </Container>
      <Sidebar isOpen={isSidebarOpen}>
        <AiFillCloseCircle
          className="close-icon"
          onClick={() => setIsSidebarOpen(false)}
        />
        <Stack spacing={3} className="sidebar-links">
          <a
            onClick={() => setIsSidebarOpen(false)}
            href={isHomePage ? "#" : "/"}
          >
            Início
          </a>
          <a
            onClick={() => setIsSidebarOpen(false)}
            href={isHomePage ? "#sobre" : "/#sobre"}
          >
            Sobre a Thaís
          </a>
          <a
            onClick={() => setIsSidebarOpen(false)}
            href={isHomePage ? "#especialidades" : "/#especialidades"}
          >
            Especialidades
          </a>
          <a
            onClick={() => setIsSidebarOpen(false)}
            href={isHomePage ? "#clinica" : "/#clinica"}
          >
            A Clínica
          </a>
          <a
            onClick={() => setIsSidebarOpen(false)}
            href={isHomePage ? "#contato" : "/#contato"}
          >
            Contato
          </a>
        </Stack>
        <Link passHref href="/politicas-de-privacidade">
          <a onClick={() => setIsSidebarOpen(false)} className="polices">
            Políticas de Privacidade
          </a>
        </Link>
      </Sidebar>
    </>
  );
};
