// Reviews.jsx
import React from 'react';
import styles from './AboutUs.module.scss';
import BlockHeader from './BlockHeader';
import aboutUsImage from '../assets/icons/img.png';

const AboutUs = () => {
  
  return (
     <div className={styles.container}>
      <BlockHeader
        showButtons={false}
        title={"О нас"}
      />
      <div className={styles.contnt}>
        <div className={styles.text}>
            <p>Мы — команда профессиональных мастеров по замкам с богатым опытом работы в сфере замочных систем и безопасности. Мы быстро и без повреждений решаем любые проблемы с замками. Нас выбирают не только жители города, но и такие организации, как МЧС и МВД, благодаря нашему профессионализму и надежности.

Мы гордимся тем, что за годы работы завоевали доверие множества клиентов благодаря нашему профессионализму, оперативности и индивидуальному подходу к каждой ситуации</p>
        </div>
        <img 
            src={aboutUsImage} 
            alt="Наша команда" 
            className={styles.image}
          />


      </div>
     
    </div>
  );
};

export default AboutUs;