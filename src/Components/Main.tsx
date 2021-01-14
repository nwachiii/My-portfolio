import * as React from "react";
import { ColorModeSwitcher } from "../theme/ColorModeSwitcher";
import {
  Heading,
  Box,
  Text,
  VStack,
  HStack,
  Grid,
  SimpleGrid,
} from "@chakra-ui/react";

import { LearnMoreModal } from "./Modals/LearnMoreModal";
import { MyProjects } from "./Buttons/ProjectsDrawer";
import { Resume } from "./Buttons/ResumeDrawer";
import { SocialMediaIcons } from "./Icons/SocialMediaIcons";

export const Main = () => {
  return (
    <Box textAlign="center">
      <ColorModeSwitcher pos="absolute" top={4} right={6} />

      <Grid minH="100vh" px={6} placeItems="center">
        <VStack spacing={5} mx="auto">
          <Heading as="h1" size="2xl" lineHeight="64px">
            Hello!&#128512; I'm <br /> Emmanuel Nwachukwu
          </Heading>

          <Text
            color="light-gray"
            maxW="460px"
            p={4}
            fontSize={{ base: "18px", md: "22px", lg: "24px" }}
          >
            Software developer who is in love with the Frontend stack and lives
            in Lagos, Nigeria. <LearnMoreModal />
          </Text>

          <SimpleGrid columns={[1, 2, 2]} spacing={[6, 8, 10]} mb={6}>
            <Resume />
            <MyProjects />
          </SimpleGrid>

          <HStack spacing={[4, 6, 8, 10]}>
            <SocialMediaIcons />
          </HStack>
        </VStack>
      </Grid>
    </Box>
  );
};
