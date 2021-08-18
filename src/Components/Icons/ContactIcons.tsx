import * as React from "react";
import { HiMail, HiPhoneIncoming } from "react-icons/hi";
import { Link, Tooltip, HStack, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";

export const ContactIcons = () => {
  return (
    <HStack spacing={[4, 6, 8]} mb={2}>
      <Tooltip label="send me a mail" aria-label="A tooltip">
        <motion.div
          whileHover={{ scale: 1.25 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Button leftIcon={<HiMail />} colorScheme="teal" variant="outline">
            <Link
              as="a"
              _hover={{
                outline: "none",
                border: "none",
              }}
              _focus={{
                outline: "none",
                border: "none",
              }}
              href="mailto: egreatness1@gmail.com"
            >
              Email
            </Link>
          </Button>
        </motion.div>
      </Tooltip>
      <Tooltip label="phone number" aria-label="A tooltip">
        <motion.div
          whileHover={{ scale: 1.25 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Button
            leftIcon={<HiPhoneIncoming />}
            colorScheme="teal"
            variant="solid"
          >
            <Link
              _hover={{
                outline: "none",
                border: "none",
              }}
              _focus={{
                outline: "none",
                border: "none",
              }}
              href="tel:+2348166111593"
              isExternal
            >
              Call Me
            </Link>
          </Button>
        </motion.div>
      </Tooltip>
    </HStack>
  );
};
