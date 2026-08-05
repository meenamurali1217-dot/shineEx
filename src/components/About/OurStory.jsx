import { useNavigate } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import styles from './OurStory.module.css';
import factoryImage from '../../assets/images/shineex_factory.jpg';

const OurStory = () => {
  const navigate = useNavigate();
  return (
    <section className={styles.ourStorySection}>
      <div className={`container ${styles.storyContainer}`}>
        
        <div className={styles.contentColumn}>
          <span className="section-label">OUR STORY</span>
          <h2 className={styles.title}>
            Built on Trust,<br />
            Driven by Quality
          </h2>
          
          <div className={styles.textContent}>
            <p>
              KG Home Care was founded with a simple mission - to deliver premium quality cleaning products that bring hygiene, freshness and care to every home.
            </p>
            <p>
              With advanced formulations, safe ingredients and refreshing fragrances, ShineEx products are developed to meet the needs of modern Indian households.
            </p>
            <p>
              We are committed to quality, sustainability and customer satisfaction in everything we do.
            </p>
          </div>
          
          <button className="btn btn-primary" onClick={() => navigate('/why-shineex')}>
            Why Choose ShineEx? <FiArrowRight className={styles.btnIcon} />
          </button>
        </div>

        <div className={styles.imageColumn}>
          <div className={styles.imageWrapper}>
            <img src={factoryImage} alt="ShineEx Factory" className={styles.factoryImage} />
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

export default OurStory;
