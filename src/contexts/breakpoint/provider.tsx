import { FC, PropsWithChildren, useEffect, useState } from 'react';
import { BreakpointContext } from './context';
import { getCurrentBreakpoint } from './helpers';

export const BreakpointProvider: FC<PropsWithChildren> = ({ children }) => {
  const [breakpoint, setBreakpoint] = useState<
    ReturnType<typeof getCurrentBreakpoint>
  >(() => getCurrentBreakpoint());

  const handleResize = () => {
    setBreakpoint(getCurrentBreakpoint());
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <BreakpointContext.Provider value={{ breakpoint: breakpoint }}>
      {children}
    </BreakpointContext.Provider>
  );
};
