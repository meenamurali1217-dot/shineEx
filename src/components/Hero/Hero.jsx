import { useNavigate } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import styles from './Hero.module.css';
import heroImage from '../../assets/images/home_hero.png';

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className={styles.heroSection} style={{ '--hero-bg': `url(${heroImage})` }}>
      <div className={`container ${styles.heroContainer}`}>
        <div className={styles.heroContent}>
          <span className={styles.heroLabel}>KG HOME CARE</span>
          <h1 className={styles.heroTitle}>
            Perfecting the<br />
            Place where<br />
            <span>Life Happens</span>
          </h1>
          <p className={styles.heroDescription}>
            Premium quality cleaning products for<br />
            a cleaner, healthier and happier home.
          </p>
          <div className={styles.heroButtons}>
            <button className="btn btn-primary" onClick={() => navigate('/products')}>
              Explore Products <FiArrowRight className={styles.btnIcon} />
            </button>
            <button className="btn btn-outline" onClick={() => navigate('/about')}>
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
