import {
  FC,
  PropsWithChildren,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react';
import cn from 'classnames';
import ArrowDown from '@/assets/icons/arrow-down.svg?react';
import styles from './styles.module.scss';

interface Props {
  title: ReactNode;
  className?: string;
  position?: 'left' | 'right' | 'center';
  open?: boolean;
  onClick?: (open: boolean) => void;
}

export const Dropdown: FC<PropsWithChildren<Props>> = ({
  title,
  children,
  className,
  position = 'center',
  open,
  onClick,
}) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const isOpen = open || isExpanded;

  const handleButtonClick = (value: boolean) => {
    if (!onClick && !open) setIsExpanded(value);
    onClick?.(value);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      handleButtonClick(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div ref={dropdownRef} className={cn(styles.dropdown, className)}>
      <button
        className={cn(styles.trigger, { [styles.trigger_open]: isOpen })}
        onClick={handleButtonClick.bind(null, !isOpen)}
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
