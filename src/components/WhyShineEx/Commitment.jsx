import { FiCheckCircle } from 'react-icons/fi';
import styles from './Commitment.module.css';
import leafImage from '../../assets/images/green_leaf_water.jpg';

const Commitment = () => {
  return (
    <section className={styles.commitmentSection}>
      <div className={`container ${styles.commitmentContainer}`}>
        
        <div className={styles.contentColumn}>
          <span className="section-label">OUR COMMITMENT</span>
          <h2 className={styles.title}>
            Committed to a <span>Cleaner,<br />
            Healthier Tomorrow</span>
          </h2>
          
          <div className={styles.textContent}>
            <p>
              We are committed to improving everyday life by providing cleaning solutions that are effective, safe and sustainable. ShineEx is not just a product, it's our promise of care.
            </p>
          </div>
          
          <ul className={styles.checklist}>
            <li>
              <FiCheckCircle className={styles.checkIcon} />
              <span>Continuous innovation for better cleaning</span>
            </li>
            <li>
              <FiCheckCircle className={styles.checkIcon} />
              <span>Sustainable practices for a better future</span>
            </li>
            <li>
              <FiCheckCircle className={styles.checkIcon} />
              <span>Building long-lasting relationships with our customers</span>
            </li>
            <li>
              <FiCheckCircle className={styles.checkIcon} />
              <span>Spreading hygiene, health and happiness</span>
            </li>
          </ul>
        </div>

        <div className={styles.imageColumn}>
          <div className={styles.imageWrapper}>
            <img src={leafImage} alt="Green leaf with water" className={styles.leafImage} />
            <div className={styles.badge}>
              <div className={styles.badgeContent}>
                <span className={styles.badgeText}>Clean Home<br/>Healthy Home</span>
                <div className={styles.badgeStars}>✦ ✦</div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Commitment;
