import React from 'react';
import { getLisbonNow } from './clock.js';

const ClockContext = React.createContext({ day: 2, time: '14:25', isLive: false });

export const useClock = () => React.useContext(ClockContext);

export const ClockProvider = ({ children }) => {
  const [now, setNow] = React.useState(getLisbonNow);

  React.useEffect(() => {
    // tick every 30 seconds — precise enough for session live/past state
    const id = setInterval(() => setNow(getLisbonNow()), 30_000);
    return () => clearInterval(id);
  }, []);

  return <ClockContext.Provider value={now}>{children}</ClockContext.Provider>;
};
