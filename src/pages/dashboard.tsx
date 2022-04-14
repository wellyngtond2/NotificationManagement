import { Flex, SimpleGrid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Card from "../components/Dashboard/Card";
import Header from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { NotificationsTotals } from "../interfaces/notificationsTotals";
import { notificationsService } from "../services/notificationsService";

export default function Dashboard() {
const [totals, setTotals]=  useState<NotificationsTotals | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await notificationsService.getTotals();
      if (result?.isSuccess) {
        console.log(result.data);
        setTotals(result.data);
      }
    }
    fetchData().catch(err => { console.log(err) });
  }, []);

  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />
        <SimpleGrid flex="1" gap="4" minChildWidth="320px">
          <Card title="Total Notifications" value={totals?.Total} valueColor="pink.500" />
          <Card title="UnSent Notifications" valueColor="#eea320" value={totals?.UnSentTotal} />
        </SimpleGrid>
      </Flex>
    </Flex>
  )
}