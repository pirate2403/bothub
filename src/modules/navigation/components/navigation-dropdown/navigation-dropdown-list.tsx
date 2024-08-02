import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import Aggregator from '@/assets/icons/aggregator-bot.svg?react';
import Business from '@/assets/icons/business-bot.svg?react';
import Telegram from '@/assets/icons/telegram-bot.svg?react';
import styles from './styles.module.scss';

interface Props {
  handleLinkClick?: () => void;
}

export const NavigationDropdownList: FC<Props> = ({ handleLinkClick }) => {
  return (
    <div className={styles.list}>
      <NavLink className={styles.item} to="/packages" onClick={handleLinkClick}>
        <Aggregator />
        <div className={styles.item__text}>
          <span>Агрегатор нейросетей BotHub</span>
          <span>ChatGPT на базе 3.5 и 4.0 версии OpenAI</span>
        </div>
      </NavLink>
      <NavLink className={styles.item} to="/api" onClick={handleLinkClick}>
        <Business />
        <div className={styles.item__text}>
          <span>Telegram бот</span>
          <span>Удобный бот в Telegram который всегда под рукой</span>
        </div>
      </NavLink>
      <NavLink className={styles.item} to="/blog" onClick={handleLinkClick}>
        <Telegram />
        <div className={styles.item__text}>
          <span>Бизнес бот</span>
          <span>ChatGPT для эффективного решения бизнес задач</span>
        </div>
      </NavLink>
    </div>
  );
};
