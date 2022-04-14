import { ChakraProvider } from '@chakra-ui/react'
import React from 'react';
import { theme } from '../styles/theme'
import { CurrentNotificationProvider } from './NotificationsContext';
import { CurrentNotificationTemplateProvider } from './NotificationTemplatesContext';

export const AppProviders: React.FC = ({ children }) => (
  <ChakraProvider theme={theme}>
    <CurrentNotificationTemplateProvider>
      <CurrentNotificationProvider>
          {children}
      </CurrentNotificationProvider>
    </CurrentNotificationTemplateProvider>
  </ChakraProvider>
);
