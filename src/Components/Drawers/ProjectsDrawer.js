import * as React from "react";
import { ColorModeSwitcher } from "../../theme/ColorModeSwitcher";

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  useMediaQuery,
  useBoolean,
  Icon,
  Heading,
  Stack,
  Flex,
  VStack,
} from "@chakra-ui/react";

import { ContactMeModal } from "../Modals/ContactMeModal";
import { HiBriefcase } from "react-icons/hi";
import { VscChevronDown, VscChevronRight } from "react-icons/vsc";
import { ProjectCards } from "../Cards/Cards";
import {
  clientProjectDetails,
  // clonedProjectDetails,
  personalProjectDetails,
} from "../../data";
import { motion } from "framer-motion";

export const MyProjects = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size] = React.useState("full");
  const [isSmallerThan400px] = useMediaQuery("(max-width: 400px)");
  const [clientProjects, setClientProjects] = useBoolean();
  // const [clonedProjects, setClonedProjects] = useBoolean();
  const [personalProjects, setPersonalProjects] = useBoolean();

  return (
    <>
      <motion.div
        whileHover={{ scale: 1.25 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Button onClick={onOpen} outline="none">
          My Projects
        </Button>
      </motion.div>

      <Drawer isOpen={isOpen} placement="top" onClose={onClose} size={size}>
        <DrawerOverlay>
          <DrawerContent>
            <Flex
              maxW={["80%", "70%", "55%"]}
              alignContent="center"
              justifyContent="space-between"
              px={4}
              py={4}
            >
              <Heading
                fontSize={["md", "2xl", "2xl"]}
                my={3}
                justifySelf="flex-start"
                textAlign="center"
                letterSpacing={["3px", ".2em", ".4em"]}
              >
                <Icon
                  as={HiBriefcase}
                  w={8}
                  h={8}
                  mr={2}
                  mt="-.5em"
                  color="teal.500"
                />
                PROJECTS
              </Heading>
              {isSmallerThan400px ? null : (
                <Stack mt={[1.9, 2, 2]}>
                  <ColorModeSwitcher />
                </Stack>
              )}
              <DrawerCloseButton
                _focus={{ outline: "none", border: "none" }}
                mt={[2, 3, 3]}
              />
            </Flex>

            <DrawerBody>
              <VStack mb="70px" mt="60px">
                <motion.div
                  whileTap={{ scale: 0.8 }}
                  initial={{ x: "-100vw" }}
                  animate={{ x: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: "20",
                    delay: 0.1,
                  }}
                >
                  <Flex cursor="pointer" onClick={setClientProjects.toggle}>
                    <Icon
                      as={HiBriefcase}
                      w={5}
                      h={8}
                      mr={3}
                      color="teal.500"
                    />

                    <Heading
                      fontSize={["md", "2xl", "2xl"]}
                      justifySelf="flex-start"
                      textAlign="center"
                      letterSpacing={["3px", ".2em", ".4em"]}
                    >
                      LIVE PROJECTS
                    </Heading>

                    {clientProjects ? (
                      <Icon
                        as={VscChevronDown}
                        w={10}
                        h={9}
                        mr={1}
                        color="teal.500"
                      />
                    ) : (
                      <Icon
                        as={VscChevronRight}
                        w={10}
                        h={8}
                        mr={1}
                        color="teal.500"
                      />
                    )}
                  </Flex>
                </motion.div>
                {/* My projects page content comes in here */}

                {clientProjects ? (
                  <motion.div
                    initial={{ x: "60%", opacity: "0", scale: "0.4" }}
                    animate={{ x: 0, opacity: "1", scale: "1" }}
                    transition={{
                      type: "spring",
                      stiffness: "20",
                      delay: 0.2,
                    }}
                    className="mx-auto"
                  >
                    <ProjectCards projects={clientProjectDetails} />
                  </motion.div>
                ) : null}
              </VStack>
              <VStack my="70px">
                <motion.div
                  whileTap={{ scale: 0.8 }}
                  initial={{ x: "-100vw" }}
                  animate={{ x: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: "20",
                    delay: 0.2,
                  }}
                >
                  {/* <Flex cursor="pointer" onClick={setClonedProjects.toggle}>
                    <Icon
                      as={HiBriefcase}
                      w={5}
                      h={8}
                      mr={3}
                      color="teal.500"
                    />

                    <Heading
                      fontSize={["md", "2xl", "2xl"]}
                      justifySelf="flex-start"
                      textAlign="center"
                      letterSpacing={["3px", ".2em", ".4em"]}
                    >
                      CLONED WEB APPS
                    </Heading>
                    {clonedProjects ? (
                      <Icon
                        as={VscChevronDown}
                        w={10}
                        h={9}
                        mr={1}
                        color="teal.500"
                      />
                    ) : (
                      <Icon
                        as={VscChevronRight}
                        w={10}
                        h={8}
                        mr={1}
                        color="teal.500"
                      />
                    )}
                  </Flex>
                </motion.div>
                {/* My projects page content comes in here */}

             {/*   {clonedProjects ? (
                  <motion.div
                    initial={{ y: "-10%", opacity: "0", scale: "0.4" }}
                    animate={{ y: 0, opacity: "1", scale: "1" }}
                    transition={{
                      type: "spring",
                      stiffness: "20",
                      delay: 0.2,
                    }}
                  >
                    <ProjectCards projects={clonedProjectDetails} />
                  </motion.div>
                ) : null}
              </VStack>
              <VStack my="70px">
                <motion.div
                  whileTap={{ scale: 0.8 }}
                  initial={{ x: "-100vw" }}
                  animate={{ x: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: "20",
                    delay: 0.3,
                  }}
                > */}
                  <Flex cursor="pointer" onClick={setPersonalProjects.toggle}>
                    <Icon
                      as={HiBriefcase}
                      w={5}
                      h={8}
                      mr={3}
                      color="teal.500"
                    />

                    <Heading
                      fontSize={["md", "2xl", "2xl"]}
                      justifySelf="flex-start"
                      textAlign="center"
                      letterSpacing={["3px", ".2em", ".4em"]}
                    >
                      PERSONAL PROJECTS
                    </Heading>
                    {personalProjects ? (
                      <Icon
                        as={VscChevronDown}
                        w={10}
                        h={9}
                        mr={1}
                        color="teal.500"
                      />
                    ) : (
                      <Icon
                        as={VscChevronRight}
                        w={10}
                        h={8}
                        mr={1}
                        color="teal.500"
                      />
                    )}
                  </Flex>
                </motion.div>
                {/* My projects page content comes in here */}

                {personalProjects ? (
                  <motion.div
                    initial={{ y: "60vw", opacity: "0", scale: "0.4" }}
                    animate={{ y: 0, opacity: "1", scale: "1" }}
                    transition={{
                      type: "spring",
                      stiffness: "20",
                      delay: 0.2,
                    }}
                  >
                    <ProjectCards projects={personalProjectDetails} />
                  </motion.div>
                ) : null}
              </VStack>
            </DrawerBody>

            <DrawerFooter
              borderTopWidth="1px"
              justifyContent={["center", "space-between", null, "space-around"]}
              alignItems="space-between"
              flexWrap="wrap"
            >
              <ContactMeModal />

              <Button
                variant="outline"
                mr={[0, 3]}
                ml={[3, 0]}
                onClick={onClose}
              >
                Back to Home
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};
