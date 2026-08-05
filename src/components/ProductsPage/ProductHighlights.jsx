import { FiBriefcase, FiGlobe, FiWind, FiShield, FiAward, FiHexagon } from 'react-icons/fi';
import styles from './ProductHighlights.module.css';

const ProductHighlights = () => {
  return (
    <section className={styles.highlightsSection}>
      <div className={`container`}>
        <div className={styles.highlightsContainer}>
          
          <div className={styles.highlightItem}>
            <div className={styles.iconContainer}>
              <FiHexagon className={styles.hexagonBg} />
              <FiBriefcase className={styles.innerIcon} />
            </div>
            <div className={styles.content}>
              <h4>Commercial Grade</h4>
              <p>Powerful cleaning for home & business</p>
            </div>
          </div>
          
          <div className={styles.highlightItem}>
            <div className={styles.iconContainer}>
              <FiHexagon className={styles.hexagonBg} />
              <FiGlobe className={styles.innerIcon} />
            </div>
            <div className={styles.content}>
              <h4>Eco Friendly</h4>
              <p>Environment conscious and sustainable</p>
            </div>
          </div>
          
          <div className={styles.highlightItem}>
            <div className={styles.iconContainer}>
              <FiHexagon className={styles.hexagonBg} />
              <FiWind className={styles.innerIcon} />
            </div>
            <div className={styles.content}>
              <h4>Pleasant Fragrance</h4>
              <p>Long lasting refreshing scent</p>
            </div>
          </div>
          
          <div className={styles.highlightItem}>
            <div className={styles.iconContainer}>
              <FiHexagon className={styles.hexagonBg} />
              <FiShield className={styles.innerIcon} />
            </div>
            <div className={styles.content}>
              <h4>Safe Formulation</h4>
              <p>Gentle on hands and safe to use</p>
            </div>
          </div>
          
          <div className={styles.highlightItem}>
            <div className={styles.iconContainer}>
              <FiHexagon className={styles.hexagonBg} />
              <FiAward className={styles.innerIcon} />
            </div>
            <div className={styles.content}>
              <h4>Trusted Quality</h4>
              <p>Tested for quality and consistent results</p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ProductHighlights;
