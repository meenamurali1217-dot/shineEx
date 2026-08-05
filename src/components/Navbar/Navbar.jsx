import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FiMenu, FiX, FiChevronDown, FiPhoneCall } from 'react-icons/fi';
import styles from './Navbar.module.css';

import logoImage from '../../assets/images/logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.navContainer}`}>
        <Link to="/" className={styles.logo}>
          <img src={logoImage} alt="ShineEx Logo" className={styles.logoImg} style={{ height: '65px', width: 'auto' }} />
        </Link>

        <div className={`${styles.navLinks} ${mobileMenuOpen ? styles.active : ''}`}>
          <Link to="/" className={`${styles.navLink} ${location.pathname === '/' ? styles.activeLink : ''}`}>Home</Link>
          <Link to="/about" className={`${styles.navLink} ${location.pathname === '/about' ? styles.activeLink : ''}`}>About Us</Link>
          <div className={styles.dropdown}>
            <Link to="/products" className={`${styles.navLink} ${location.pathname === '/products' ? styles.activeLink : ''}`}>
              Products
            </Link>
          </div>
          <Link to="/why-shineex" className={`${styles.navLink} ${location.pathname === '/why-shineex' ? styles.activeLink : ''}`}>Why ShineEx</Link>
          <Link to="/contact" className={`${styles.navLink} ${location.pathname === '/contact' ? styles.activeLink : ''}`}>Contact Us</Link>
          
          <button className={`btn btn-primary ${styles.mobileCta}`} onClick={() => navigate('/contact')}>
            <FiPhoneCall className={styles.icon} /> Contact Us
          </button>
        </div>

        <button className={`btn btn-primary ${styles.desktopCta}`} onClick={() => navigate('/contact')}>
          <FiPhoneCall className={styles.icon} /> Contact Us
        </button>

        <button 
          className={styles.mobileMenuBtn}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
