import { FC } from 'react';
import cn from 'classnames';
import { Button } from '@/ui/button';
import styles from './styles.module.scss';

interface Props {
  open?: boolean;
  onClick?: () => void;
  className?: string;
}

export const NavigationButton: FC<Props> = ({ open, ...props }) => {
  return (
    <Button icon size="sm" {...props}>
      <div className={cn(styles.icon, { [styles.icon_open]: open })}>
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} />
        ))}
      </div>
    </Button>
  );
};
