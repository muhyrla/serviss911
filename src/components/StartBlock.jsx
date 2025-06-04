import React from "react";
import Button from "./Button";
import keyIcon from "../assets/icons/key.svg";
import styles from "./StartBlock.module.scss";
import { BsFillTelephoneFill } from "react-icons/bs";
import { TbHours24 } from "react-icons/tb";
import { FaTruckFast } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { LINKS } from "../config/links";
import { trackButtonClick } from "../utils/metrics";
import { START_BLOCK_TEXT } from "../texts";

const Peculiarity = ({ icon = <img src={keyIcon} alt="" />, text }) => {
  return (
    <div className={styles.peculiarity}>
      <div className={styles.peculiarity__square}>
        <div className={styles.peculiarity__icon}>{icon}</div>
      </div>
      {text && <div className={styles.peculiarity__text}>{text}</div>}
    </div>
  );
};

const StartBlock = () => {
  const handlePhoneClick = () => {
    trackButtonClick(
      'Позвонить',
      'phone_button',
      LINKS.phone.raw,
      'start'
    );
  };

  const handleTelegramClick = () => {
    trackButtonClick(
      'Написать в Telegram',
      'telegram_button',
      LINKS.telegram.url,
      'start'
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.serviceHeader}>
        <div className={styles.content}>
          <div>
            <h1 className={styles.title}>
              <span>{START_BLOCK_TEXT.title.first}</span>
              <span>{START_BLOCK_TEXT.title.second}</span>
            </h1>
            <p className={styles.subtitle}>
              {START_BLOCK_TEXT.subtitle}
            </p>
          </div>

          <div className={styles.buttons}>
            <a
              href={LINKS.phone.tel}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.phoneButton}
              onClick={handlePhoneClick}
            >
              <Button
                variant="filled"
                icon={<BsFillTelephoneFill />}
                ariaLabel="Позвонить"
                color="blue"
              >
                Позвонить
              </Button>
            </a>

            <a
              href={LINKS.telegram.url + '&utm_medium=startblock'}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.telegramButton}
              onClick={handleTelegramClick}
            >
              <Button
                variant="outlined"
                icon={<FaTelegramPlane />}
                ariaLabel="Написать в Telegram"
                color="blue"
              >
                Написать в Telegram
              </Button>
            </a>
          </div>
        </div>

        <div className={styles.features}>
          {START_BLOCK_TEXT.features.map((text, index) => (
            <Peculiarity key={index} text={text} />
          ))}
        </div>
      </div>

      <div className={styles.statsContainer}>
        {START_BLOCK_TEXT.stats.map((stat, index) => (
          <div key={index} className={styles.item}>
            <div className={styles.iconWrapper}>
              {index === 0 && <TbHours24 className={styles.icon} />}
              {index === 1 && <FaTruckFast className={styles.icon} />}
              {index === 2 && <FaTools className={styles.icon} />}
            </div>
            <div className={styles.textWrapper}>
              <div className={styles.text}>{stat.title}</div>
              <div className={styles.subtext}>{stat.subtitle}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StartBlock;
