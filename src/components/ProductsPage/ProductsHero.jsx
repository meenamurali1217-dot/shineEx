import { FiShield, FiAward, FiWind, FiHeart } from 'react-icons/fi';
import styles from './ProductsHero.module.css';
import productHeroImg from '../../assets/images/product_hero.png';

const ProductsHero = () => {
  return (
    <section className={styles.productsHeroSection} style={{ '--hero-bg': `url(${productHeroImg})` }}>
      <div className={`container ${styles.heroContainer}`}>
        
        <div className={styles.content}>
          <span className="section-label">OUR PRODUCTS</span>
          <h1 className={styles.title}>
            Powerful Cleaning<br />
            Solutions For<br />
            <span>Every Home & Business</span>
          </h1>
          <p className={styles.description}>
            From floor to fabric, hand to home - ShineEx brings you a complete range of cleaning products for a healthier, cleaner and happier lifestyle.
          </p>
          
          <div className={styles.features}>
            <div className={styles.featureItem}>
              <div className={styles.iconContainer}><FiShield /></div>
              <h4>Safe & Effective</h4>
              <p>Gentle on hands<br/>tough on dirt</p>
            </div>
            
            <div className={styles.featureItem}>
              <div className={styles.iconContainer}><FiAward /></div>
              <h4>Premium Quality</h4>
              <p>Advanced formula<br/>for superior results</p>
            </div>
            
            <div className={styles.featureItem}>
              <div className={styles.iconContainer}><FiWind /></div>
              <h4>Pleasant Fragrance</h4>
              <p>Long lasting<br/>freshness</p>
            </div>

            <div className={styles.featureItem}>
              <div className={styles.iconContainer}><FiHeart /></div>
              <h4>Trusted by Thousands</h4>
              <p>Loved by homes<br/>across India</p>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default ProductsHero;
