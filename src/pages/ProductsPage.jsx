import { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import ProductsHero from '../components/ProductsPage/ProductsHero';
import CategoryTabs from '../components/ProductsPage/CategoryTabs';
import ProductCategorySection from '../components/ProductsPage/ProductCategorySection';
import HousekeepingMaterialsGrid from '../components/ProductsPage/HousekeepingMaterialsGrid';
import ProductHighlights from '../components/ProductsPage/ProductHighlights';
import IndustriesServed from '../components/ProductsPage/IndustriesServed';
import ProductHelpBanner from '../components/ProductsPage/ProductHelpBanner';
import Footer from '../components/Footer/Footer';
import { productCategories, housekeepingMaterials } from '../data/products';

const ProductsPage = () => {
  const [activeTab, setActiveTab] = useState('All Products');

  // Filter categories based on active tab
  const categoriesToShow = activeTab === 'All Products' 
    ? productCategories 
    : productCategories.filter(c => c.category === activeTab);

  // Determine if Housekeeping Materials should be shown
  const showHousekeeping = activeTab === 'All Products' || activeTab === 'Housekeeping Materials';

  return (
    <>
      <Navbar />
      <main>
        <ProductsHero />
        
        <CategoryTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        
        <section className="py-20 bg-white">
          <div className="container">
            <div className="flex flex-wrap gap-x-8 gap-y-12">
              {categoriesToShow.map((categoryData, index) => (
                <ProductCategorySection 
                  key={index} 
                  category={categoryData.category} 
                  items={categoryData.items} 
                />
              ))}
            </div>
            
            {showHousekeeping && (
              <div className="mt-16">
                <HousekeepingMaterialsGrid items={housekeepingMaterials} />
              </div>
            )}
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
