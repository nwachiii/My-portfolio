import * as React from "react";
import { theme } from "./theme";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import {
  ChakraProvider,
  Heading,
  Box,
  Text,
  VStack,
  HStack,
  Grid,
} from "@chakra-ui/react";

import { LearnMoreModal } from "./Components/Links/LearnMoreModal";
import { MyProjects } from "./Components/Buttons/MyProjects";
import { Resume } from "./Components/Buttons/Resume";
import { SocialMediaIcons } from "./Components/Icons/SocialMediaIcons";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <ColorModeSwitcher pos="absolute" top={4} right={6} />

      <Grid minH="100vh" py={3} px={6} placeItems="center">
        <VStack spacing={5} mx="auto">
          <Heading as="h1" size="2xl" lineHeight="64px">
            Hello!&#128512; I'm <br /> Emmanuel Nwachukwu
          </Heading>

          <Text
            color="darkgray"
            maxW="460px"
            p={4}
            fontSize={{ base: "18px", md: "22px", lg: "24px" }}
          >
            Software developer who is in love with the Frontend stack and lives
            in Lagos, Nigeria. <LearnMoreModal />
          </Text>

          <HStack spacing={[4, 6, 8, 10]} mb={6}>
            <Resume />
            <MyProjects />
          </HStack>

          <HStack spacing={[4, 6, 8, 10]}>
            <SocialMediaIcons />
          </HStack>
        </VStack>
      </Grid>
    </Box>
  </ChakraProvider>
);
