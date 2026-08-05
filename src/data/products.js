import productBlue from '../assets/images/product_bottle_blue.jpg';
import productPink from '../assets/images/product_bottle_pink.jpg';
import product1 from '../assets/images/hero_product1.png';
import product2 from '../assets/images/hero_product2.png';
import product3 from '../assets/images/hero_product3.png';
import product4 from '../assets/images/hero_product4.png';
import product5 from '../assets/images/hero_product5.png';
import product6 from '../assets/images/hero_product6.png';
import homeCareBottles from '../assets/images/home_care_bottles.jpg';
export const productCategories = [
  {
    category: 'Floor Cleaners',
    items: [
      { id: 1, name: 'Floor Cleaner (Floral)', quantity: '5 Ltr', image: product1 },
      { id: 2, name: 'Floor Cleaner (Jasmine)', quantity: '5 Ltr', image: product2 },
      { id: 3, name: 'Floor Cleaner (Citrus)', quantity: '5 Ltr', image: product3 }
    ]
  },
  {
    category: 'Air Fresheners',
    items: [
      { id: 4, name: 'Air Freshener (Floral)', quantity: '5 Ltr', image: product4 },
      { id: 5, name: 'Air Freshener (Lavender)', quantity: '5 Ltr', image: product5 }
    ]
  },
  {
    category: 'Surface Cleaners',
    items: [
      { id: 6, name: 'Hard Surface Cleaner', quantity: '5 Ltr', image: product6 },
      { id: 7, name: 'Bathroom Cleaner', quantity: '5 Ltr', image: productBlue },
      { id: 8, name: 'Glass & Multi-Surface Cleaner', quantity: '5 Ltr', image: productBlue }
    ]
  },
  {
    category: 'Toilet Care',
    items: [
      { id: 9, name: 'Disinfectant Toilet Bowl Cleaner', quantity: '5 Ltr', image: productBlue }
    ]
  },
  {
    category: 'Personal Care',
    items: [
      { id: 10, name: 'Hand Wash (Fresh Blossom)', quantity: '5 Ltr', image: productPink }
    ]
  },
  {
    category: 'Specialty Products',
    items: [
      { id: 11, name: 'Stainless Steel Cleaner', quantity: '500 ml', image: productBlue },
      { id: 12, name: 'Phenyl', quantity: '5 Ltr', image: productPink },
      { id: 13, name: 'Dishwashing Liquid', quantity: '1 Ltr', image: productBlue },
      { id: 14, name: 'Fabric Conditioner', quantity: '5 Ltr', image: productPink },
      { id: 15, name: 'Detergent Liquid', quantity: '5 Ltr', image: productBlue },
      { id: 16, name: 'Soap Oil', quantity: '1 Ltr', image: productBlue }
    ]
  },
  {
    category: 'Home Care (500ml & 1000ml)',
    items: [
      { id: 17, name: 'Detergent Liquid', quantity: '(500ml & 1000ml)', image: homeCareBottles },
      { id: 18, name: 'Floor Cleaner', quantity: '(500ml & 1000ml)', image: homeCareBottles },
      { id: 19, name: 'Dish Wash', quantity: '(500ml & 1000ml)', image: homeCareBottles },
      { id: 20, name: 'Toilet Cleaner', quantity: '(500ml & 1000ml)', image: homeCareBottles },
      { id: 21, name: 'Floor Cleaner (Herbal)', quantity: '(500ml & 1000ml)', image: homeCareBottles }
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
