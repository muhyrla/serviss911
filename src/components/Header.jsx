import styles from "./Header.module.scss";
import { FaTelegramPlane } from "react-icons/fa";
import Button from "./Button";
import { HEADER_TEXT } from "../texts";
import { BsFillTelephoneFill } from "react-icons/bs";
import { LINKS } from "../config/links";
import { useState, useEffect } from "react";

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    const header = document.querySelector(`.${styles.header}`);

    if (element && header) {
      const offset = -header.offsetHeight - 60;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + offset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <button
          className={styles.logoButton}
          onClick={() => handleScroll("start")}
        >
          {HEADER_TEXT.logo}
        </button>
      </div>

      <nav className={styles.nav}>
        {HEADER_TEXT.sections.map(({ id, label }) => (
          <button
            key={id}
            className={styles.navItem}
            onClick={() => handleScroll(id)}
          >
            {label}
          </button>
        ))}
      </nav>

      <div className={styles.right}>
        <a href={LINKS.telegram.url + '&utm_medium=header'} target="_blank" rel="noopener noreferrer">
          <Button
            variant="icon"
            color="blue"
            icon={<FaTelegramPlane />}
            ariaLabel={HEADER_TEXT.ariaLabelCall}
            onClick={() => console.log("Telegram")}
          />
        </a>

        <a
          href={LINKS.phone.tel}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            variant="filled"
            color="primary-500"
            icon={<BsFillTelephoneFill />}
            ariaLabel={HEADER_TEXT.ariaLabelCall}
            className={styles.callButton}
          >
            {!isMobile && LINKS.phone.raw}
          </Button>
        </a>
      </div>
    </header>
  );
}
