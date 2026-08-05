import { useNavigate } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import styles from './AboutHero.module.css';
import aboutHeroImg from '../../assets/images/about_hero.png';

const AboutHero = () => {
  const navigate = useNavigate();
  return (
    <section className={styles.aboutHeroSection} style={{ '--hero-bg': `url(${aboutHeroImg})` }}>
      <div className={`container ${styles.heroContainer}`}>
        <div className={styles.content}>
          <span className="section-label">ABOUT US</span>
          <h1 className={styles.title}>
            Dedicated to Making<br />
            Every Home <span>Cleaner,<br />
            Healthier & Happier</span>
          </h1>
          <p className={styles.description}>
            ShineEx by KG Home Care is a range of high performance cleaning products designed to make your home cleaner, fresher and healthier every day.
          </p>
          <button className="btn btn-primary" onClick={() => navigate('/products')}>
            Our Products <FiArrowRight className={styles.btnIcon} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
