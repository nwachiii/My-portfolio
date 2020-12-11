import * as React from "react";
import {
  ChakraProvider,
  Button,
  Box,
  Text,
  VStack,
  HStack,
  Grid,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";

import { theme } from "./theme";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <VStack spacing={6} w="440px" mx="auto">
          <h1>
            Hello, I'm <br /> Emmanuel Nwachukwu
          </h1>
          <Text color="darkgray">
            Software developer who is focused on the Frontend stack and lives in
            Lagos, Nigeria.{" "}
          </Text>
          <HStack spacing={8}>
            {/* Button 1, View Resume */}
            <Button>Where I've Worked?</Button>

            {/* Button 2, View Projects */}
            <Button>My Projects</Button>

            {/* <Link
              color="teal.500"
              outlineColor="none"
              href="https://github.com/nwachiii"
              fontSize="2xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </Link>
            <Link
              color="teal.500"
              href="https://twitter.com/nwachiii"
              fontSize="2xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </Link> */}
          </HStack>
        </VStack>
      </Grid>
    </Box>
  </ChakraProvider>
);
