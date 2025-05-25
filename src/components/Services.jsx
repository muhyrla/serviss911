import styles from "./Services.module.scss";
import BlockHeader from './BlockHeader';
import carIcon from '../assets/icons/car.svg';
import lockIcon from '../assets/icons/lock.svg';
import doorIcon from '../assets/icons/door.svg';

const servicesData = [
  {
    title: 'Открытие автомобилей',
    icon: carIcon,
    services: [
      { name: 'Вскрытие двери', price: 'от 1000 ₽' },
      { name: 'Вскрытие багажника', price: 'от 1000 ₽' },
      { name: 'Открытие двери без ключа', price: 'от 1000 ₽' }
    ]
  },
  {
    title: 'Вскрытие разных замков',
    icon: lockIcon,
    services: [
      { name: 'Вскрыть сейф любого вида', price: 'от 1000 ₽' },
      { name: 'Вскрытие калитки', price: 'от 1000 ₽' },
      { name: 'Вскрытие гаража', price: 'от 1000 ₽' }
    ]
  },
  {
    title: 'Вскрытие дверей',
    icon: doorIcon,
    services: [
      { name: 'Вскрытие входной двери', price: 'от 1000 ₽' },
      { name: 'Вскрытие межкомнатных дверей', price: 'от 1000 ₽' },
      { name: 'Вскрытие дверей', price: 'от 1000 ₽' }
    ]
  }
];

const Services = ({}) => {
  // Встроенный компонент ServicesSection
  const ServicesSection = ({ title, services, icon }) => {
    return (
      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          {icon && <img src={icon} alt="" className={styles.sectionIcon} />}
          <p className={styles.sectionTitle}>{title}</p>
        </div>
        
        <div className={styles.servicesList}>
          {services.map((service, index) => (
            <React.Fragment key={index}>
              <div className={styles.serviceItem}>
                <p className={styles.serviceName}>{service.name}</p>
                <p className={styles.servicePrice}>{service.price}</p>
              </div>
              {index < services.length - 1 && (
                <div className={styles.divider} />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <BlockHeader
        showButtons={true}
        title={"Услуги"}
      />
      <div className={styles.cards}>
        {servicesData.map((section, index) => (
          <ServicesSection
            key={index}
            title={section.title}
            services={section.services}
            icon={section.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;