import { Link } from 'react-router-dom';
import styles from './ProductCategorySection.module.css';

const ProductCategorySection = ({ category, items }) => {
  return (
    <div className={styles.categorySection}>
      <div className={styles.sectionHeader}>
        <h3 className={styles.categoryTitle}>{category.toUpperCase()}</h3>
        <Link to={`/products`} className={styles.viewAll}>View All</Link>
      </div>
      
      <div className={styles.productGrid}>
        {items.map((item) => (
          <div key={item.id} className={styles.productCard}>
            <div className={styles.imageContainer}>
              <img src={item.image} alt={item.name} className={styles.productImg} />
            </div>
            <div className={styles.productInfo}>
              <h4 className={styles.productName}>{item.name}</h4>
              <span className={styles.productQuantity}>{item.quantity}</span>
            </div>
          </div>
        ))}
        
        {/* Available Sizes Card (only for Home Care category) */}
        {category === 'Home Care (500ml & 1000ml)' && (
          <div className={`${styles.productCard} ${styles.sizesCard}`}>
            <h4 className={styles.sizesTitle}>Available Sizes</h4>
            <ul className={styles.sizesList}>
              <li>
                <div className={styles.sizeIconWrapper} style={{backgroundColor: '#e0e7ff'}}>
                   <div className={styles.sizeBottle} style={{backgroundColor: '#4f46e5'}}></div>
                </div>
                <span>1000 ml</span>
              </li>
              <li>
                <div className={styles.sizeIconWrapper} style={{backgroundColor: '#dcfce7'}}>
                   <div className={styles.sizeBottle} style={{backgroundColor: '#16a34a'}}></div>
                </div>
                <span>500 ml</span>
              </li>
              <li>
                <div className={styles.sizeIconWrapper} style={{backgroundColor: '#fce7f3'}}>
                   <div className={styles.sizeBottle} style={{backgroundColor: '#db2777'}}></div>
                </div>
                <span>5 Ltr</span>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCategorySection;
