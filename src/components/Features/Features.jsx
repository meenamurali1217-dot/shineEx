import { FiShield, FiWind, FiAward, FiHeart, FiSun, FiStar } from 'react-icons/fi';
import { features } from '../../data/products';
import styles from './Features.module.css';

const iconMap = {
  'Safe & Effective': <FiShield />,
  'Pleasant Fragrance': <FiWind />,
  'Premium Quality': <FiAward />
};

const bottomIconMap = {
  'Safe & Effective': <FiShield />,
  'Pleasant Fragrance': <FiSun />,
  'Premium Quality': <FiStar />
};

const Features = () => {
  return (
    <section className={styles.featuresSection}>
      <div className={`container ${styles.featuresContainer}`}>
        {features.map((feature) => (
          <div key={feature.id} className={styles.featureCard}>
            
            <div className={styles.iconOuter}>
              <div className={styles.iconContainer}>
                {iconMap[feature.title]}
              </div>
            </div>
            
            <h3 className={styles.featureTitle}>{feature.title}</h3>
            <div className={styles.divider}></div>
            <p className={styles.featureDescription}>{feature.description}</p>
            
            <div className={styles.bottomIcon}>
              {bottomIconMap[feature.title]}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
