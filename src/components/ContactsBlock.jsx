import React, { useState, useEffect } from 'react';
import { FaPhone, FaMapMarkerAlt, FaTelegramPlane } from "react-icons/fa";
import styles from "./ContactsBlock.module.scss";
import BlockHeader from "./BlockHeader";
import { BsFillTelephoneFill } from "react-icons/bs";
import { LINKS } from "../config/links";
import { trackButtonClick } from "../utils/metrics";
import { CONTACTS_TEXT } from "../texts";

const ContactsBlock = () => {
  const {
    title,
    phoneLabel,
    addressLabel,
    telegramLabel,
    phone,
    address,
  } = CONTACTS_TEXT;

  const [isMapLoaded, setIsMapLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMapLoaded(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleTelegramClick = () => {
    trackButtonClick(
      'Написать в Telegram',
      'telegram_button',
      LINKS.telegram.url,
      'contacts'
    );
  };

  const handlePhoneClick = () => {
    trackButtonClick(
      'Позвонить',
      'phone_button',
      LINKS.phone.tel,
      'contacts'
    );
  };

  return (
    <div className={styles.container}>
      <BlockHeader showButtons={false} title={title} />
      <div className={styles.content}>
        <div className={styles.info}>
          <div className={styles.row}>
            <BsFillTelephoneFill className={styles.icon} />
            <div>
              <strong>{phoneLabel}</strong>
              <br />
              <a 
                href={LINKS.phone.tel}
                onClick={handlePhoneClick}
                className={styles.phoneLink}
              >
                {phone}
              </a>
            </div>
          </div>

          <div className={styles.row}>
            <FaMapMarkerAlt className={styles.icon} />
            <div>
              <strong>{addressLabel}</strong>
              <br />
              <span>{address}</span>
            </div>
          </div>

          <div className={styles.row}>
            <FaTelegramPlane className={styles.icon} />
            <div>
              <strong>{telegramLabel}</strong>
              <br />
              <a 
                href={LINKS.telegram.url + '&utm_medium=contacts'} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.telegramLink}
                onClick={handleTelegramClick}
              >
                Написать в Telegram
              </a>
            </div>
          </div>
        </div>

        <div className={styles.mapWrapper}>
          {isMapLoaded ? (
            <iframe 
              src={`https://yandex.ru/map-widget/v1/?um=constructor%${LINKS.yandexMapId}&amp;source=constructor`} 
              width="100%" 
              height="100%" 
              frameBorder="0" 
              loading="lazy" 
              title="Карта проезда"
            />
          ) : (
            <div className={styles.mapPlaceholder}>
              Загрузка карты...
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactsBlock;
