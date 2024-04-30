import tw from "twin.macro";
import { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";

const Document = () => {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
      </Head>
      <body tw="dark:bg-[#000000]">
        <div id="modal"></div>
        <Main />
        <NextScript />
        <Script></Script>
      </body>
    </Html>
  );
};

export default Document;
