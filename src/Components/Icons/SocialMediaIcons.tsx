import * as React from "react";
import { FaLinkedinIn, FaTwitter, FaGithub } from "react-icons/fa";
import { Icon, Link, Tooltip } from "@chakra-ui/react";

export const SocialMediaIcons = () => {
  return (
    <>
      <Tooltip label="linkedIn" aria-label="A tooltip">
        <Link
          bg="white"
          rounded={4}
          px={1}
          pb={1}
          href="https://linkedin.com/in/nwachukwuemmauel"
          isExternal
        >
          <Icon as={FaLinkedinIn} w={6} h={6} color="teal.500" />{" "}
        </Link>
      </Tooltip>
      <Tooltip label="github" aria-label="A tooltip">
        <Link href="https://github.com/nwachiii" isExternal>
          <Icon as={FaGithub} w={8} h={8} />
        </Link>
      </Tooltip>
      <Tooltip label="twitter" aria-label="A tooltip">
        <Link href="https://twitter.com/nwachiii" isExternal>
          <Icon as={FaTwitter} w={8} h={8} color="teal.500" />
        </Link>
      </Tooltip>
    </>
  );
};
