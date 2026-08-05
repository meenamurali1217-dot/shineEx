import { FiShield, FiFeather, FiWind, FiAward, FiGlobe, FiUsers } from 'react-icons/fi';
import styles from './ReasonsGrid.module.css';

const reasonsData = [
  {
    title: 'Powerful & Effective',
    description: 'Our products are specially formulated to deliver deep cleaning and visible results.',
    icon: <FiShield />
  },
  {
    title: 'Safe & Gentle',
    description: 'Made with safe ingredients that are tough on dirt and germs but gentle on hands and surfaces.',
    icon: <FiFeather />
  },
  {
    title: 'Pleasant Fragrance',
    description: 'Long-lasting, refreshing fragrances that make your home feel fresh and inviting.',
    icon: <FiWind />
  },
  {
    title: 'Premium Quality',
    description: 'High standards, better performance and consistent quality in every product.',
    icon: <FiAward />
  },
  {
    title: 'Eco-Conscious',
    description: 'Environment-friendly solutions that care for your home and the planet.',
    icon: <FiGlobe />
  },
  {
    title: 'Trusted by Thousands',
    description: 'Loved and trusted by happy homes across India for quality and reliability.',
    icon: <FiUsers />
  }
];

const ReasonsGrid = () => {
  return (
    <section className={styles.reasonsSection}>
      <div className={`container`}>
        
        <div className="section-header">
          <span className="section-label">WHY CHOOSE SHINEEX?</span>
          <h2 className="section-title">
            <span>Reasons to Choose ShineEx</span>
          </h2>
        </div>
        
        <div className={styles.gridContainer}>
          {reasonsData.map((reason, index) => (
            <div key={index} className={styles.reasonCard}>
              <div className={styles.iconContainer}>
                {reason.icon}
              </div>
              <div className={styles.content}>
                <h4 className={styles.title}>{reason.title}</h4>
                <p className={styles.description}>{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default ReasonsGrid;
