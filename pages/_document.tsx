import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        <div id="modal"></div>
      </body>
    </Html>
  );
}
