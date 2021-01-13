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
} from "@chakra-ui/react";

import AllProjects from "../../Pages/Projects/AllProjects";

export const MyProjects = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size] = React.useState("full");

  return (
    <>
      <Button onClick={onOpen}>My Projects</Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size={size}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>P R O J E C T S</DrawerHeader>

            <DrawerBody>
              {/* My projects page content comes in here */}
              <AllProjects />
            </DrawerBody>

            <DrawerFooter borderTopWidth="1px" justifyContent="space-around">
              {/* The contact me component should be a button that pops up the contact-me modal */}
              <Button colorScheme="blue">Contact Me Component</Button>

              <Button variant="outline" mr={3} onClick={onClose}>
                Back to Home
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};
