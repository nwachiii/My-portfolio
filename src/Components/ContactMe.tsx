// The ContactMeModal component is the parent container of this component

import * as React from "react";
import { Text, VStack } from "@chakra-ui/react";
import { SocialMediaIcons } from "./Icons/SocialMediaIcons";
import { ContactIcons } from "./Icons/ContactIcons";

export const ContactMe = () => {
  return (
    <div>
      <VStack spacing={9} mb={5}>
        <Text textAlign="left" fontSize={["md", "lg", "xl"]} px={4} isCentered>
          Wondering if I would be a good culture fit at your company? or if I am
          a good team player? (I am, by the way &#128540; ). Let's connect and
          find out!
        </Text>
        <ContactIcons />
        <SocialMediaIcons />
      </VStack>
    </div>
  );
};
