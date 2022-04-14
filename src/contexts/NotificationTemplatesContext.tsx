import { createContext, useState } from 'react';
import { NotificationTemplatesInterface } from '../interfaces/notificationTemplatesInterface';

type CurrentNotificationTemplateProps = {
  current: NotificationTemplatesInterface;
  setCurrent: (newState: NotificationTemplatesInterface) => void;
}

const initialValue = {
  current: null,
  setCurrent: () => { }
}

export const CurrentNotificationTemplateContext = createContext<CurrentNotificationTemplateProps>(initialValue);

export function CurrentNotificationTemplateProvider({ children }) {
  const [current, setCurrent] = useState(initialValue.current);

  return (
    <CurrentNotificationTemplateContext.Provider value={{ current, setCurrent }}>
      {children}
    </CurrentNotificationTemplateContext.Provider>
  );
}