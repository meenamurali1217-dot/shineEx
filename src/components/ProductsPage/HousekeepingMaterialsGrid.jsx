import hkDustCob from '../../assets/images/housekeeping/hk_dust_cob.jpg';
import hkRoundMop from '../../assets/images/housekeeping/hk_round_mop.jpg';
import hkDustPan from '../../assets/images/housekeeping/hk_dust_pan.jpg';
import hkMop from '../../assets/images/housekeeping/hk_mop.jpg';
import hkUrinalCake from '../../assets/images/housekeeping/hk_urinal_cake.jpg';
import hkWiper from '../../assets/images/housekeeping/hk_wiper.jpg';
import hkBrush from '../../assets/images/housekeeping/hk_brush.jpg';
import hkToiletBrush from '../../assets/images/housekeeping/hk_toilet_brush.jpg';
import hkSpray from '../../assets/images/housekeeping/hk_spray.jpg';
import hkBalls from '../../assets/images/housekeeping/hk_balls.jpg';
import styles from './HousekeepingMaterialsGrid.module.css';

const getImageForItem = (name) => {
  const n = name.toLowerCase();
  if (n.includes('dust cob')) return hkDustCob;
  if (n.includes('round mop') || n.includes('sponge mop') || n.includes('magic mop')) return hkRoundMop;
  if (n.includes('dust pan')) return hkDustPan;
  if (n.includes('mop')) return hkMop;
  if (n.includes('urinal')) return hkUrinalCake;
  if (n.includes('wiper')) return hkWiper;
  if (n.includes('brush') && !n.includes('toilet')) return hkBrush;
  if (n.includes('toilet')) return hkToiletBrush;
  if (n.includes('freshener')) return hkSpray;
  if (n.includes('balls') || n.includes('covers')) return hkBalls;
  return hkMop;
};

const HousekeepingMaterialsGrid = ({ items }) => {
  return (
    <div className={styles.categorySection}>
      <div className={styles.sectionHeader}>
        <h3 className={styles.categoryTitle}>HOUSEKEEPING MATERIALS</h3>
      </div>
      
      <div className={styles.materialsGrid}>
        {items.map((item, index) => {
          const imgSrc = getImageForItem(item.name);

          return (
            <div key={index} className={styles.materialCard}>
              <div className={styles.imageContainer}>
                <img src={imgSrc} alt={item.name} className={styles.materialImg} />
              </div>
              <h4 className={styles.materialName}>{item.name}</h4>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default HousekeepingMaterialsGrid;
