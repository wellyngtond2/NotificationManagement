import { Flex, Icon, Link, Text } from "@chakra-ui/react"
import { RiStarFill } from "react-icons/ri"
import NextLink from "next/link"

export default function Home() {
  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
    >
      <NextLink href='/dashboard' passHref>
        <Link display="flex" textAlign="center">
          <Icon as={RiStarFill} fontSize="20"></Icon>
          <Text ml="4" fontWeight="bold">Start</Text>
        </Link>
      </NextLink>
    </Flex>
  )
}
