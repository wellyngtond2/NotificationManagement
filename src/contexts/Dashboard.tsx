import { createContext, useState } from 'react';
import { NotificationsTotals } from '../interfaces/notificationsTotals';

type DashBoardProps = {
  current: NotificationsTotals;
  setCurrent: (newState: NotificationsTotals) => void;
}

const initialValue = {
  current: null,
  setCurrent: () => { }
}

export const DashBoardContext = createContext<DashBoardProps>(initialValue);

export function DashBoardProvider({ children }) {
  const [current, setCurrent] = useState(initialValue.current);

  return (
    <DashBoardContext.Provider value={{ current, setCurrent }}>
      {children}
    </DashBoardContext.Provider>
  );
}