import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";
import { ThemeProvider } from "@emotion/react";
import store from "../services/states/store";
import { Provider } from "react-redux";
import localFont from "@next/font/local";

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
  mobileWidth: "90%",
  borderRadius: "1rem",
};

const iranYekan = localFont({
  src: [
    {
      path: "../assets/fonts/woff/iranyekanwebthin.woff",
      weight: "100",
      style: "normal",
    },
    {
      path: "../assets/fonts/woff/iranyekanweblight.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/fonts/woff/iranyekanwebregular.woff",
      weight: "normal",
      style: "normal",
    },
    {
      path: "../assets/fonts/woff/iranyekanwebmedium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/woff/iranyekanwebbold.woff",
      weight: "bold",
      style: "normal",
    },
    {
      path: "../assets/fonts/woff/iranyekanwebextrabold.woff",
      weight: "800",
      style: "normal",
    },
    {
      path: "../assets/fonts/woff/iranyekanwebblack.woff",
      weight: "900",
      style: "normal",
    },
    {
      path: "../assets/fonts/woff/iranyekanwebextrablack.woff",
      weight: "950",
      style: "normal",
    },
  ],
});

export default function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <style jsx global>{`
            body {
              font-family: ${iranYekan.style.fontFamily};
            }
          `}</style>
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </Provider>
      </ThemeProvider>
    </ApolloProvider>
  );
}
