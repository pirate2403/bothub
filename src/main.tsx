import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { BreakpointProvider } from '@/contexts/breakpoint';
import { BaseLayout } from '@/layouts/base-layout';
import { MainPage } from '@/pages/main';
import './styles/index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BreakpointProvider>
      <RouterProvider
        router={createBrowserRouter([
          {
            path: '/',
            element: <BaseLayout />,
            children: [
              {
                path: '/',
                element: <MainPage />,
              },
              {
                path: '/*',
                element: <div>Page not found</div>,
              },
            ],
          },
        ])}
      />
    </BreakpointProvider>
  </React.StrictMode>,
);
