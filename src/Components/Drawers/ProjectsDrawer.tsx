import * as React from "react";
import { ColorModeSwitcher } from "../../theme/ColorModeSwitcher";

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  useMediaQuery,
  useBoolean,
  Icon,
  Text,
  Heading,
  Stack,
  Flex,
  VStack,
} from "@chakra-ui/react";

import AllProjects from "../../Pages/Projects/AllProjects";
import { ContactMeModal } from "../Modals/ContactMeModal";
import { HiBriefcase } from "react-icons/hi";
import { VscChevronDown, VscChevronRight } from "react-icons/vsc";

export const MyProjects = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size] = React.useState("full");
  const [isSmallerThan400px] = useMediaQuery("(max-width: 400px)");
  const [clientProjects, setClientProjects] = useBoolean();
  const [clonedProjects, setClonedProjects] = useBoolean();
  const [personalProjects, setPersonalProjects] = useBoolean();

  return (
    <>
      <Button onClick={onOpen}>My Projects</Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size={size}>
        <DrawerOverlay>
          <DrawerContent>
            <Flex
              maxW={["80%", "70%", "55%"]}
              alignContent="center"
              justifyContent="space-between"
              px={4}
            >
              <Heading
                fontSize={["lg", "2xl", "2xl"]}
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
                ALL PROJECTS
              </Heading>
              {isSmallerThan400px ? null : (
                <Stack mt={[1.9, 2, 2]}>
                  <ColorModeSwitcher />
                </Stack>
              )}
            </Flex>
            <DrawerCloseButton _focus={{ outline: "none", border: "none" }} />
            <DrawerHeader></DrawerHeader>

            <DrawerBody>
              <VStack>
                <Flex cursor="pointer" onClick={setClientProjects.toggle}>
                  <Icon as={HiBriefcase} w={5} h={8} mr={1} color="teal.500" />
                  <Text letterSpacing=".2em" mt=".3em">
                    CLIENT PROJECTS
                  </Text>
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
                {/* My projects page content comes in here */}
                {clientProjects ? <AllProjects /> : null}
              </VStack>
              <VStack>
                <Flex cursor="pointer" onClick={setClonedProjects.toggle}>
                  <Icon as={HiBriefcase} w={5} h={8} mr={1} color="teal.500" />
                  <Text letterSpacing=".2em" mt=".3em">
                    CLONED WEB APPS
                  </Text>
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
                {/* My projects page content comes in here */}
                {clonedProjects ? <AllProjects /> : null}
              </VStack>
              <VStack>
                <Flex cursor="pointer" onClick={setPersonalProjects.toggle}>
                  <Icon as={HiBriefcase} w={5} h={8} mr={1} color="teal.500" />
                  <Text letterSpacing=".2em" mt=".3em">
                    PERSONAL PROJECTS
                  </Text>
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
                {/* My projects page content comes in here */}
                {personalProjects ? <AllProjects /> : null}
              </VStack>
            </DrawerBody>

            <DrawerFooter
              borderTopWidth="1px"
              justifyContent={["center", "space-between", null, "space-around"]}
              flexWrap="wrap"
            >
              <ContactMeModal />

              <Button variant="outline" mr={[0, 3]} onClick={onClose}>
                Back to Home
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};
