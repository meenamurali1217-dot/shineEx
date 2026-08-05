import { useNavigate } from 'react-router-dom';
import { FiHeadphones, FiArrowRight } from 'react-icons/fi';
import styles from './HelpBanner.module.css';

const HelpBanner = () => {
  const navigate = useNavigate();
  return (
    <section className={styles.helpSection}>
      <div className={`container`}>
        <div className={styles.helpContainer}>
          <div className={styles.helpLeft}>
            <div className={styles.iconContainer}>
              <FiHeadphones />
            </div>
            <div className={styles.content}>
              <h3 className={styles.title}>We're Here to Help</h3>
              <p className={styles.subtitle}>Have questions or need assistance? Our team is always ready to help you.</p>
            </div>
          </div>
          <button className="btn btn-primary" onClick={() => navigate('/contact')}>
            Contact Us <FiArrowRight className={styles.btnIcon} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HelpBanner;
