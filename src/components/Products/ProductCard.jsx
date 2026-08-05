import { useNavigate } from 'react-router-dom';
import styles from './ProductCard.module.css';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={product.image} alt={product.name} className={styles.image} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{product.name}</h3>
        <button className={`btn btn-primary ${styles.viewBtn}`} onClick={() => navigate('/products')}>
          View Products
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
