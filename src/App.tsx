import * as React from "react";
import { theme } from "./theme/theme";
import { ChakraProvider, CSSReset, SimpleGrid } from "@chakra-ui/react";

// import { Main } from "./Components/Main";
import { Footer } from "./Components/Footer";
import { Cards } from "./Components/Cards/Cards";

export const App = () => (
  <ChakraProvider theme={theme}>
    <CSSReset />
    {/* <Main /> */}
    <SimpleGrid
      columns={[1, 1, 2, 2, 3]}
      spacingX="20px"
      spacingY="40px"
      justifyContent="center"
      p={[4, 6, 8, 10]}
      mb={8}
    >
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
    </SimpleGrid>
    <Footer />
  </ChakraProvider>
);
