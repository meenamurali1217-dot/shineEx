import Navbar from '../components/Navbar/Navbar';
import ProductsHero from '../components/ProductsPage/ProductsHero';
import ProductCategorySection from '../components/ProductsPage/ProductCategorySection';
import HousekeepingMaterialsGrid from '../components/ProductsPage/HousekeepingMaterialsGrid';
import ProductHighlights from '../components/ProductsPage/ProductHighlights';
import IndustriesServed from '../components/ProductsPage/IndustriesServed';
import ProductHelpBanner from '../components/ProductsPage/ProductHelpBanner';
import Footer from '../components/Footer/Footer';
import { productCategories, housekeepingMaterials } from '../data/products';
import categoryStyles from '../components/ProductsPage/ProductCategorySection.module.css';

const ProductsPage = () => {
  return (
    <>
      <Navbar />
      <main>
        <ProductsHero />
        
        <section className="py-20 bg-white">
          <div className="container">
            <div style={{ textAlign: 'center', marginTop: '2rem', marginBottom: '3rem' }}>
              <h2 style={{ fontSize: '2.2rem', fontWeight: '800', color: 'var(--primary-color)', textTransform: 'uppercase' }}>Our Products</h2>
            </div>
            
            <div className={categoryStyles.productGrid}>
              {productCategories
                .filter(c => c.category !== 'Home Care (500ml & 1000ml)')
                .map((categoryData, index) => (
                <ProductCategorySection 
                  key={index} 
                  category={categoryData.category} 
                  items={categoryData.items} 
                />
              ))}
            </div>
            
            <div className="mt-16">
              <div style={{ textAlign: 'center', marginTop: '4rem', marginBottom: '2rem' }}>
                <h3 className={categoryStyles.categoryTitle} style={{ fontSize: '1.8rem' }}>HOME CARE (500ML & 1000ML)</h3>
              </div>
              <div className={categoryStyles.productGrid6Cols}>
                {productCategories
                  .filter(c => c.category === 'Home Care (500ml & 1000ml)')
                  .map((categoryData, index) => (
                  <ProductCategorySection 
                    key={index} 
                    category={categoryData.category} 
                    items={categoryData.items} 
                  />
                ))}
              </div>
            </div>
            
            <div className="mt-16">
              <HousekeepingMaterialsGrid items={housekeepingMaterials} />
            </div>
          </div>
        </section>

        <ProductHighlights />
        <IndustriesServed />
        <ProductHelpBanner />
      </main>
      <Footer />
    </>
  );
};

export default ProductsPage;
