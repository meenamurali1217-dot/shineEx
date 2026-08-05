import { FiUsers, FiShoppingBag, FiAward, FiFeather } from 'react-icons/fi';
import styles from './StatsBanner.module.css';

const statsData = [
  {
    value: '10K+',
    label: 'Happy Customers',
    icon: <FiUsers />
  },
  {
    value: '15+',
    label: 'Quality Products',
    icon: <FiShoppingBag />
  },
  {
    value: '100%',
    label: 'Quality Assured',
    icon: <FiAward />
  },
  {
    value: 'Eco-Friendly',
    label: 'Better for You & Environment',
    icon: <FiFeather />
  }
];

const StatsBanner = () => {
  return (
    <section className={styles.statsSection}>
      <div className={`container`}>
        <div className={styles.statsContainer}>
          {statsData.map((stat, index) => (
            <div key={index} className={styles.statItem}>
              <div className={styles.iconContainer}>
                {stat.icon}
              </div>
              <div className={styles.content}>
                <h3 className={styles.value}>{stat.value}</h3>
                <p className={styles.label}>{stat.label}</p>
              </div>
              {index < statsData.length - 1 && (
                <div className={styles.divider}></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBanner;
