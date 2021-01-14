import { Flex, Center, Text } from "@chakra-ui/react";
import React from "react";

export const Footer = () => {
  return (
    <Flex
      color="light-gray"
      py={3}
      justifyContent="center"
      borderTopWidth="1px"
    >
      <Center>
        <Text>Built with &#128150; & &#127925; by Nwachiii</Text>
      </Center>
    </Flex>
  );
};
