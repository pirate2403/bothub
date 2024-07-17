import { FC, ReactNode } from 'react';
import cn from 'classnames';
import Logo from '@/assets/logo/main-logo.svg?react';
import { BREAKPOINT_NAME } from '@/constants/breakpoint';
import { useBreakpoint } from '@/contexts/breakpoint';
import { Divider } from '@/ui/divider';
import styles from './styles.module.scss';

interface Props {
  navbar?: ReactNode;
  authUser?: ReactNode;
  language?: ReactNode;
}

export const Header: FC<Props> = ({ navbar, language, authUser }) => {
  const breakpoint = useBreakpoint();

  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <div className={cn(styles.header__block, styles.header__block_left)}>
          <Logo />
          {breakpoint === BREAKPOINT_NAME.DESKTOP && <Divider />}
          {breakpoint === BREAKPOINT_NAME.DESKTOP && navbar}
        </div>
        <div className={cn(styles.header__block, styles.header__block_right)}>
          {language}
          {breakpoint !== BREAKPOINT_NAME.MOBILE && authUser}
          {breakpoint !== BREAKPOINT_NAME.DESKTOP && navbar}
        </div>
      </div>
    </header>
  );
};
