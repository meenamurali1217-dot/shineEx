import { Link } from 'react-router-dom';
import { FiFacebook, FiInstagram, FiYoutube, FiMessageCircle, FiMapPin, FiMail, FiPhone } from 'react-icons/fi';
import styles from './Footer.module.css';

import logoImage from '../../assets/images/logo.png';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerTop}`}>
        <div className={styles.footerGrid}>
          
          <div className={styles.companyInfo}>
            <Link to="/" className={styles.logo}>
              <img src={logoImage} alt="ShineEx Logo" className={styles.logoImg} style={{ height: '70px', width: 'auto', marginBottom: '16px', display: 'block' }} />
            </Link>
            <p className={styles.description}>
              ShineEx is a range of high performance cleaning products by KG Home Care, designed to make your home cleaner, fresher and healthier.
            </p>
            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialIcon}><FiFacebook /></a>
              <a href="#" className={styles.socialIcon}><FiInstagram /></a>
              <a href="#" className={styles.socialIcon}><FiYoutube /></a>
              <a href="#" className={styles.socialIcon}><FiMessageCircle /></a>
            </div>
          </div>

          <div className={styles.footerLinks}>
            <h4 className={styles.columnTitle}>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/why-shineex">Why ShineEx</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          <div className={styles.footerLinks}>
            <h4 className={styles.columnTitle}>Our Products</h4>
            <ul>
              <li><Link to="/products/floor-cleaners">Floor Cleaners</Link></li>
              <li><Link to="/products/air-fresheners">Air Fresheners</Link></li>
              <li><Link to="/products/surface-cleaners">Surface Cleaners</Link></li>
              <li><Link to="/products/hand-wash">Hand Wash</Link></li>
              <li><Link to="/products/detergent-liquid">Detergent Liquid</Link></li>
              <li><Link to="/products">Phenyl & More</Link></li>
            </ul>
          </div>

          <div className={styles.footerContact}>
            <h4 className={styles.columnTitle}>Contact Us</h4>
            <div className={styles.contactItem}>
              <FiMapPin className={styles.contactIcon} />
              <div>
                <strong>KG Home Care</strong>
                <p>Plot No 344, Kanakdurga Colony,<br />Kuntloor, Hayathnagar,<br />Hyderabad, Telangana.</p>
              </div>
            </div>
            <div className={styles.contactItem}>
              <FiMail className={styles.contactIcon} />
              <p>Email: <a href="mailto:care@kghomecareindia.com">care@kghomecareindia.com</a></p>
            </div>
            <div className={styles.contactItem}>
              <FiPhone className={styles.contactIcon} />
              <p>Customer Care: <a href="tel:9494525654">9494525654</a></p>
            </div>
          </div>

        </div>
      </div>
      
      <div className={styles.footerBottom}>
        <div className={`container ${styles.bottomContainer}`}>
          <p>&copy; 2024 KG Home Care. All Rights Reserved.</p>
          <div className={styles.bottomLinks}>
            <Link to="/privacy">Privacy Policy</Link>
            <span className={styles.divider}>|</span>
            <Link to="/terms">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
