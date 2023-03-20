import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "styles/themes/default";
import { GlobalStyle } from "styles/themes/global";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { Navbar } from "components";
import { useRouter } from "next/router";
import { GlobalProvider } from "contexts";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <GlobalProvider>
      <ThemeProvider theme={defaultTheme}>
        <AnimatePresence exitBeforeEnter>
          <AnimateSharedLayout>
            <Navbar isHome={router.pathname === "/"} />
            <Component {...pageProps} />
            <GlobalStyle />
          </AnimateSharedLayout>
        </AnimatePresence>
      </ThemeProvider>
    </GlobalProvider>
  );
}

export default MyApp;
