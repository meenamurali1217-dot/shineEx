import { FiClock, FiShield, FiUsers } from 'react-icons/fi';
import styles from './ContactHero.module.css';
import contactHeroImg from '../../assets/images/contact_hero.png';

const ContactHero = () => {
  return (
    <section className={styles.contactHeroSection} style={{ '--hero-bg': `url(${contactHeroImg})` }}>
      <div className={`container ${styles.heroContainer}`}>
        
        <div className={styles.content}>
          <span className="section-label">CONTACT US</span>
          <h1 className={styles.title}>
            We're Here to Help<br />
            You Keep Your Home<br />
            <span>Clean & Healthy</span>
          </h1>
          <p className={styles.description}>
            Have questions about our products or need assistance? We'd love to hear from you. Get in touch with our team and we'll get back to you as soon as possible.
          </p>
          
          <div className={styles.features}>
            <div className={styles.featureItem}>
              <div className={styles.iconContainer}><FiClock /></div>
              <div>
                <h4>Quick Response</h4>
                <p>We reply as soon<br/>as possible</p>
              </div>
            </div>
            
            <div className={styles.featureItem}>
              <div className={styles.iconContainer}><FiShield /></div>
              <div>
                <h4>Trusted Support</h4>
                <p>Get help from our<br/>friendly team</p>
              </div>
            </div>
            
            <div className={styles.featureItem}>
              <div className={styles.iconContainer}><FiUsers /></div>
              <div>
                <h4>Customer First</h4>
                <p>Your satisfaction is<br/>our priority</p>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default ContactHero;
