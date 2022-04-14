import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import Link from "next/link";
import { useContext, useState, useEffect } from "react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import Header from "../../components/Header";
import Pagination from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";
import { CurrentNotificationContext } from "../../contexts/NotificationsContext";
import { NotificationsInterface, NotificationsResponseInterface } from "../../interfaces/notificationsInterface";
import { notificationsService } from "../../services/notificationsService";

export default function NotificationsList() {
  const [data, setData] = useState<NotificationsResponseInterface[] | null>([]);
  const { setCurrent } = useContext(CurrentNotificationContext);

  useEffect(() => {
    const fetchData = async () => {
      const result = await notificationsService.getAll();
      if (result?.isSuccess) {
        setData(result.data);
      }
    }
    fetchData().catch(err => { console.log(err) });
  }, []);

  function handleEdit(data: NotificationsResponseInterface) {
    
    const request: NotificationsInterface = {
      id: data.id,
      title: data.title,
      content: data.content,
      personId: data.person?.id,
      templateId: data.notificationTemplate?.id,
      wasSent: false
    };
    setCurrent(request);
  }

  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />
        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">Notifications</Heading>
            <Link href="/notifications/create" passHref>
              <Button as="a" size="sm" fontSize="sm" colorScheme="pink" leftIcon={<Icon as={RiAddLine} fontSize="20" />}>Add New</Button>
            </Link>
          </Flex>
          <Table colorScheme="whiteAlpha">
            <Thead >
              <Tr>
                <Th>
                  Title
                </Th>
                <Th width="8">
                  Was Sent
                </Th>
                <Th width="8" />
              </Tr>
            </Thead>
            <Tbody>
              {data.map((item, index) =>
                <Tr key={index} >
                  <Td >
                    {item.title}
                  </Td>
                  <Td >
                    {item.wasSent ? 'Yes' : 'No'}
                  </Td>
                  <Td >
                    <Link href={item.wasSent ? "" : "/notifications/create"} passHref >
                      <Button
                        as="a"
                        size="sm"
                        fontSize="sm"
                        colorScheme="purple"
                        leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                        onClick={() => handleEdit(item)}
                        isDisabled={item.wasSent}
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