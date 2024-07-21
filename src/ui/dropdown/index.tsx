import { FC, PropsWithChildren, ReactNode, useState } from 'react';
import cn from 'classnames';
import ArrowDown from '@/assets/icons/arrow-down.svg?react';
import styles from './styles.module.scss';

interface Props {
  title: ReactNode;
  className?: string;
  position: 'left' | 'right' | 'center';
}

export const Dropdown: FC<PropsWithChildren<Props>> = ({
  title,
  children,
  className,
  position = 'center',
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={cn(styles.dropdown, className)}>
      <button
        className={cn(styles.trigger, { [styles.trigger_open]: isOpen })}
        onClick={handleButtonClick}
      >
        {title}
        <ArrowDown />
      </button>
      <div
        className={cn(styles.menu, styles[`menu_${position}`], {
          [styles.menu_visible]: isOpen,
        })}
      >
        {children}
      </div>
    </div>
  );
};
