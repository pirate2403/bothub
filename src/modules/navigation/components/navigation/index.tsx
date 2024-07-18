import { FC, useState } from 'react';
import cn from 'classnames';
import { NavigationButton } from '../navigation-button';
import { NavigationItem } from '../navigation-item';
import styles from './styles.module.scss';

export const Navigation: FC = () => {
  const [visible, setVisible] = useState(false);

  const handleToggleVisible = () => {
    setVisible(!visible);
  };

  return (
    <div className={styles.navigation}>
      <NavigationButton
        open={visible}
        className={styles.button}
        onClick={handleToggleVisible}
      />

      <nav className={cn(styles.list, { [styles.list_visible]: visible })}>
        <NavigationItem />
        <NavigationItem />
        <NavigationItem />
      </nav>
    </div>
  );
};
