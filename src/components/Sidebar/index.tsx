import { Box, Stack, Text, Divider, } from "@chakra-ui/react";
import { RiDashboardLine, RiMailAddFill, RiEdit2Line } from "react-icons/ri"
import NavegationLink from "./NavegationLink";

export function Sidebar() {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">
        <Box>
          <Text fontWeight="bold" color="gray.400" fontSize="small">Menu</Text>
          <Stack spacing="4" mt="8" align="stretch">
            <NavegationLink href='/dashboard' text="Dashboard" icon={RiDashboardLine} />
            <NavegationLink href='/notifications' text="Notification" icon={RiMailAddFill} />
            <Divider />
            <NavegationLink href='/notificationTemplates' text="Notification Template" icon={RiEdit2Line} />
          </Stack>
        </Box>
      </Stack >
    </Box >
  );
}