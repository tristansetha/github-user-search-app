import Head from "next/head";
import { LayoutContainer } from "./Styles";

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <title>GitHub user search app</title>
      </Head>
      {children}
    </LayoutContainer>
  );
};

export default Layout;
