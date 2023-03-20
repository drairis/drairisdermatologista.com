/* eslint-disable @next/next/no-img-element */
import {
  getColorModeInitScriptElement,
  ServerStyleSheet,
} from "@xstyled/styled-components";
import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";

const isProduction = process.env.NEXT_PUBLIC_ENVIRONMENT === "production";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
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
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          {isProduction && (
            <>
              {/* <script async src="/scripts/facebook.js" />
              <script async src="/scripts/gtm.js" />
              <noscript>
                <img
                  height={1}
                  width={1}
                  style={{ display: "none" }}
                  alt=""
                  src="https://www.facebook.com/tr?id=1332188390957268&ev=PageView&noscript=1"
                />
              </noscript> */}
            </>
          )}
        </Head>
        <body>
          {isProduction && (
            <>
              {/* <noscript>
                <iframe
                  src="https://www.googletagmanager.com/ns.html?id=GTM-KK8XHTL"
                  height={0}
                  width={0}
                  style={{
                    display: "none",
                    visibility: "hidden",
                  }}
                ></iframe>
              </noscript> */}
            </>
          )}
          {getColorModeInitScriptElement()}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
