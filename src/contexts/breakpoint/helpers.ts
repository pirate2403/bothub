import { BREAKPOINT_NAME, BREAKPOINT_VALUES } from '@/constants/breakpoint';

export function getCurrentBreakpoint() {
  if (window.innerWidth >= BREAKPOINT_VALUES.DESKTOP) {
    return BREAKPOINT_NAME.DESKTOP;
  } else if (window.innerWidth >= BREAKPOINT_VALUES.TABLET) {
    return BREAKPOINT_NAME.TABLET;
  } else {
    return BREAKPOINT_NAME.MOBILE;
  }
}
