import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { DropBox, DropBoxItem } from "../../components/Form/DropBox";
import { Input } from "../../components/Form/Input";
import { Textarea } from "../../components/Form/TextArea";
import Header from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { NotificationTemplatesInterface } from "../../interfaces/notificationTemplatesInterface";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup'
import { NotificationsInterface } from "../../interfaces/notificationsInterface";
import { PersonInterface } from "../../interfaces/personInterface";
import { notificationsService } from "../../services/notificationsService";
import { personService } from "../../services/personService";
import { notificationsTemplateService } from "../../services/notificationsTemplateService";
import Router from "next/router";
import { useContext, useEffect, useState } from "react";
import { CurrentNotificationContext } from "../../contexts/NotificationsContext";

const notificationSchema = yup.object().shape({
  title: yup.string().required("Title is required"),
  content: yup.string().required("Content is required")
});

export default function CreateNotification() {
  const [people, setPeople] = useState<PersonInterface[]>([]);
  const [templates, setTemplates] = useState<NotificationTemplatesInterface[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const { current, setCurrent } = useContext(CurrentNotificationContext);
  const { register, handleSubmit, formState, control } = useForm({
    resolver: yupResolver(notificationSchema)
  });
  const { errors } = formState;

  const fetchDataPerson = async () => {
    const result = await personService.getAll();
    if (result?.isSuccess) {
      setPeople(result.data);
    }
  }

  const fetchDataTemplate = async () => {
    const result = await notificationsTemplateService.getAll();
    if (result?.isSuccess) {
      setTemplates(result.data);
    }
  }

  useEffect(() => {
    fetchDataTemplate().catch(err => { console.log(err) });
    fetchDataPerson().catch(err => { console.log(err) });
    setIsLoading(false);
  }, []);

  const handleSave: SubmitHandler<NotificationsInterface> = async (data, event) => {
    console.log(data);
    data.personId = parseInt(data.personId.toString());
    data.templateId = parseInt(data.templateId.toString());
    let response;
    if (data.id === undefined || data.id === null || data.id?.toString() === "") {
      response = await notificationsService.create(data);
    }
    else {
      response = await notificationsService.update(data.id, data);
    }
    if (response?.isSuccess) {
      setCurrent(null);
      Router.push("/notifications");
    }
  }
  const handleTemplateChange = (event: { target: { value: string } }) => {
    const {
      target: { value },
    } = event;
    console.log(value);
    const template = templates.find(t => t.id.toString() === value);
    if (template) {
      const newCurrent = { ...current, templateId: template.id, title: template.title, content: template.content } as NotificationsInterface;
      setCurrent(newCurrent);
    }
  };

  return (
    <Box>
      <Header />
      <Flex as="form" w="100%" my="6" maxWidth={1480} mx="auto" px="6" onSubmit={handleSubmit(handleSave)} >
        <Sidebar />
        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Heading size="lg" fontWeight="normal">Create Notification</Heading>
          <Divider my="6" borderColor="gray.700" />
          {isLoading ? <Box>Loading...</Box> :
            <VStack spacing="8">
              <input name="id" type="hidden" defaultValue={current?.id} {...register("id")}></input>
              <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
                <Controller
                  name="templateId"
                  control={control}
                  defaultValue={current?.templateId?.toString()}
                  render={({ field }) =>
                    <DropBox id="templates" {...field} onChange={handleTemplateChange} >
                      {templates.map((item, index) => (
                        <DropBoxItem key={index} value={item.id.toString()} text={item.title} />
                      ))}
                    </DropBox>
                  }
                />
                <Controller
                  name="personId"
                  control={control}
                  defaultValue={current?.personId?.toString()}
                  render={({ field }) =>
                    <DropBox {...field} >
                      {people.map((item, index) => (
                        <DropBoxItem key={index} value={item.id.toString()} text={item.name} />
                      ))}
                    </DropBox>
                  }
                />
              </SimpleGrid>
              <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
                <Input name="title" label="Title" {...register("title")} error={errors.title} defaultValue={current?.title} />
              </SimpleGrid>
              <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
                <Textarea name="content" label="Content" {...register("content")} error={errors.content} defaultValue={current?.content} />
              </SimpleGrid>
            </VStack>
          }
          <Flex justify="flex-end">
            <HStack mt="8" spacing="4">
              <Link href="/notifications" passHref>
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