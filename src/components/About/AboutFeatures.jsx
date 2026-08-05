import { FiShield, FiFeather, FiAward, FiUsers } from 'react-icons/fi';
import styles from './AboutFeatures.module.css';

const featuresData = [
  {
    title: 'Safe & Effective',
    description: 'Trusted formulas for your family',
    icon: <FiShield />
  },
  {
    title: 'Pleasant Fragrance',
    description: 'Long lasting freshness in every use',
    icon: <FiFeather />
  },
  {
    title: 'Premium Quality',
    description: 'High performance you can rely on',
    icon: <FiAward />
  },
  {
    title: 'Trusted by Thousands',
    description: 'Loved by happy homes across India',
    icon: <FiUsers />
  }
];

const AboutFeatures = () => {
  return (
    <section className={styles.aboutFeaturesSection}>
      <div className={`container ${styles.featuresContainer}`}>
        {featuresData.map((feature, index) => (
          <div key={index} className={styles.featureWrapper}>
            <div className={styles.featureItem}>
              <div className={styles.iconContainer}>
                {feature.icon}
              </div>
              <div className={styles.content}>
                <h4 className={styles.title}>{feature.title}</h4>
                <p className={styles.description}>{feature.description}</p>
              </div>
            </div>
            {index < featuresData.length - 1 && (
              <div className={styles.divider}></div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutFeatures;
