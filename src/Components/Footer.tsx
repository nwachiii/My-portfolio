import React from "react";
import { Flex, Center, Text } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <Flex
      color="light-gray"
      py={3}
      mt={8}
      justifyContent="center"
      borderTopWidth="1.2px"
      h="6vh"
    >
      <Center>
        <Text>Built with &#128150; & &#127925; by Nwachiii</Text>
      </Center>
    </Flex>
  );
};
