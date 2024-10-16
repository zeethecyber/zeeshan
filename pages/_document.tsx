import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="theme-color" content="#C778DD" />
      </Head>
      <body className="no-scrollbar">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
