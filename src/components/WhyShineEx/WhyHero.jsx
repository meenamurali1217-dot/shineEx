import { FiShield, FiFeather, FiActivity, FiHeart } from 'react-icons/fi';
import styles from './WhyHero.module.css';
import whyHeroImg from '../../assets/images/why_shinefix_hero.png';

const WhyHero = () => {
  return (
    <section className={styles.whyHeroSection} style={{ backgroundImage: `url(${whyHeroImg})` }}>
      <div className={`container ${styles.heroContainer}`}>
        
        <div className={styles.content}>
          <span className="section-label">WHY SHINEEX</span>
          <h1 className={styles.title}>
            More Than Clean,<br />
            It's <span>Peace of Mind</span>
          </h1>
          <p className={styles.description}>
            At ShineEx, we go beyond cleaning. We create powerful, safe and reliable solutions that bring hygiene, freshness and happiness to every home.
          </p>
          
          <div className={styles.features}>
            <div className={styles.featureItem}>
              <div className={styles.iconContainer}><FiShield /></div>
              <h4>Trusted<br/>Quality</h4>
              <p>High performance products you can rely on.</p>
            </div>
            
            <div className={styles.featureItem}>
              <div className={styles.iconContainer}><FiFeather /></div>
              <h4>Safe for<br/>Every Home</h4>
              <p>Gentle on hands, tough on germs.</p>
            </div>
            
            <div className={styles.featureItem}>
              <div className={styles.iconContainer}><FiActivity /></div>
              <h4>Advanced<br/>Formulations</h4>
              <p>Effective ingredients for superior cleaning results.</p>
            </div>

            <div className={styles.featureItem}>
              <div className={styles.iconContainer}><FiHeart /></div>
              <h4>Customer<br/>First</h4>
              <p>Your satisfaction is our top priority.</p>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default WhyHero;
