import React from "react";
import {Link} from "react-router-dom";
import { Flex, Heading } from "@chakra-ui/react";
import { ColorModeSwitcher } from "../theme/ColorModeSwitcher";


export const Header = () => {
  return (
    <Flex
      color="light-gray"
      py={3}
      justifyContent="space-between"
      borderTopWidth="1.2px"
      maxW="90%"
      mx="auto"
    >
      <Link to="/">
        <Heading as="h4" color="teal.500">
          <i>nwachiii</i>
        </Heading>
      </Link>
      <ColorModeSwitcher />
    </Flex>
  );
};
