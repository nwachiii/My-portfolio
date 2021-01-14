import * as React from "react";
import { FaTwitter, FaGithub } from "react-icons/fa";
import { Icon, Link, Tooltip, HStack } from "@chakra-ui/react";

export const ContactIcons = () => {
  return (
    <HStack>
      <Tooltip label="send a mail" aria-label="A tooltip">
        <Link href="https://github.com/nwachiii" isExternal>
          <Icon as={FaGithub} w={8} h={8} />
        </Link>
      </Tooltip>
      <Tooltip label="phone number" aria-label="A tooltip">
        <Link href="https://twitter.com/nwachiii" isExternal>
          <Icon as={FaTwitter} w={8} h={8} color="teal.500" />
        </Link>
      </Tooltip>
    </HStack>
  );
};
