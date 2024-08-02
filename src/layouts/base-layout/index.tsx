import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '@/modules/header';
import { Navigation } from '@/modules/navigation';
import { Button } from '@/ui/button';
import styles from './styles.module.scss';

export const BaseLayout: FC = () => {
  return (
    <main className={styles.root}>
      <Header
        navbar={<Navigation key="header-navigation" />}
        authUser={<Button>Авторизация</Button>}
        language={<Button>language</Button>}
      />
      <Outlet />
    </main>
  );
};
