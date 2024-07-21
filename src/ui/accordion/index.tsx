import {
  createElement,
  FC,
  PropsWithChildren,
  ReactNode,
  useRef,
  useState,
} from 'react';
import cn from 'classnames';
import ArrowDown from '@/assets/icons/arrow-down.svg?react';
import ArrowDownRound from '@/assets/icons/arrow-down-round.svg?react';
import styles from './styles.module.scss';

const ICON = {
  primary: ArrowDownRound,
  secondary: ArrowDown,
};

interface Props {
  kind?: 'primary' | 'secondary';
  title: ReactNode;
}

export const Accordion: FC<PropsWithChildren<Props>> = ({
  kind = 'primary',
  title,
  children,
}) => {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleButtonClick = () => {
    setIsExpanded(!isExpanded);
  };

  const height = contentRef.current?.scrollHeight ?? 0;
  const style = isExpanded ? { gridTemplateRows: `auto ${height}px` } : {};

  return (
    <div
      style={style}
      className={cn(styles.accordion, styles[kind], {
        [styles[`${kind}_expanded`]]: isExpanded,
      })}
      onClick={handleButtonClick}
    >
      <div className={styles.title}>
        {title}
        {createElement(ICON[kind], {
          className: cn(styles.icon, { [styles.icon_rotate]: isExpanded }),
        })}
      </div>
      <div
        ref={contentRef}
        className={styles.content}
        onClick={event => event.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};
