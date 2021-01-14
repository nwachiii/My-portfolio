import * as React from "react";
import { VStack } from "@chakra-ui/react";
import { SocialMediaIcons } from "./Icons/SocialMediaIcons";
import { ContactIcons } from "./Icons/ContactIcons";

export const ContactMe = () => {
  return (
    <div>
      <VStack>
        <SocialMediaIcons />
        <ContactIcons />
      </VStack>
    </div>
  );
};
