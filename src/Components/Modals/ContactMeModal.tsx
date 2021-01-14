import * as React from "react";
import { HiChatAlt } from "react-icons/hi";

import {
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalCloseButton,
  Button,
  ModalHeader,
  ModalBody,
  ModalContent,
  Icon,
} from "@chakra-ui/react";

import { ContactMe } from "../ContactMe";

export const ContactMeModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>Contact Me</Button>
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInRight"
      >
        <ModalOverlay />
        <ModalContent mx={[3, 6]}>
          <ModalHeader>
            <Icon as={HiChatAlt} w={8} h={8} mr={1} color="teal.500" />
            <strong> Let's Talk!</strong>
          </ModalHeader>
          <ModalCloseButton _focus={{ outline: "none", border: "none" }} />

          <ModalBody>
            <ContactMe />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
