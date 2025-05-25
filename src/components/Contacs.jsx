import React, { useEffect, useRef } from 'react';
import styles from './Contacts.module.scss';
import { FaPhone, FaMapMarkerAlt, FaTelegram } from 'react-icons/fa';

const ContactsWithMap = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    // Динамическая загрузка API Яндекс Карт
    const script = document.createElement('script');
    script.src = 'https://api-maps.yandex.ru/2.1/?apikey=ВАШ_API_КЛЮЧ&lang=ru_RU';
    script.async = true;
    
    script.onload = () => {
      window.ymaps.ready(() => {
        new window.ymaps.Map(mapRef.current, {
          center: [55.009822, 73.335010], // Координаты Новосибирска
          zoom: 15,
          controls: ['zoomControl']
        });
      });
    };

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className={styles.container}>
      {/* Блок контактов (слева) */}
      <div className={styles.contacts}>
        <h2 className={styles.title}>Контакты</h2>
        
        <div className={styles.contactItem}>
          <FaPhone className={styles.icon} />
          <div className={styles.contactInfo}>
            <span className={styles.label}>Телефон</span>
            <a href="tel:+78005553535" className={styles.value}>+7 800 555-35-35</a>
          </div>
        </div>
        
        <div className={styles.contactItem}>
          <FaMapMarkerAlt className={styles.icon} />
          <div className={styles.contactInfo}>
            <span className={styles.label}>Адрес</span>
            <span className={styles.value}>г. Новосибирск, ул. Красный проспект, д. 12, офис 5</span>
          </div>
        </div>
        
        <div className={styles.contactItem}>
          <FaTelegram className={styles.icon} />
          <div className={styles.contactInfo}>
            <span className={styles.label}>Telegram</span>
            <a 
              href="https://t.me/LockServiceNovosibirsk" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.value}
            >
              @LockServiceNovosibirsk
            </a>
          </div>
        </div>
      </div>

      {/* Блок карты (справа) */}
      <div className={styles.mapContainer} ref={mapRef}></div>
    </div>
  );
};

export default ContactsWithMap;