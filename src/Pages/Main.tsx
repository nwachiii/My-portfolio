import * as React from "react";
import { Link } from "react-router-dom";
import {
  Heading,
  Text,
  VStack,
  HStack,
  Flex,
  SimpleGrid,
  Button,
} from "@chakra-ui/react";

import { MyProjects } from "../Components/Drawers/ProjectsDrawer";
import { SocialMediaIcons } from "../Components/Icons/SocialMediaIcons";
import { AnimatePresence, motion } from "framer-motion";

export const Main = () => {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      w="100%"
    >
      <AnimatePresence>
          <motion.div
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            exit={{ x: -300, opacity: 0}}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 50,
            }}
          >
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
                A Frontend Engineer who specializes in React development and
                lives in Lagos, Nigeria.
                <Link to="/about">
                  <Text color="teal.500">Learn More</Text>
                </Link>
              </Text>

              <SimpleGrid columns={[1, 2, 2]} spacing={[6, 8, 10]} mb={6}>
                <Button>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://docs.google.com/document/d/1sGONHZBRwQU5YSU77A45nmjO6-8j6ZUlqWP_IaP7vJs/edit?usp=sharing"
                  >
                    Resume
                  </a>
                </Button>
                <MyProjects />
              </SimpleGrid>

              <HStack spacing={[4, 6, 8, 10]}>
                <SocialMediaIcons />
              </HStack>
            </VStack>
          </motion.div>
      </AnimatePresence>
    </Flex>
  );
};
