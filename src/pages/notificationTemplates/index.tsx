import { Box, Button, Flex, Heading, Icon, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { useCallback } from "react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import Header from "../../components/Header";
import Pagination from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";
import { CurrentNotificationTemplateContext } from "../../contexts/NotificationTemplatesContext";
import { NotificationTemplatesInterface } from "../../interfaces/notificationTemplatesInterface";
import { notificationsTemplateService } from "../../services/notificationsTemplateService";


export default function NotificationsTemplatesList() {
  const [data, setData] = useState<NotificationTemplatesInterface[] | null>([]);
  const { setCurrent } = useContext(CurrentNotificationTemplateContext);

  useEffect(() => {
    async function fetchData() {
      const result = await notificationsTemplateService.getAll();
      if (result?.isSuccess) {
        setData(result.data);
      }

    }
    fetchData();
  }, []);

  function handleEdit(data: NotificationTemplatesInterface) {
    console.log(data);
    setCurrent(data);
  }

  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />
        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">Notification Templates</Heading>
            <Link href="/notificationTemplates/create" passHref>
              <Button as="a" size="sm" fontSize="sm" colorScheme="pink" leftIcon={<Icon as={RiAddLine} fontSize="20" />}>Add New</Button>
            </Link>
          </Flex>
          <Table colorScheme="whiteAlpha">
            <Thead >
              <Tr>
                <Th >
                  Title
                </Th>
                <Th >
                  Type
                </Th>
                <Th >
                  Content
                </Th>
                <Th width="8" />
              </Tr>
            </Thead>
            <Tbody>
              {data && data?.map((item, index) =>
                <Tr key={index}>
                  <Td >
                    {item.title}
                  </Td>
                  <Td >
                    {item.notificationTemplateType === 1 ? 'Email' : 'SMS'}
                  </Td>
                  <Td >
                    {item.content.substring(0, 50) + "..."}
                  </Td>
                  <Td >
                    <Link href="/notificationTemplates/create" passHref >
                      <Button
                        as="a"
                        size="sm"
                        fontSize="sm"
                        colorScheme="purple"
                        leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                        onClick={() => handleEdit(item)}
                      >
                        Edit
                      </Button>
                    </Link>
                  </Td>
                </Tr>
              )}
            </Tbody>
          </Table>
          {/* <Pagination /> */}
        </Box>
      </Flex>
    </Box>
  );
}