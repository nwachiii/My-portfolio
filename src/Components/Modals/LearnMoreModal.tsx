import * as React from "react";
import { HiOutlineUser } from "react-icons/hi";
import {
  useDisclosure,
  Link,
  Modal,
  ModalOverlay,
  ModalCloseButton,
  ModalFooter,
  Button,
  ModalHeader,
  ModalBody,
  ModalContent,
  Icon,
} from "@chakra-ui/react";
import AboutMe from "../../Pages/AboutMe";
// import Tools from "../Icons/Tools";

export const LearnMoreModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size] = React.useState("full");

  return (
    <>
      <Link onClick={onOpen} color="teal.500">
        Learn More
      </Link>
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        size={size}
        motionPreset="slideInRight"
      >
        <ModalOverlay />
        <ModalContent h="auto">
          <ModalHeader borderBottomWidth="1px" mb={6}>
            <Icon as={HiOutlineUser} w={8} h={7} mr={1} color="teal.500" />
            MORE ABOUT ME...
          </ModalHeader>
          <ModalCloseButton _focus={{ outline: "none", border: "none" }} />
          <ModalBody>
            <AboutMe />
            {/* <VStack spacing={4}>
              <Heading as="h3">Tech Stack</Heading>
              <Tools />
            </VStack> */}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="teal" mx="auto" onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
