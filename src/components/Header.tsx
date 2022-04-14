import { Flex, Text } from "@chakra-ui/react";
import { RiNotification3Line } from "react-icons/ri";

export default function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      maxW={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
      ml="auto"
    >      
      <Text
        fontSize="2xl"
        fontWeight="bold"
        letterSpacing="tight"
        w="64"
      >
        N Management
      </Text>
    </Flex>
  );
}