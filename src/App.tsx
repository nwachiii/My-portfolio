import * as React from "react";
import { theme } from "./theme/theme";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";

// import { Main } from "./Components/Main";
import { Footer } from "./Components/Footer";
import { Main } from "./Components/Main";

export const App = () => (
  <ChakraProvider theme={theme}>
    <CSSReset />
    <Main />
    <Footer />
  </ChakraProvider>
);
