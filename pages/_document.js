import Document, { Html, Head, Main, NextScript } from "next/document";

// override the default Document file and extend the Document class
// https://nextjs.org/docs/advanced-features/custom-document
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

// The code above is the default Document added by
// Next.js. Feel free to remove the getInitialProps
// or render function from MyDocument if you don't need to change them.
