import React from "react";
import {
  DiBootstrap,
  DiCss3,
  DiGithubBadge,
  DiHtml5,
  DiJavascript1,
  DiReact,
  DiVisualstudio,
} from "react-icons/di";
import { Icon, SimpleGrid } from "@chakra-ui/react";

function Tools() {
  return (
    <SimpleGrid
      columns={4}
      spacing={[6, 8, 10]}
      w="80%"
      px={6}
      py={4}
      mx="auto"
    >
      <Icon as={DiGithubBadge} w={12} h={12} color="teal.500" />
      <Icon as={DiBootstrap} w={12} h={12} color="1223db" />
      <Icon as={DiJavascript1} w={12} h={12} color="teal.500" />
      <Icon as={DiHtml5} w={12} h={12} color="1223db" />
      <Icon as={DiVisualstudio} w={12} h={12} color="teal.500" />
      <Icon as={DiReact} w={12} h={12} color="1223db" />
      <Icon as={DiCss3} w="50px" h="50px" color="teal.500" />
    </SimpleGrid>
  );
}

export default Tools;
