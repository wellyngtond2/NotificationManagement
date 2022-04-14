import { Box, Button, Divider, Flex, Heading, HStack, Radio, RadioGroup, SimpleGrid, Stack, VStack, Text } from "@chakra-ui/react";
import Link from "next/link";
import { Input } from "../../components/Form/Input";
import { Textarea } from "../../components/Form/TextArea";
import Header from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { NotificationTemplatesInterface, NotificationTemplateType } from "../../interfaces/notificationTemplatesInterface";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup'
import { useContext } from "react";
import { CurrentNotificationTemplateContext } from "../../contexts/NotificationTemplatesContext";
import { notificationsTemplateService } from "../../services/notificationsTemplateService";
import Router from "next/router";


const notificationTemplateSchema = yup.object().shape({
  title: yup.string().required("Title is required"),
  content: yup.string().required("Content is required")
});

export default function CreateNotificationTemplate() {
  const { register, handleSubmit, formState, control } = useForm({
    resolver: yupResolver(notificationTemplateSchema)
  });
  const { current, setCurrent } = useContext(CurrentNotificationTemplateContext);
  const { errors } = formState;

  const handleSave: SubmitHandler<NotificationTemplatesInterface> = async (data, event) => {
    data.notificationTemplateType = parseInt(data.notificationTemplateType.toString());
    let response;
    if (data.id === undefined || data.id === null || data.id?.toString() === "") {
      response = await notificationsTemplateService.create(data);
    }
    else {
      response = await notificationsTemplateService.update(data.id, data);
    }
    if (response?.isSuccess) {
      setCurrent(null);
      Router.push("/notificationTemplates");
    }
  }

  return (
    <Box>
      <Header />
      <Flex as="form" w="100%" my="6" maxWidth={1480} mx="auto" px="6" onSubmit={handleSubmit(handleSave)}>
        <Sidebar />
        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Heading size="lg" fontWeight="normal">Create Notification Template</Heading>
          <Divider my="6" borderColor="gray.700" />
          <VStack spacing="8">
            <input name="id" type="hidden" defaultValue={current?.id} {...register("id")}></input>
            <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
              <Controller
                name="notificationTemplateType"
                control={control}
                defaultValue={current?.notificationTemplateType.toString()}
                render={({ field }) => (
                  <RadioGroup  {...field} defaultValue={current?.notificationTemplateType.toString()}>
                    <Text mb="2" fontSize="md" fontWeight="medium">Send to:</Text>
                    <Stack spacing={5} direction='row'>
                      <Radio colorScheme='gray.500' value='1' >
                        Email
                      </Radio>
                      <Radio colorScheme='gray.500' value='2' >
                        Sms
                      </Radio>
                    </Stack>
                  </RadioGroup>
                )}
              />
            </SimpleGrid>
            <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
              <Input name="title" label="Title" {...register("title")} error={errors.title} defaultValue={current?.title} />
            </SimpleGrid>
            <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
              <Textarea name="content" label="Content" {...register("content")} error={errors.content} defaultValue={current?.content} />
            </SimpleGrid>
          </VStack>
          <Flex justify="flex-end">
            <HStack mt="8" spacing="4">
              <Link href="/notificationTemplates" passHref>
                <Button as="a" colorScheme="whiteAlpha" onClick={() => {
                  setCurrent(null)
                }}>Cancel</Button>
              </Link>
              <Button type="submit" colorScheme="pink" isLoading={formState.isSubmitting}>Salvar</Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}

