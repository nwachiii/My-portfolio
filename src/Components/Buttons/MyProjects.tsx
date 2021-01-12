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

/* Button, when clicked; 
-should split into two grids and 
-slide in the content from the right into the page
-push the default single grid page to the left side(1st column) of the new two column grids
-there should be an exit button that restores the default single grid
*/

export const MyProjects = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen}>My Projects</Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Create your account</DrawerHeader>

            <DrawerBody>
              {/* My projects page content comes in here */}
              <Input placeholder="Type here..." />
            </DrawerBody>

            <DrawerFooter borderTopWidth="1px">
              {/* User should a contact-me btn that redirects to the contact me page */}
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="blue">Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};
