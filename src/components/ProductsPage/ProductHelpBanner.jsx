import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import styles from './ProductHelpBanner.module.css';
import productGroup from '../../assets/images/product_group_new.png'; // Using new product group image

const ProductHelpBanner = () => {
  return (
    <section className={styles.helpSection}>
      <div className={`container`}>
        <div className={styles.bannerContainer}>
          
          <div className={styles.imageColumn}>
            <div className={styles.imageWrapper}>
               <img src={productGroup} alt="ShineEx Products" className={styles.productImg} />
            </div>
          </div>
          
          <div className={styles.contentColumn}>
            <h3 className={styles.title}>Need Help Choosing the Right Product?</h3>
            <p className={styles.subtitle}>Our team is here to help you find the perfect solution for your cleaning needs.</p>
            <Link to="/contact" className={`btn ${styles.contactBtn}`}>
              Contact Us <FiArrowRight className={styles.btnIcon} />
            </Link>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ProductHelpBanner;
