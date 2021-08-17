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
          What excites me the most is shipping great stuff that makes livelihood easier. &#128540; <br/>
          Looking forward to speaking with you!
        </Text>
        <ContactIcons />
        <SocialMediaIcons />
      </VStack>
    </div>
  );
};
