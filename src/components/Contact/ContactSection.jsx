import { FiMapPin, FiPhoneCall, FiMail, FiShare2, FiFacebook, FiInstagram, FiYoutube, FiMessageCircle, FiSend, FiClock } from 'react-icons/fi';
import styles from './ContactSection.module.css';
import mapPlaceholder from '../../assets/images/map_placeholder.jpg';

const ContactSection = () => {
  return (
    <section className={styles.contactMain}>
      <div className={`container ${styles.contactGrid}`}>
        
        {/* Left Column: Get In Touch */}
        <div className={styles.leftColumn}>
          <h2 className={styles.title}>Get In Touch</h2>
          
          <div className={styles.infoCards}>
            <div className={styles.infoCard}>
              <div className={styles.iconContainer}><FiMapPin /></div>
              <div className={styles.infoContent}>
                <h4>Our Location</h4>
                <p>KG Home Care<br/>Plot No 344, Kanakadurga Colony,<br/>Kuntloor, Hayathnagar,<br/>Hyderabad, Telangana.</p>
              </div>
            </div>
            
            <div className={styles.infoCard}>
              <div className={styles.iconContainer}><FiPhoneCall /></div>
              <div className={styles.infoContent}>
                <h4>Customer Care</h4>
                <a href="tel:9494525654" className={styles.highlight}>9494525654</a>
                <p>Mon - Sat: 9:00 AM to 6:00 PM</p>
              </div>
            </div>
            
            <div className={styles.infoCard}>
              <div className={styles.iconContainer}><FiMail /></div>
              <div className={styles.infoContent}>
                <h4>Email Us</h4>
                <a href="mailto:care@kghomecareindia.com" className={styles.highlight}>care@kghomecareindia.com</a>
                <p>We'll respond within 24 hours</p>
              </div>
            </div>
            
            <div className={styles.infoCard}>
              <div className={styles.iconContainer}><FiShare2 /></div>
              <div className={styles.infoContent}>
                <h4>Follow Us</h4>
                <div className={styles.socialLinks}>
                  <a href="#" className={styles.socialIcon}><FiFacebook /></a>
                  <a href="#" className={styles.socialIcon}><FiInstagram /></a>
                  <a href="#" className={styles.socialIcon}><FiYoutube /></a>
                  <a href="#" className={styles.socialIcon}><FiMessageCircle /></a>
                </div>
              </div>
            </div>
          </div>
          
          <div className={styles.mapContainer}>
            <img src={mapPlaceholder} alt="Location Map" className={styles.mapImg} />
            <div className={styles.mapPinOverlay}>
              <div className={styles.pinCard}>
                <strong>KG Home Care</strong>
                <p>Plot No 344, Kanakadurga Colony,<br/>Kuntloor, Hayathnagar,<br/>Hyderabad, Telangana.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Send Us a Message */}
        <div className={styles.rightColumn}>
          <div className={styles.formCard}>
            <h2 className={styles.title}>Send Us a Message</h2>
            <p className={styles.subtitle}>Fill in the form below and our team will get back to you.</p>
            
            <form className={styles.contactForm}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label>Your Name <span>*</span></label>
                  <input type="text" placeholder="Enter your full name" required />
                </div>
                <div className={styles.formGroup}>
                  <label>Phone Number <span>*</span></label>
                  <input type="tel" placeholder="Enter your phone number" required />
                </div>
              </div>
              
              <div className={styles.formGroup}>
                <label>Email Address <span>*</span></label>
                <input type="email" placeholder="Enter your email address" required />
              </div>
              
              <div className={styles.formGroup}>
                <label>Subject <span>*</span></label>
                <input type="text" placeholder="How can we help you?" required />
              </div>
              
              <div className={styles.formGroup}>
                <label>Message <span>*</span></label>
                <textarea placeholder="Type your message here..." rows="6" required></textarea>
              </div>
              
              <button type="submit" className={`btn btn-primary ${styles.submitBtn}`}>
                <FiSend /> Send Message
              </button>
            </form>
          </div>
          
          <div className={styles.businessHours}>
            <div className={styles.bhIcon}><FiClock /></div>
            <div className={styles.bhContent}>
              <h4>Business Hours</h4>
              <p>Monday - Saturday: 9:00 AM - 6:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default ContactSection;
