import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <link
            rel="icon"
            href={`${
              process.env.NEXT_PUBLIC_BASE_PATH ? process.env.NEXT_PUBLIC_BASE_PATH : ''
            }/image.png`}
          />
          <meta name="og:title" content="Portal template: kickstart your documentation." />
          <meta
            name="og:description"
            content="A customizable template for best-in-class documentation. Powered by Next.js and Tailwind."
          />
          <meta
            name="description"
            content="A customizable template for best-in-class documentation. Powered by Next.js and Tailwind."
          />
          <meta
            property="og:image"
            content={`${
              process.env.NEXT_PUBLIC_BASE_PATH ? process.env.NEXT_PUBLIC_BASE_PATH : ''
            }/social-share.png`}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;