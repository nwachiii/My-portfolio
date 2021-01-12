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

//WORK HISTORY GRID:
// -> one long left border line with arrows pointing to table of contents
// -> when each item on the T.O.C is clicked, it should reveal the work history content
// -> when another item is clicked, the previous content fades out, new content shows up

/* Button, when clicked; 
 -should split into two grids and 
 -slide in the Resume/Work history from the left into the page
 -push the default single grid page to the right side(2nd column) of the new two column grids
 -there should be an exit button that restores the default single grid
*/
export const Resume = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen}>Work History</Button>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent bgColor="#121213">
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
