import { useNavigate } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { 
  FiCheckCircle, 
  FiHeart, 
  FiDroplet, 
  FiWind, 
  FiShield, 
  FiGlobe 
} from 'react-icons/fi';
import { benefits } from '../../data/products';
import styles from './WhyChoose.module.css';
import interiorImage from '../../assets/images/interior_living_room.jpg';

const iconMap = {
  'Effective Cleaning': <FiCheckCircle />,
  'Multi-Purpose': <FiHeart />,
  'Safe for Family': <FiShield />,
  'Trusted Quality': <FiCheckCircle />,
  'Pleasant Fragrance': <FiWind />,
  'Eco-Conscious': <FiGlobe />
};

const WhyChoose = () => {
  const navigate = useNavigate();
  return (
    <section id="why-shineex" className={styles.whyChooseSection}>
      <div className={`container ${styles.whyContainer}`}>
        
        <div className={styles.imageColumn}>
          <div className={styles.imageWrapper}>
            <img src={interiorImage} alt="Clean Living Room" className={styles.interiorImage} />
            <div className={styles.trustBadge}>
              <div className={styles.badgeContent}>
                <span className={styles.badgeText}>Trusted by<br/>Thousands of<br/>Happy Homes</span>
                <div className={styles.badgeUsers}>
                  <div className={styles.userIcon}></div>
                  <div className={styles.userIcon}></div>
                  <div className={styles.userIcon}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.contentColumn}>
          <span className={styles.label}>WHY CHOOSE SHINEEX?</span>
          <h2 className={styles.title}>
            Quality You Can Trust,<br />
            Care You Can Feel.
          </h2>
          
          <div className={styles.benefitsGrid}>
            {benefits.map((benefit) => (
              <div key={benefit.id} className={styles.benefitItem}>
                <div className={styles.iconContainer}>
                  {iconMap[benefit.title] || <FiCheckCircle />}
                </div>
                <div className={styles.benefitContent}>
                  <h4 className={styles.benefitTitle}>{benefit.title}</h4>
                  <p className={styles.benefitDescription}>{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <button className={`btn btn-primary ${styles.aboutBtn}`} onClick={() => navigate('/about')}>
            About Us <FiArrowRight className={styles.btnIcon} />
          </button>
        </div>
        
      </div>
    </section>
  );
};

export default WhyChoose;
