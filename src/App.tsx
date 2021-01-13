import * as React from "react";
import { theme } from "./theme";
import { ChakraProvider } from "@chakra-ui/react";

import { Main } from "./Main";
import { Footer } from "./Footer";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Main />
    <Footer />
  </ChakraProvider>
);
