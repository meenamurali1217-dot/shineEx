import styles from './CategoryTabs.module.css';

const tabs = [
  'All Products',
  'Floor Care',
  'Air Care',
  'Surface Care',
  'Toilet Care',
  'Personal Care',
  'Specialty Products',
  'Housekeeping Materials'
];

const CategoryTabs = ({ activeTab, setActiveTab }) => {
  return (
    <section className={styles.tabsSection}>
      <div className={`container`}>
        <div className={styles.tabsContainer}>
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`${styles.tabBtn} ${activeTab === tab ? styles.active : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryTabs;
