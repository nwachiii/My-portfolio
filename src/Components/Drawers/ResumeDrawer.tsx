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
  Icon,
} from "@chakra-ui/react";
import { ContactMeModal } from "../Modals/ContactMeModal";
import { HiCollection } from "react-icons/hi";

export const Resume = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size] = React.useState("full");

  return (
    <>
      <Button onClick={onOpen}>Work History</Button>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose} size={size}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton _focus={{ outline: "none", border: "none" }} />
            <DrawerHeader>
              <Icon as={HiCollection} w={8} h={8} mr={1} color="teal.500" />R E
              S U M E
            </DrawerHeader>

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
