import { useContext } from 'react';
import { BreakpointContext } from './context';

export const useBreakpoint = () => {
  const { breakpoint } = useContext(BreakpointContext);
  return breakpoint;
};
