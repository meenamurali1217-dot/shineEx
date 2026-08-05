import { useNavigate } from 'react-router-dom';
import { FiHeadphones, FiPhoneCall } from 'react-icons/fi';
import styles from './CTA.module.css';

const CTA = () => {
  const navigate = useNavigate();
  return (
    <section className={styles.ctaSection}>
      <div className="container">
        <div className={styles.ctaContainer}>
          
          <div className={styles.ctaLeft}>
            <div className={styles.iconWrapper}>
              <FiHeadphones />
            </div>
            <div className={styles.textContent}>
              <h3 className={styles.title}>Need Help?</h3>
              <p className={styles.subtitle}>Our team is here to assist you.</p>
            </div>
          </div>

          <div className={styles.ctaRight}>
            <div className={styles.contactInfo}>
              <div className={styles.iconWrapper}>
                <FiPhoneCall className={styles.phoneIcon} />
              </div>
              <div className={styles.phoneDetails}>
                <span className={styles.phoneLabel}>Customer Care</span>
                <a href="tel:9494525654" className={styles.phoneNumber}>9494525654</a>
              </div>
            </div>
            <button className={`btn ${styles.contactBtn}`} onClick={() => navigate('/contact')}>
              Contact Us
            </button>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default CTA;
