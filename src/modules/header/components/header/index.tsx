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
  const isDesktop = breakpoint === BREAKPOINT_NAME.DESKTOP;
  const isMobile = breakpoint === BREAKPOINT_NAME.MOBILE;

  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <div className={cn(styles.block, styles.block_left)}>
          <Logo />
          {isDesktop && <Divider />}
          {isDesktop && navbar}
        </div>
        <div className={cn(styles.block, styles.block_right)}>
          {language}
          {!isMobile && authUser}
          {!isDesktop && navbar}
        </div>
      </div>
    </header>
  );
};
