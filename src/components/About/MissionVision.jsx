import { FiTarget, FiEye } from 'react-icons/fi';
import styles from './MissionVision.module.css';

const MissionVision = () => {
  return (
    <section className={styles.missionVisionSection}>
      <div className="container">
        <div className={styles.mvContainer}>
          
          <div className={styles.card}>
            <div className={styles.iconContainer}>
              <FiTarget />
            </div>
            <div className={styles.content}>
              <h3 className={styles.title}>Our Mission</h3>
              <p className={styles.description}>
                To provide high-quality, effective and eco-friendly cleaning solutions that ensure a clean, healthy and safe environment for every home.
              </p>
            </div>
          </div>
          
          <div className={styles.divider}>
            <div className={styles.dividerIcon}><FiTarget /></div>
          </div>

          <div className={styles.card}>
            <div className={styles.iconContainer}>
              <FiEye />
            </div>
            <div className={styles.content}>
              <h3 className={styles.title}>Our Vision</h3>
              <p className={styles.description}>
                To be a trusted household name in India, known for innovation, quality and care in home hygiene.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MissionVision;
