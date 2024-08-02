import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import type { Location } from '@remix-run/router';

export function useNavigationListener(callback: () => void) {
  const location: Location = useLocation();

  useEffect(() => {
    callback?.();
  }, [location]);
}
