import imgAirFreshenerSpray from '../../assets/images/housekeeping/air_freshener_spray.png';
import imgDryMop from '../../assets/images/housekeeping/dry_mop.png';
import imgDustCobWithStick from '../../assets/images/housekeeping/dust_cob_with_stick.png';
import imgDustPanWithBroom from '../../assets/images/housekeeping/dust_pan_with_broom.png';
import imgElectronicRoomFreshener from '../../assets/images/housekeeping/electronic_room_freshener.png';
import imgGarbageCovers from '../../assets/images/housekeeping/garbage_covers.png';
import imgHandAndSoftBrush from '../../assets/images/housekeeping/hand_and_soft_brush.png';
import imgHardBroom from '../../assets/images/housekeeping/hard_broom.png';
import imgMagicMopWithBucket from '../../assets/images/housekeeping/magic_mop_with_bucket.png';
import imgMopWithStick from '../../assets/images/housekeeping/mop_with_stick.png';
import imgNaphthaleneBalls from '../../assets/images/housekeeping/naphthalene_balls.png';
import imgOdonilAirFreshener from '../../assets/images/housekeeping/odonil_air_freshener.png';
import imgRoadBrush from '../../assets/images/housekeeping/road_brush.png';
import imgRoundMopWithStick from '../../assets/images/housekeeping/round_mop_with_stick.png';
import imgSoftBroom from '../../assets/images/housekeeping/soft_broom.png';
import imgSpongeMop from '../../assets/images/housekeeping/sponge_mop.png';
import imgSqueezerWiper from '../../assets/images/housekeeping/squeezer_wiper.png';
import imgToiletBrushes from '../../assets/images/housekeeping/toilet_brushes.png';
import imgUrinalCakeAndPad from '../../assets/images/housekeeping/urinal_cake_and_pad.png';
import imgWiper from '../../assets/images/housekeeping/wiper.png';
import styles from './HousekeepingMaterialsGrid.module.css';

const imageMap = {
  'Air Freshener Spray': imgAirFreshenerSpray,
  'Dry Mop': imgDryMop,
  'Dust Cob with Stick': imgDustCobWithStick,
  'Dust Pan with Broom': imgDustPanWithBroom,
  'Electronic Room Freshener': imgElectronicRoomFreshener,
  'Garbage Covers': imgGarbageCovers,
  'Hand & Soft Brush': imgHandAndSoftBrush,
  'Hard Broom': imgHardBroom,
  'Magic Mop with Bucket': imgMagicMopWithBucket,
  'Mop with Stick': imgMopWithStick,
  'Naphthalene Balls': imgNaphthaleneBalls,
  'Odonil Air Freshener': imgOdonilAirFreshener,
  'Road Brush': imgRoadBrush,
  'Round Mop with Stick': imgRoundMopWithStick,
  'Soft Broom': imgSoftBroom,
  'Sponge Mop': imgSpongeMop,
  'Squeezer Wiper': imgSqueezerWiper,
  'Toilet Brushes': imgToiletBrushes,
  'Urinal Cake & Pad': imgUrinalCakeAndPad,
  'Wiper': imgWiper,
};

const getImageForItem = (name) => {
  return imageMap[name] || imgMopWithStick;
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
