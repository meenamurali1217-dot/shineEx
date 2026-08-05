import { products } from '../../data/products';
import ProductCard from './ProductCard';
import styles from './Products.module.css';

const Products = () => {
  return (
    <section id="products" className={styles.productsSection}>
      <div className={`container`}>
        <div className="section-header">
          <span className="section-label">OUR PRODUCTS</span>
          <h2 className="section-title">
            <span>Clean Home, Healthy Home</span>
          </h2>
        </div>
        
        <div className={styles.productsGrid}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
