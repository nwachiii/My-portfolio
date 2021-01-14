import * as React from "react";
import { theme } from "./theme/theme";
import { ChakraProvider } from "@chakra-ui/react";

import { Main } from "./Components/Main";
import { Footer } from "./Components/Footer";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Main />
    <Footer />
  </ChakraProvider>
);
