import imgFloorCleanerFloral from '../assets/images/floor_cleaner_floral.png';
import imgFloorCleanerJasmine from '../assets/images/floor_cleaner_jasmine.png';
import imgFloorCleanerCitrus from '../assets/images/floor_cleaner_citrus.png';
import imgAirFreshenerFloral from '../assets/images/air_freshener_floral.png';
import imgAirFreshenerLavender from '../assets/images/air_freshener_lavender.png';
import imgHardSurfaceCleaner from '../assets/images/hard_surface_cleaner.png';
import imgBathroomCleaner from '../assets/images/bathroom_cleaner.png';
import imgGlassCleaner from '../assets/images/glass_multi_surface_cleaner.png';
import imgToiletCleaner from '../assets/images/toilet_bowl_cleaner.png';
import imgHandWash from '../assets/images/hand_wash_fresh_blossom.png';
import imgStainlessSteelCleaner from '../assets/images/stainless_steel_cleaner.png';
import imgPhenyl from '../assets/images/phenyl.png';
import imgDishwashingLiquid from '../assets/images/dishwashing_liquid.png';
import imgFabricConditioner from '../assets/images/fabric_conditioner.png';
import imgDetergentLiquid from '../assets/images/detergent_liquid_5_ltr.png';
import imgSoapOil from '../assets/images/soap_oil.png';
import homeCareBottles from '../assets/images/home_care_bottles.jpg';
import detergentLiquid500 from '../assets/images/detergent_liquid_500.png';
import dishWash500 from '../assets/images/dish_wash_500.png';
import floorCleaner500 from '../assets/images/floor_cleaner_500.png';
import toiletCleaner500 from '../assets/images/toilet_cleaner_500.png';
import floorCleanerOrganic500 from '../assets/images/floor_cleaner_organic_500.png';

export const productCategories = [
  {
    category: 'Floor Cleaners',
    items: [
      { id: 1, name: 'Floor Cleaner (Floral)', quantity: '5 Ltr', image: imgFloorCleanerFloral },
      { id: 2, name: 'Floor Cleaner (Jasmine)', quantity: '5 Ltr', image: imgFloorCleanerJasmine },
      { id: 3, name: 'Floor Cleaner (Citrus)', quantity: '5 Ltr', image: imgFloorCleanerCitrus }
    ]
  },
  {
    category: 'Air Fresheners',
    items: [
      { id: 4, name: 'Air Freshener (Floral)', quantity: '5 Ltr', image: imgAirFreshenerFloral },
      { id: 5, name: 'Air Freshener (Lavender)', quantity: '5 Ltr', image: imgAirFreshenerLavender }
    ]
  },
  {
    category: 'Surface Cleaners',
    items: [
      { id: 6, name: 'Hard Surface Cleaner', quantity: '5 Ltr', image: imgHardSurfaceCleaner },
      { id: 7, name: 'Bathroom Cleaner', quantity: '5 Ltr', image: imgBathroomCleaner },
      { id: 8, name: 'Glass & Multi-Surface Cleaner', quantity: '5 Ltr', image: imgGlassCleaner }
    ]
  },
  {
    category: 'Toilet Care',
    items: [
      { id: 9, name: 'Disinfectant Toilet Bowl Cleaner', quantity: '5 Ltr', image: imgToiletCleaner }
    ]
  },
  {
    category: 'Personal Care',
    items: [
      { id: 10, name: 'Hand Wash (Fresh Blossom)', quantity: '5 Ltr', image: imgHandWash }
    ]
  },
  {
    category: 'Specialty Products',
    items: [
      { id: 11, name: 'Stainless Steel Cleaner', quantity: '500 ml', image: imgStainlessSteelCleaner },
      { id: 12, name: 'Phenyl', quantity: '5 Ltr', image: imgPhenyl },
      { id: 13, name: 'Dishwashing Liquid', quantity: '1 Ltr', image: imgDishwashingLiquid },
      { id: 14, name: 'Fabric Conditioner', quantity: '5 Ltr', image: imgFabricConditioner },
      { id: 15, name: 'Detergent Liquid', quantity: '5 Ltr', image: imgDetergentLiquid },
      { id: 16, name: 'Soap Oil', quantity: '1 Ltr', image: imgSoapOil }
    ]
  },
  {
    category: 'Home Care (500ml & 1000ml)',
    items: [
      { id: 17, name: 'Detergent Liquid', quantity: '(500ml & 1000ml)', image: detergentLiquid500 },
      { id: 18, name: 'Floor Cleaner', quantity: '(500ml & 1000ml)', image: floorCleaner500 },
      { id: 19, name: 'Dish Wash', quantity: '(500ml & 1000ml)', image: dishWash500 },
      { id: 20, name: 'Toilet Cleaner', quantity: '(500ml & 1000ml)', image: toiletCleaner500 },
      { id: 21, name: 'Floor Cleaner (Herbal)', quantity: '(500ml & 1000ml)', image: floorCleanerOrganic500 }
    ]
  }
];

export const housekeepingMaterials = [
  { name: 'Dust Cob with Stick' },
  { name: 'Round Mop with Stick' },
  { name: 'Dust Pan with Broom' },
  { name: 'Mop with Stick' },
  { name: 'Urinal Cake & Pad' },
  { name: 'Dry Mop' },
  { name: 'Squeezer Wiper' },
  { name: 'Road Brush' },
  { name: 'Hard Broom' },
  { name: 'Hand & Soft Brush' },
  { name: 'Soft Broom' },
  { name: 'Sponge Mop' },
  { name: 'Magic Mop with Bucket' },
  { name: 'Wiper' },
  { name: 'Toilet Brushes' },
  { name: 'Electronic Room Freshener' },
  { name: 'Air Freshener Spray' },
  { name: 'Odonil Air Freshener' },
  { name: 'Naphthalene Balls' },
  { name: 'Garbage Covers' }
];

export const products = productCategories.flatMap(c => c.items.map(i => ({ ...i, link: `/products/${i.name.toLowerCase().replace(/ /g, '-')}` }))).slice(0, 6);

export const features = [
  {
    id: 1,
    title: 'Safe & Effective',
    description: 'Trusted formulas for your family'
  },
  {
    id: 2,
    title: 'Pleasant Fragrance',
    description: 'Long lasting freshness in every use'
  },
  {
    id: 3,
    title: 'Premium Quality',
    description: 'High performance you can rely on'
  }
];

export const benefits = [
  {
    id: 1,
    title: 'Effective Cleaning',
    description: 'Powerful formulas for spotless results'
  },
  {
    id: 2,
    title: 'Multi-Purpose',
    description: 'Perfect for all your cleaning needs'
  },
  {
    id: 3,
    title: 'Safe for Family',
    description: 'Gentle on hands, tough on germs'
  },
  {
    id: 4,
    title: 'Trusted Quality',
    description: 'Manufactured with highest standards'
  },
  {
    id: 5,
    title: 'Pleasant Fragrance',
    description: 'Makes cleaning a refreshing experience'
  },
  {
    id: 6,
    title: 'Eco-Conscious',
    description: 'Better for your home and environment'
  }
];
