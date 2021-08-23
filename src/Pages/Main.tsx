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
import "./Main.css";

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
      h="84vh"
      mb={[8, 0, "-2em"]}
      mt={[8, 0, 0]}
      className="main-wrapper"
    >
      <div></div>
      <AnimatePresence>
        <motion.div
          initial={{ x: 500, opacity: 0, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          exit={{ x: -300, opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 50,
            delay: 1,
          }}
        >
          <VStack spacing={5} mx="auto">
            <motion.div
              initial={{ y: -600, opacity: 0 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -300, opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 50,
              }}
            >
              <Heading as="h1" size="2xl" lineHeight="64px">
                <Text>
                  <i>Hello!&#128512; I'm </i> <br />
                </Text>
                Emmanuel Nwachukwu
              </Heading>
            </motion.div>

            <Text
              maxW="460px"
              p={4}
              fontSize={{ base: "18px", md: "22px", lg: "24px" }}
              lineHeight={["34px"]}
            >
              <i>
                A Frontend Engineer whose goal is to create stellar user
                experience, smooth user interfaces, and straightforward internal
                structures for a given product...
              </i>
              <Text color="teal.500" lineHeight="38px">
                <Link to="/about">
                  <i>Learn More &gt;</i>
                </Link>
              </Text>
            </Text>

            <SimpleGrid columns={[1, 2, 2]} spacing={[6, 8, 10]} mb={6}>
              <motion.div
                whileHover={{ scale: 1.25 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Button outline="none">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://docs.google.com/document/d/1sGONHZBRwQU5YSU77A45nmjO6-8j6ZUlqWP_IaP7vJs/edit?usp=sharing"
                  >
                    Resume
                  </a>
                </Button>
              </motion.div>
              <MyProjects />
            </SimpleGrid>

            <HStack spacing={[4, 6, 8, 10]}>
              <motion.div
                initial={{ y: 1000, opacity: 0 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                exit={{ y: -300, opacity: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 50,
                }}
              >
                <SocialMediaIcons />
              </motion.div>
            </HStack>
          </VStack>
        </motion.div>
      </AnimatePresence>
    </Flex>
  );
};
