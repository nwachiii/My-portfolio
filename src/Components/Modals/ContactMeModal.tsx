import * as React from "react";
import {
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalCloseButton,
  Button,
  ModalHeader,
  ModalBody,
  ModalContent,
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
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <ContactMe />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
