import {  Flex, SimpleGrid } from "@chakra-ui/react";
import Card from "../components/Dashboard/Card";
import Header from "../components/Header";
import { Sidebar } from "../components/Sidebar";

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />
        <SimpleGrid flex="1" gap="4" minChildWidth="320px">
          <Card title="Total Notifications" value={5} valueColor="pink.500" />
          <Card title="UnSent Notifications" valueColor="#eea320" value={1} />
        </SimpleGrid>
      </Flex>
    </Flex>
  )
}