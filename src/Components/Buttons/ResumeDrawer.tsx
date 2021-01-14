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
import { ContactMeModal } from "../Modals/ContactMeModal";

export const Resume = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size] = React.useState("full");

  return (
    <>
      <Button onClick={onOpen}>Work History</Button>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose} size={size}>
        <DrawerOverlay>
          <DrawerContent bgColor="lightgray">
            <DrawerCloseButton />
            <DrawerHeader>R E S U M E</DrawerHeader>

            <DrawerBody>
              {/* My projects page content comes in here */}
              <Input placeholder="Type here..." />
            </DrawerBody>

            <DrawerFooter borderTopWidth="1px" justifyContent="space-around">
              <ContactMeModal />
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
