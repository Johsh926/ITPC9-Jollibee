import { MenuItem } from '@/context/CartContext';

export const menuCategories = [
  { id: 'chicken', name: 'Chickenjoy', icon: '🍗' },
  { id: 'burgers', name: 'Burgers', icon: '🍔' },
  { id: 'spaghetti', name: 'Jolly Spaghetti', icon: '🍝' },
  { id: 'rice', name: 'Rice Meals', icon: '🍚' },
  { id: 'sides', name: 'Sides & Desserts', icon: '🍟' },
  { id: 'drinks', name: 'Drinks', icon: '🥤' },
  { id: 'family', name: 'Family Meals', icon: '👨‍👩‍👧‍👦' },
];

export const menuItems: MenuItem[] = [
  // Chickenjoy
  {
    id: 'cj-1pc',
    name: '1 pc Chickenjoy',
    description: 'Crispylicious, juicylicious Chickenjoy fried chicken served with steamed rice and gravy.',
    price: 99,
    image: 'https://images.unsplash.com/photo-1626645738196-c2a72c5a4c69?w=400&h=300&fit=crop',
    category: 'chicken',
  },
  {
    id: 'cj-2pc',
    name: '2 pc Chickenjoy',
    description: 'Two pieces of our famous Chickenjoy with steamed rice and gravy.',
    price: 175,
    image: 'https://images.unsplash.com/photo-1587593810167-a84920ea0781?w=400&h=300&fit=crop',
    category: 'chicken',
  },
  {
    id: 'cj-bucket-6',
    name: '6 pc Chickenjoy Bucket',
    description: 'Six pieces of crispy Chickenjoy perfect for sharing.',
    price: 449,
    image: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=400&h=300&fit=crop',
    category: 'chicken',
  },
  {
    id: 'cj-spicy-1pc',
    name: '1 pc Spicy Chickenjoy',
    description: 'Spicy version of our signature fried chicken with rice and gravy.',
    price: 109,
    image: 'https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?w=400&h=300&fit=crop',
    category: 'chicken',
  },

  // Burgers
  {
    id: 'yum-burger',
    name: 'Yumburger',
    description: 'Classic beef patty with special Jollibee sauce on a soft bun.',
    price: 45,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop',
    category: 'burgers',
  },
  {
    id: 'cheese-yum',
    name: 'Cheesy Yumburger',
    description: 'Yumburger topped with melted cheese.',
    price: 55,
    image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400&h=300&fit=crop',
    category: 'burgers',
  },
  {
    id: 'aloha-burger',
    name: 'Aloha Burger',
    description: 'Beef patty with pineapple, bacon, and special sauce.',
    price: 109,
    image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&h=300&fit=crop',
    category: 'burgers',
  },
  {
    id: 'champ',
    name: 'Champ',
    description: 'Double beef patties with fresh veggies and special sauce.',
    price: 125,
    image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=300&fit=crop',
    category: 'burgers',
  },

  // Spaghetti
  {
    id: 'jolly-spag',
    name: 'Jolly Spaghetti',
    description: 'Sweet-style spaghetti with chunky slices of savory ham, ground meat, and hotdog.',
    price: 75,
    image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop',
    category: 'spaghetti',
  },
  {
    id: 'spag-family',
    name: 'Jolly Spaghetti Family Pan',
    description: 'Family-sized serving of our famous sweet-style spaghetti.',
    price: 299,
    image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=400&h=300&fit=crop',
    category: 'spaghetti',
  },

  // Rice Meals
  {
    id: 'burger-steak',
    name: 'Burger Steak',
    description: 'Savory beef patties smothered in mushroom gravy with rice.',
    price: 99,
    image: 'https://images.unsplash.com/photo-1529694157872-4e0c0f3b238b?w=400&h=300&fit=crop',
    category: 'rice',
  },
  {
    id: 'palabok',
    name: 'Palabok Fiesta',
    description: 'Rice noodles with special Palabok sauce, pork, shrimp, and egg.',
    price: 89,
    image: 'https://images.unsplash.com/photo-1555126634-323283e090fa?w=400&h=300&fit=crop',
    category: 'rice',
  },
  {
    id: 'super-meal',
    name: 'Super Meal',
    description: '1pc Chickenjoy, Jolly Spaghetti, drink, and sundae.',
    price: 189,
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop',
    category: 'rice',
  },

  // Sides & Desserts
  {
    id: 'jolly-fries',
    name: 'Jolly Crispy Fries',
    description: 'Golden, crispy french fries.',
    price: 49,
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&h=300&fit=crop',
    category: 'sides',
  },
  {
    id: 'mashed-potato',
    name: 'Creamy Mashed Potato',
    description: 'Smooth and creamy mashed potatoes with gravy.',
    price: 39,
    image: 'https://images.unsplash.com/photo-1600692655996-50cc96c203a0?w=400&h=300&fit=crop',
    category: 'sides',
  },
  {
    id: 'peach-mango-pie',
    name: 'Peach Mango Pie',
    description: 'Sweet peach and mango filling in a crispy pie crust.',
    price: 39,
    image: 'https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?w=400&h=300&fit=crop',
    category: 'sides',
  },
  {
    id: 'sundae',
    name: 'Chocolate Sundae',
    description: 'Creamy vanilla soft serve with rich chocolate syrup.',
    price: 35,
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop',
    category: 'sides',
  },

  // Drinks
  {
    id: 'coke-reg',
    name: 'Coca-Cola Regular',
    description: 'Refreshing Coca-Cola soft drink.',
    price: 35,
    image: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?w=400&h=300&fit=crop',
    category: 'drinks',
  },
  {
    id: 'pineapple-juice',
    name: 'Pineapple Juice',
    description: 'Sweet and refreshing pineapple juice.',
    price: 45,
    image: 'https://images.unsplash.com/photo-1589734480796-e3afb8b42a30?w=400&h=300&fit=crop',
    category: 'drinks',
  },
  {
    id: 'iced-tea',
    name: 'Iced Tea',
    description: 'Cold and refreshing iced tea.',
    price: 39,
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=300&fit=crop',
    category: 'drinks',
  },

  // Family Meals
  {
    id: 'family-bundle-a',
    name: 'Family Bundle A',
    description: '8pc Chickenjoy, 2 rice, Jolly Spaghetti Family Pan, and 4 drinks.',
    price: 899,
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop',
    category: 'family',
  },
  {
    id: 'family-bundle-b',
    name: 'Family Bundle B',
    description: '6pc Chickenjoy, Burger Steak Family, rice, and drinks.',
    price: 749,
    image: 'https://images.unsplash.com/photo-1576867757603-05b134ebc379?w=400&h=300&fit=crop',
    category: 'family',
  },
];

export const getItemsByCategory = (category: string): MenuItem[] => {
  return menuItems.filter(item => item.category === category);
};

export const getItemById = (id: string): MenuItem | undefined => {
  return menuItems.find(item => item.id === id);
};

export const getFeaturedItems = (): MenuItem[] => {
  return menuItems.filter(item => 
    ['cj-1pc', 'jolly-spag', 'yum-burger', 'peach-mango-pie'].includes(item.id)
  );
};