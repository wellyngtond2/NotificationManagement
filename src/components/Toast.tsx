import { createStandaloneToast } from "@chakra-ui/react";
const toast = createStandaloneToast();

interface ToastTemplates {
  description: string;
}
const Success = ({ description }: ToastTemplates) => {
  toast({
    title: 'Success',
    description: description,
    status: 'success',
    duration: 5000,
    isClosable: true,
  });
}
const Error = ({ description }: ToastTemplates) => {
  toast({
    title: 'Error',
    description: description,
    status: 'error',
    duration: 5000,
    isClosable: true,
  });
}

const Warning = ({ description }: ToastTemplates) => {
  toast({
    title: 'Warning',
    description: description,
    status: 'warning',
    duration: 5000,
    isClosable: true,
  });
}

const Info = ({ description }: ToastTemplates) => {
  toast({
    title: 'Info',
    description: description,
    status: 'info',
    duration: 5000,
    isClosable: true,
  });
}

export { Success, Error, Warning, Info };