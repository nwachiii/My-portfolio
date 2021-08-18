import React from "react";
import { Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";

// All Tools, Skills, information a recruiter would love to see
function AboutMe() {
  return (
    <motion.div >
      <VStack
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        w="100%"
        mb={4}
        maxW="500px"
        lineHeight="2em"
        wordBreak="break-word"
        px={4}
        mx="auto"
      >
        <Text>
          I am a Frontend Developer specializing in React and JavaScript.I spend
          my time experimenting and researching frontend tools and technologies.
          I have professional work experience building user-interfaces and web
          applications, from scratch to deployment utilizing ReactJS, Redux,
          JavaScript ES6+, HTML5, CSS3, Chakra-UI, Material-UI, and other
          technologies.
        </Text>
        <Text>
          I not only have Frontend Engineering experience, but also an
          outstanding set of soft skills and an extensive science background
          that contributes to my love for critical thinking and problem solving
          that prioritize user experience.
        </Text>
      </VStack>
    </motion.div>
  );
}

export default AboutMe;
