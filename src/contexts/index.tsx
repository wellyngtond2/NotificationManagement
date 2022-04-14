import { ChakraProvider } from '@chakra-ui/react'
import React from 'react';
import { theme } from '../styles/theme'
import { DashBoardProvider } from './Dashboard';
import { CurrentNotificationProvider } from './NotificationsContext';
import { CurrentNotificationTemplateProvider } from './NotificationTemplatesContext';

export const AppProviders: React.FC = ({ children }) => (
  <ChakraProvider theme={theme}>
    <CurrentNotificationTemplateProvider>
      <CurrentNotificationProvider>
        <DashBoardProvider>
          {children}
        </DashBoardProvider>
      </CurrentNotificationProvider>
    </CurrentNotificationTemplateProvider>
  </ChakraProvider>
);
