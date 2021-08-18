import React from "react";
import { Link } from "react-router-dom";
import { Flex, Heading } from "@chakra-ui/react";
import { ColorModeSwitcher } from "../theme/ColorModeSwitcher";
import { motion } from "framer-motion";

export const Header = () => {
  return (
    <motion.div
      initial={{ y: -250 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.2, type: "spring", stiffness: 150 }}
    >
      <Flex
        color="dark-gray"
        py={3}
        justifyContent="space-between"
        alignItems="flex-end"
        borderBottomWidth="0.1px"
        maxW="90%"
        h="8vh"
        mx="auto"
      >
        <Link to="/">
          <Heading as="h4" color="teal.500">
            <i>nwachiii</i>
          </Heading>
        </Link>
        <ColorModeSwitcher />
      </Flex>
    </motion.div>
  );
};
