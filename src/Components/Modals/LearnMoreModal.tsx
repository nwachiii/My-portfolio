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
  Text,
} from "@chakra-ui/react";
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
        <ModalContent>
          <ModalHeader borderBottomWidth="1px" mb={6}>
            <Icon as={HiOutlineUser} w={8} h={7} mr={1} color="teal.500" />
            MORE ABOUT ME...
          </ModalHeader>
          <ModalCloseButton _focus={{ outline: "none", border: "none" }} />
          <ModalBody>
            <Text mb={4}>
              I am a Frontend Developer specializing in React and JavaScript. I
              have professional work experience building user-interfaces and web
              applications, from scratch to deployment utilizing ReactJS, Redux,
              JavaScript ES6+, HTML5, CSS3, Chakra-UI, Material-UI, and other
              technologies.
              <br /> <br />I not only have Frontend Engineering experience, but
              also an outstanding set of soft skills and an extensive science
              background that contributes to my love for critical thinking and
              problem solving that prioritize user experience.
              <br /> <br />I am eager to join a team where I can put both my
              technical and people skills to work.
            </Text>
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
