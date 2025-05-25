import React from 'react';
import Button from './Button';
import Peculiarity from './Peculiarity';
import styles from './StartBlock.module.scss';
import telegramIcon from '../assets/icons/telegram.svg';
import { FaClock, FaBolt, FaTools } from 'react-icons/fa';

const StartBlock = () => {
  return (
    <div className={styles.combinedContainer}>
      {/* Верхний блок (бывший ServiceHeader) */}
      <div className={styles.serviceBlock}>
        <div className={styles.content}>
          <div>
            <h1 className={styles.title}>Вскрытие замков</h1>
            <p className={styles.subtitle}>
              Откроем замок любой сложности аккуратно и быстро.<br />
              Мы — ваш надежный выбор.
            </p>    
          </div>

          <div className={styles.buttons}>
            <Button 
              variant="outlined" 
              icon={<img src={telegramIcon} alt="Telegram" className={styles.buttonIcon} />}
              onClick={() => window.open('https://t.me/your_telegram', '_blank')}
            >
              Написать в Telegram
            </Button>
            
            <Button 
              variant="filled"
              onClick={() => window.location.href = 'tel:+79991234567'}
            >
              Позвонить
            </Button>
          </div>
        </div>
        
        <div className={styles.features}>
          <Peculiarity text="Любая сложность" />
          <Peculiarity text="Без повреждений" />
          <Peculiarity text="Замки в наличии" />
          <Peculiarity text="Сотрудничаем с МВД и МЧС" />
        </div>
      </div>

      {/* Нижний блок (бывший Stats) */}
      <div className={styles.statsBlock}>
        <div className={styles.item}>
          <div className={styles.iconWrapper}>
            <FaClock className={styles.icon} />
          </div>
          <div className={styles.textWrapper}>
            <div className={styles.text}>Поможем в любое время</div>
            <div className={styles.subtext}>Работаем 24/7</div>
          </div>
        </div>
        
        <div className={styles.divider}></div>
        
        <div className={styles.item}>
          <div className={styles.iconWrapper}>
            <FaBolt className={styles.icon} />
          </div>
          <div className={styles.textWrapper}>
            <div className={styles.text}>Работаем оперативно</div>
            <div className={styles.subtext}>Приезд от 15 минут</div>
          </div>
        </div>
        
        <div className={styles.divider}></div>
        
        <div className={styles.item}>
          <div className={styles.iconWrapper}>
            <FaTools className={styles.icon} />
          </div>
          <div className={styles.textWrapper}>
            <div className={styles.text}>Чиним эффективно</div>
            <div className={styles.subtext}>Среднее время открытия 7 минут</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartBlock;