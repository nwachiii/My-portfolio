import * as React from "react";
import { theme } from "./theme/theme";
import { ChakraProvider, CSSReset, Flex } from "@chakra-ui/react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Footer } from "./Components/Footer";
import { Header } from "./Components/Header";
import { Main } from "./Pages/Main";
import AboutMe from "./Pages/AboutMe";

export const App = () => (
  <ChakraProvider theme={theme}>
    <CSSReset />
    <Router>
      <Header />
      <Switch>
        <Flex h="84vh">
          <Route exact path="/" component={Main} />
          <Route exact path="/about" component={AboutMe} />
        </Flex>
      </Switch>
      <Footer />
    </Router>
  </ChakraProvider>
);
