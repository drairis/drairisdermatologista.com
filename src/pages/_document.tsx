/* eslint-disable jsx-a11y/alt-text */
import Document, {
  DocumentContext,
  DocumentInitialProps,
  Main,
  NextScript,
  Html,
  Head,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

const PRODUCTION = process.env.NEXT_PUBLIC_ENVIRONMENT === "production";

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          {PRODUCTION && (
            <>
              <script src="/scripts/analytics.js" async />
              <script src="/scripts/facebook.js" async />
              <script src="/scripts/hotjar.js" async />
              <script src="/scripts/gtag.js" async />
            </>
          )}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Patua+One&family=Quicksand:wght@300;500;600&display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
          />

          {PRODUCTION && (
            <>
              <noscript>
                <img
                  height="1"
                  width="1"
                  style={{ display: "none" }}
                  src="https://www.facebook.com/tr?id=277907681159745&ev=PageView&noscript=1"
                />
              </noscript>
            </>
          )}
        </Head>
        <body>
          {PRODUCTION && (
            <>
              <noscript>
                <iframe
                  src="https://www.googletagmanager.com/ns.html?id=GTM-K9KKNV5"
                  height="0"
                  width="0"
                  style={{ display: "none", visibility: "hidden" }}
                ></iframe>
              </noscript>
            </>
          )}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
