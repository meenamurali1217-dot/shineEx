import { FiHeadphones, FiPhoneCall } from 'react-icons/fi';
import styles from './AssistanceBanner.module.css';

const AssistanceBanner = () => {
  return (
    <section className={styles.assistanceSection}>
      <div className={`container`}>
        <div className={styles.bannerContainer}>
          <div className={styles.bannerLeft}>
            <div className={styles.iconContainer}>
              <FiHeadphones />
            </div>
            <div className={styles.content}>
              <h3 className={styles.title}>Need Immediate Assistance?</h3>
              <p className={styles.subtitle}>Call our customer care number for quick support.</p>
            </div>
          </div>
          
          <div className={styles.divider}></div>
          
          <div className={styles.bannerRight}>
            <div className={styles.contactDetails}>
              <span className={styles.label}>Customer Care</span>
              <span className={styles.number}>9494525654</span>
            </div>
            <a href="tel:9494525654" className={`btn ${styles.callBtn}`}>
              <FiPhoneCall /> Call Now
            </a>
          </div>
          
          <FiHeadphones className={styles.bgIcon} />
        </div>
      </div>
    </section>
  );
};

export default AssistanceBanner;
