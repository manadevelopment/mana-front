import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";
import { ThemeProvider } from "@emotion/react";

// * css
import "normalize.css";
import "../styles/globals.css";

// * components

import MainLayout from "../components/layout/MainLayout";

// * variables

const theme = {
  colors: {
    mainGreen: "#06D6A0",
    mainBlue: "#118AB2",
    mainGray: "#757575",
    body: "#424242",
    bg: "#f5f5f5",
    darkerBg: "#eeeeee",
    gradient: "linear-gradient(270deg, #06D6A0 0%, #05B083 100%);",
  },
  width: "82%",
  maxWidth: "140rem",
  mobileWidth: "95%",
};

export default function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </ThemeProvider>
    </ApolloProvider>
  );
}
