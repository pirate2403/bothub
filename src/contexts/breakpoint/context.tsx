import { createContext } from 'react';
import { getCurrentBreakpoint } from './helpers';

interface Value {
  breakpoint: ReturnType<typeof getCurrentBreakpoint>;
}

const DEFAULT_VALUE = {
  breakpoint: getCurrentBreakpoint(),
};

export const BreakpointContext = createContext<Value>(DEFAULT_VALUE);
