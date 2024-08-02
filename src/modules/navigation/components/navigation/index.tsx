import { FC, useState } from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import { useNavigationListener } from '../../hooks/use-navigation-listener';
import { NavigationButton } from '../navigation-button';
import { NavigationDropdown } from '../navigation-dropdown';
import styles from './styles.module.scss';

export const Navigation: FC = () => {
  const [visible, setVisible] = useState(false);

  const handleToggleVisible = () => {
    setVisible(!visible);
  };

  const handleCloseVisible = () => {
    setVisible(false);
  };

  useNavigationListener(handleCloseVisible);

  return (
    <div className={styles.navigation}>
      <NavigationButton
        open={visible}
        className={styles.button}
        onClick={handleToggleVisible}
      />

      <nav className={cn(styles.list, { [styles.list_visible]: visible })}>
        <NavigationDropdown />
        <NavLink className={styles.item} to="/packages">
          Пакеты
        </NavLink>
        <NavLink className={styles.item} to="/api">
          API
        </NavLink>
        <NavLink className={styles.item} to="/blog">
          Блог
        </NavLink>
      </nav>
    </div>
  );
};
