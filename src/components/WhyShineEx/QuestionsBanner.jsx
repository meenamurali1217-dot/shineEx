import { useNavigate } from 'react-router-dom';
import { FiHeadphones, FiArrowRight } from 'react-icons/fi';
import styles from './QuestionsBanner.module.css';

const QuestionsBanner = () => {
  const navigate = useNavigate();
  return (
    <section className={styles.questionsSection}>
      <div className={`container`}>
        <div className={styles.bannerContainer}>
          <div className={styles.bannerLeft}>
            <div className={styles.iconContainer}>
              <FiHeadphones />
            </div>
            <div className={styles.content}>
              <h3 className={styles.title}>Have Questions?</h3>
              <p className={styles.subtitle}>Our team is here to help you choose the best products for your needs.</p>
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

export default QuestionsBanner;
