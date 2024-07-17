import React from 'react';
import ReactDOM from 'react-dom/client';
import { BreakpointProvider } from '@/contexts/breakpoint';
import { MainPage } from '@/pages/main';
import './styles/index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BreakpointProvider>
      <MainPage />
    </BreakpointProvider>
  </React.StrictMode>,
);
