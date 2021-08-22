// The ContactMeModal component is the parent container of this component

import * as React from "react";
import { Text, VStack } from "@chakra-ui/react";
import { SocialMediaIcons } from "./Icons/SocialMediaIcons";
import { ContactIcons } from "./Icons/ContactIcons";

export const ContactMe = () => {
  return (
    <div>
      <VStack spacing={6} mb={5}>
        <Text
          textAlign="left"
          lineHeight="30px"
          fontSize={["md", "lg", "xl"]}
          px={4}
          isCentered
        >
          The end-users are seeking easy-to-use applications with modern,
          robust, intuitive features. If your products aim for such seamless
          experience, I'm the developer you're looking for &#128540;
        </Text>
        <Text
          textAlign="left"
          lineHeight="30px"
          fontSize={["md", "lg", "xl"]}
          px={4}
        >
          {" "}
          Kindly Reach out. Let's talk!
        </Text>
        <ContactIcons />

        <SocialMediaIcons />
      </VStack>
    </div>
  );
};
