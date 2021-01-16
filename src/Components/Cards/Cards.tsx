import * as React from "react";
import {
  Box,
  Heading,
  HStack,
  Icon,
  Link,
  SimpleGrid,
  Text,
  Tooltip,
  VStack,
} from "@chakra-ui/react";
import { HiOutlineCode, HiOutlineEye, HiThumbUp } from "react-icons/hi";
import "./CardStyles.css";

export function Cards() {
  // const { projectTitle, projectDesc, projectTools, cardIcon} = props;
  return (
    <>
      <Box className="card__wrapper" my={[1, 2, 10, 8]}>
        <Box className="card__box">
          <VStack className="glass-effect" spacing={[4, 6]}>
            <Heading as="h2" fontSize={["lg", "xl", "2xl"]}>
              P R O J E C T
            </Heading>
            <Text fontSize={["lg", "lg", "xl"]}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.Officiis
              mpedit laborum eum omnis dolores minus necessitatibus quo libero
              ius, eligendi rerum.Facere illo cum, voluptate nisi harum iste
              velit excepturi.
            </Text>
            <Text fontSize={["xs", "md", "lg"]}>
              <strong>T O O L S : </strong> REACT, CHAKRA-UI, NETLIFY
            </Text>
            <HStack
              spacing={["2em", "4em", "6em"]}
              w="100%"
              justifyContent="center"
            >
              <Tooltip label="View Code" aria-label="A tooltip">
                <Link>
                  <Icon as={HiOutlineCode} w={8} h={8} color="teal.500" />
                </Link>
              </Tooltip>
              <Tooltip label="View Live" aria-label="A tooltip">
                <Link>
                  <Icon as={HiOutlineEye} w={8} h={8} color="#9BDFAA" />
                </Link>
              </Tooltip>
              <Tooltip label="Like" aria-label="A tooltip">
                <Link>
                  <Icon
                    as={HiThumbUp}
                    w={8}
                    h={8}
                    color="teal.500"
                    cursor="pointer"
                  />
                </Link>
              </Tooltip>
            </HStack>
          </VStack>
          <div className="big__circle"></div>
        </Box>
      </Box>
    </>
  );
}

export const ProjectCards = () => {
  return (
    <SimpleGrid
      columns={[1, 1, 1, 2, 3]}
      spacingX="20px"
      spacingY="20px"
      justifyContent="center"
      p={[1, 6, 8, 10]}
      mb={4}
    >
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
    </SimpleGrid>
  );
};
