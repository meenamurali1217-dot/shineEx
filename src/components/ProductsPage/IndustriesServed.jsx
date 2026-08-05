import { FiHome, FiGrid, FiCrosshair, FiCoffee, FiBookOpen, FiNavigation, FiMonitor, FiBriefcase } from 'react-icons/fi';
import styles from './IndustriesServed.module.css';

const industries = [
  { name: 'Homes', icon: <FiHome /> },
  { name: 'Apartments', icon: <FiGrid /> },
  { name: 'Hospitals', icon: <FiCrosshair /> },
  { name: 'Hotels', icon: <FiCoffee /> },
  { name: 'Schools', icon: <FiBookOpen /> },
  { name: 'Restaurants', icon: <FiNavigation /> },
  { name: 'Offices', icon: <FiMonitor /> },
  { name: 'Commercial Buildings', icon: <FiBriefcase /> }
];

const IndustriesServed = () => {
  return (
    <section className={styles.industriesSection}>
      <div className={`container`}>
        <div className="section-header">
          <h2 className="section-title">Industries We Serve</h2>
        </div>
        
        <div className={styles.industriesGrid}>
          {industries.map((industry, index) => (
            <div key={index} className={styles.industryItem}>
              <div className={styles.iconContainer}>
                {industry.icon}
              </div>
              <span className={styles.industryName}>{industry.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesServed;
