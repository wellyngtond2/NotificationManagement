import { createContext, useState } from 'react';
import { NotificationsInterface, NotificationsResponseInterface } from '../interfaces/notificationsInterface';

type CurrentNotificationProps = {
  current: NotificationsInterface;
  setCurrent: (newState: NotificationsInterface) => void;
}

const initialValue = {
  current: null,
  setCurrent: () => { }
}

export const CurrentNotificationContext = createContext<CurrentNotificationProps>(initialValue);

export function CurrentNotificationProvider({ children }) {
  const [current, setCurrent] = useState(initialValue.current);

  return (
    <CurrentNotificationContext.Provider value={{ current, setCurrent }}>
      {children}
    </CurrentNotificationContext.Provider>
  );
}