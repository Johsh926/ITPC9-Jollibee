const mongoose = require('mongoose');
require('dotenv').config();

const Product = require('../models/Product');

const products = [
  // Chickenjoy
  {
    name: '1 pc Chickenjoy',
    description: 'Crispy on the outside, juicy on the inside. The one and only Chickenjoy!',
    price: 99,
    image: 'https://www.jollibeefoods.com/images/chickenjoy.png',
    category: 'Chickenjoy',
    isBestSeller: true,
    calories: 320
  },
  {
    name: '2 pc Chickenjoy',
    description: 'Two pieces of our famous crispy, juicy Chickenjoy',
    price: 179,
    image: 'https://www.jollibeefoods.com/images/chickenjoy.png',
    category: 'Chickenjoy',
    isBestSeller: true,
    calories: 640
  },
  {
    name: 'Chickenjoy Bucket 6pcs',
    description: 'Six pieces of our famous Chickenjoy, perfect for sharing!',
    price: 449,
    image: 'https://www.jollibeefoods.com/images/chickenjoy-bucket.png',
    category: 'Chickenjoy',
    isBestSeller: true,
    calories: 1920
  },
  {
    name: 'Chickenjoy with Jolly Spaghetti',
    description: '1pc Chickenjoy served with our sweet-style Jolly Spaghetti',
    price: 149,
    image: 'https://www.jollibeefoods.com/images/chickenjoy-spag.png',
    category: 'Chickenjoy',
    calories: 580
  },

  // Jolly Spaghetti
  {
    name: 'Jolly Spaghetti',
    description: 'Sweet-style spaghetti topped with sliced hotdogs, ground meat, and grated cheese',
    price: 75,
    image: 'https://www.jollibeefoods.com/images/spaghetti.png',
    category: 'Jolly Spaghetti',
    isBestSeller: true,
    calories: 450
  },
  {
    name: 'Jolly Spaghetti Family Pan',
    description: 'Family-sized pan of our famous sweet-style spaghetti',
    price: 299,
    image: 'https://www.jollibeefoods.com/images/spaghetti-pan.png',
    category: 'Jolly Spaghetti',
    calories: 1800
  },

  // Palabok
  {
    name: 'Palabok Fiesta',
    description: 'Rice noodles with savory sauce, topped with egg, chicharon, shrimp, and green onions',
    price: 99,
    image: 'https://www.jollibeefoods.com/images/palabok.png',
    category: 'Palabok',
    isBestSeller: true,
    calories: 380
  },
  {
    name: 'Palabok Family Pan',
    description: 'Family-sized serving of our famous Palabok Fiesta',
    price: 349,
    image: 'https://www.jollibeefoods.com/images/palabok-pan.png',
    category: 'Palabok',
    calories: 1520
  },

  // Burgers
  {
    name: 'Yumburger',
    description: 'Classic beefy burger with special dressing and fresh veggies',
    price: 49,
    image: 'https://www.jollibeefoods.com/images/yumburger.png',
    category: 'Burgers',
    calories: 280
  },
  {
    name: 'Champ',
    description: 'Quarter-pound beef patty with lettuce, tomato, and special sauce',
    price: 115,
    image: 'https://www.jollibeefoods.com/images/champ.png',
    category: 'Burgers',
    isBestSeller: true,
    calories: 450
  },
  {
    name: 'Cheesy Yumburger',
    description: 'Yumburger topped with melted cheese',
    price: 59,
    image: 'https://www.jollibeefoods.com/images/cheesy-yumburger.png',
    category: 'Burgers',
    calories: 320
  },
  {
    name: 'Aloha Burger',
    description: 'Burger with pineapple, bacon, and honey mustard sauce',
    price: 130,
    image: 'https://www.jollibeefoods.com/images/aloha.png',
    category: 'Burgers',
    calories: 480
  },

  // Burger Steak
  {
    name: 'Burger Steak',
    description: '100% beefy patty smothered in mushroom gravy, served with rice',
    price: 89,
    image: 'https://www.jollibeefoods.com/images/burger-steak.png',
    category: 'Burger Steak',
    isBestSeller: true,
    calories: 420
  },
  {
    name: '2pc Burger Steak',
    description: 'Two beefy patties with mushroom gravy and steamed rice',
    price: 149,
    image: 'https://www.jollibeefoods.com/images/burger-steak-2pc.png',
    category: 'Burger Steak',
    calories: 720
  },

  // Fries & Sides
  {
    name: 'Jolly Crispy Fries Regular',
    description: 'Golden crispy fries',
    price: 49,
    image: 'https://www.jollibeefoods.com/images/fries.png',
    category: 'Fries & Sides',
    calories: 280
  },
  {
    name: 'Jolly Crispy Fries Large',
    description: 'Large serving of golden crispy fries',
    price: 69,
    image: 'https://www.jollibeefoods.com/images/fries-large.png',
    category: 'Fries & Sides',
    calories: 420
  },
  {
    name: 'Mashed Potato Regular',
    description: 'Creamy mashed potato with gravy',
    price: 39,
    image: 'https://www.jollibeefoods.com/images/mashed-potato.png',
    category: 'Fries & Sides',
    calories: 180
  },
  {
    name: 'Creamy Macaroni Soup',
    description: 'Warm and creamy macaroni soup',
    price: 55,
    image: 'https://www.jollibeefoods.com/images/macaroni-soup.png',
    category: 'Fries & Sides',
    calories: 220
  },

  // Beverages
  {
    name: 'Coke Regular',
    description: 'Ice-cold Coca-Cola',
    price: 45,
    image: 'https://www.jollibeefoods.com/images/coke.png',
    category: 'Beverages',
    calories: 140
  },
  {
    name: 'Coke Float',
    description: 'Coca-Cola topped with vanilla soft serve',
    price: 65,
    image: 'https://www.jollibeefoods.com/images/coke-float.png',
    category: 'Beverages',
    calories: 280
  },
  {
    name: 'Pineapple Juice',
    description: 'Refreshing pineapple juice',
    price: 45,
    image: 'https://www.jollibeefoods.com/images/pineapple-juice.png',
    category: 'Beverages',
    calories: 120
  },
  {
    name: 'Iced Tea',
    description: 'Refreshing iced tea',
    price: 45,
    image: 'https://www.jollibeefoods.com/images/iced-tea.png',
    category: 'Beverages',
    calories: 90
  },

  // Desserts
  {
    name: 'Peach Mango Pie',
    description: 'Crispy pie filled with sweet peach and mango filling',
    price: 45,
    image: 'https://www.jollibeefoods.com/images/peach-mango-pie.png',
    category: 'Desserts',
    isBestSeller: true,
    calories: 240
  },
  {
    name: 'Chocolate Sundae',
    description: 'Creamy vanilla soft serve with chocolate syrup',
    price: 39,
    image: 'https://www.jollibeefoods.com/images/sundae.png',
    category: 'Desserts',
    calories: 200
  },
  {
    name: 'Twirl',
    description: 'Vanilla soft serve in a cone',
    price: 29,
    image: 'https://www.jollibeefoods.com/images/twirl.png',
    category: 'Desserts',
    calories: 150
  },

  // Breakfast
  {
    name: 'Longganisa',
    description: 'Sweet Filipino sausage with garlic rice and egg',
    price: 109,
    image: 'https://www.jollibeefoods.com/images/longganisa.png',
    category: 'Breakfast',
    calories: 480
  },
  {
    name: 'Corned Beef',
    description: 'Savory corned beef with garlic rice and egg',
    price: 119,
    image: 'https://www.jollibeefoods.com/images/corned-beef.png',
    category: 'Breakfast',
    calories: 520
  },
  {
    name: 'Pancakes with Butter & Syrup',
    description: 'Fluffy pancakes served with butter and maple syrup',
    price: 79,
    image: 'https://www.jollibeefoods.com/images/pancakes.png',
    category: 'Breakfast',
    calories: 380
  }
];

const seedProducts = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/jollibee');
    console.log('Connected to MongoDB');

    // Clear existing products
    await Product.deleteMany({});
    console.log('Cleared existing products');

    // Insert new products
    await Product.insertMany(products);
    console.log(`Inserted ${products.length} products`);

    console.log('✅ Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedProducts();
