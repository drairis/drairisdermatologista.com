import type { AppProps } from "next/app";

import { ThemeProvider } from "components/atoms";
import { GlobalStyle } from "styles/global";

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
