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
  Input,
} from "@chakra-ui/react";

export const Resume = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size] = React.useState("full");

  return (
    <>
      <Button onClick={onOpen}>Work History</Button>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose} size={size}>
        <DrawerOverlay>
          <DrawerContent bgColor="#121213">
            <DrawerCloseButton />
            <DrawerHeader>R E S U M E</DrawerHeader>

            <DrawerBody>
              {/* My projects page content comes in here */}
              <Input placeholder="Type here..." />
            </DrawerBody>

            <DrawerFooter borderTopWidth="1px" justifyContent="space-around">
              {/* User should a contact-me btn that redirects to the contact me page */}
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
