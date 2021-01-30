import * as React from "react";
import {
  Box,
  Heading,
  HStack,
  Icon,
  Link,
  SimpleGrid,
  Tag,
  Text,
  Tooltip,
  VStack,
} from "@chakra-ui/react";
import { HiOutlineCode, HiOutlineEye, HiThumbUp } from "react-icons/hi";
import "./CardStyles.css";

export const ProjectCards = ({projects}) => {
  return (
    <SimpleGrid
      columns={[1, 1, 1, 2, 3]}
      spacingX="20px"
      spacingY="20px"
      justifyContent="center"
      p={[1, 6, 8, 10]}
      mb={4}
      mx={-5}
    >
        {projects.map((project) => (
      <Box className="card__wrapper" my={[1, 2, 10, 8]}>
          <Box key={project._id} className="card__box">
            <VStack className="glass-effect" spacing={[4, 6]}>
              <Heading as="h2" fontSize={["lg", "xl", "2xl"]}>
                {project.title}
              </Heading>
              <Text fontSize={["md", "lg", "xl"]} px={3}>
                {project.description}
              </Text>
              <HStack spacing={[1, 2, 3, 4]} flexWrap="wrap" mb={3}>
                  {(project.stack).map((stack) => (
                    
                    <Tag size="md" variant="outline" colorScheme="teal" py={1}>
                 {stack} </Tag>
                  ))}
              </HStack>
              <HStack
                spacing={["2em", "4em", "6em"]}
                w="100%"
                justifyContent="center"
              >
                <Tooltip label="View Code" aria-label="A tooltip">
                  <Link href={project.codeURL} isExternal>
                    <Icon as={HiOutlineCode} w={8} h={8} color="teal.500" />
                  </Link>
                </Tooltip>
                <Tooltip label="View Live" aria-label="A tooltip">
                  <Link href={project.liveURL} isExternal>
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
        ))}
    </SimpleGrid>
  );
};

