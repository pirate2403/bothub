import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  kind?: 'primary' | 'secondary';
  size?: 'sm' | 'md';
  icon?: boolean;
  disabled?: boolean;
}

export const Button: FC<PropsWithChildren<Props>> = ({
  kind = 'primary',
  size = 'sm',
  disabled,
  icon,
  className,
  children = 'Button',
  ...props
}) => {
  return (
    <button
      className={cn(
        styles.button,
        styles[kind],
        styles[size],
        { [styles.icon]: icon },
        className,
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};
