import * as React from "react";
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
  Icon,
} from "@chakra-ui/react";

import AllProjects from "../../Pages/Projects/AllProjects";
import { ContactMeModal } from "../Modals/ContactMeModal";
import { HiBriefcase } from "react-icons/hi";

export const MyProjects = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size] = React.useState("full");

  return (
    <>
      <Button onClick={onOpen}>My Projects</Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size={size}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton _focus={{ outline: "none", border: "none" }} />
            <DrawerHeader>
              <Icon as={HiBriefcase} w={8} h={8} mr={1} color="teal.500" />P R O
              J E C T S
            </DrawerHeader>

            <DrawerBody>
              {/* My projects page content comes in here */}
              <AllProjects />
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
