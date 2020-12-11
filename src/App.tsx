import * as React from "react";
import {
  ChakraProvider,
  Button,
  Heading,
  Box,
  Text,
  VStack,
  HStack,
  Grid,
  Icon,
  Link,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";

import { theme } from "./theme";
import { FaLinkedinIn, FaTwitter, FaGithub } from "react-icons/fa";

//WORK HISTORY GRID:
// -> one long left border line with arrows pointing to table of contents
// -> when each item on the T.O.C is clicked, it should reveal the work history content
// -> when another item is clicked, the previous content fades out, new content shows up

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
            in Lagos, Nigeria.{" "}
          </Text>
          <HStack spacing={[4, 6, 8, 10]} mb={6}>
            {/* Button 1, when clicked; 
            -should split into two grids and 
            -slide in the Resume/Work history from the left into the page
            -push the default single grid page to the right side(2nd column) of the new two column grids
            -there should be an exit button that restores the default single grid
            */}
            <Button>Work History</Button>

            {/* Button 2, when clicked; 
            -should split into two grids and 
            -slide in the content from the right into the page
            -push the default single grid page to the left side(1st column) of the new two column grids
            -there should be an exit button that restores the default single grid
            */}
            <Button>My Projects</Button>
          </HStack>
          <HStack spacing={[4, 6, 8, 10]}>
            <Link
              bg="white"
              rounded={4}
              px={1}
              pb={1}
              href="https://linkedin.com/in/nwachukwuemmauel"
              isExternal
            >
              <Icon as={FaLinkedinIn} w={6} h={6} color="#0077B5" />{" "}
            </Link>
            <Link href="https://github.com/nwachiii" isExternal>
              <Icon as={FaGithub} w={8} h={8} />
            </Link>
            <Link href="https://twitter.com/nwachiii" isExternal>
              <Icon as={FaTwitter} w={8} h={8} color="#1DA1F2" />
            </Link>
          </HStack>
        </VStack>
      </Grid>
    </Box>
  </ChakraProvider>
);
