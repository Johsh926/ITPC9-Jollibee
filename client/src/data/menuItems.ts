export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export const categories = [
  { id: 'chickenjoy', name: 'Chickenjoy', icon: '🍗' },
  { id: 'burgers', name: 'Yum Burgers', icon: '🍔' },
  { id: 'spaghetti', name: 'Jolly Spaghetti', icon: '🍝' },
  { id: 'palabok', name: 'Palabok Fiesta', icon: '🍜' },
  { id: 'breakfast', name: 'Breakfast', icon: '🍳' },
  { id: 'desserts', name: 'Desserts', icon: '🍦' },
  { id: 'drinks', name: 'Drinks', icon: '🥤' },
];

export const menuItems: MenuItem[] = [
  // Chickenjoy
  {
    id: '1',
    name: '1 pc Chickenjoy',
    description: 'Crispy, juicy, and perfectly seasoned fried chicken served with steamed rice',
    price: 99,
    image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=400',
    category: 'chickenjoy',
  },
  {
    id: '2',
    name: '2 pc Chickenjoy',
    description: 'Double the crunch, double the joy! Two pieces of our famous fried chicken',
    price: 179,
    image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=400',
    category: 'chickenjoy',
  },
  {
    id: '3',
    name: 'Chickenjoy Bucket (6pcs)',
    description: 'Perfect for sharing! Six pieces of crispy Chickenjoy',
    price: 449,
    image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400',
    category: 'chickenjoy',
  },
  {
    id: '4',
    name: 'Spicy Chickenjoy',
    description: 'Our classic Chickenjoy with a spicy kick',
    price: 109,
    image: 'https://images.unsplash.com/photo-1569058242567-93de6f36f8e6?w=400',
    category: 'chickenjoy',
  },
  // Burgers
  {
    id: '5',
    name: 'Yumburger',
    description: 'Classic beefy burger with special Jollibee sauce',
    price: 45,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400',
    category: 'burgers',
  },
  {
    id: '6',
    name: 'Champ',
    description: 'Quarter-pound beef patty with lettuce, tomato, and cheese',
    price: 115,
    image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400',
    category: 'burgers',
  },
  {
    id: '7',
    name: 'Aloha Burger',
    description: 'Beef patty topped with bacon, pineapple, and honey mustard',
    price: 145,
    image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400',
    category: 'burgers',
  },
  // Spaghetti
  {
    id: '8',
    name: 'Jolly Spaghetti',
    description: 'Sweet-style spaghetti with meaty sauce, hotdog, and cheese',
    price: 65,
    image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400',
    category: 'spaghetti',
  },
  {
    id: '9',
    name: 'Jolly Spaghetti Family Pan',
    description: 'Family-sized serving perfect for 4-6 people',
    price: 299,
    image: 'https://images.unsplash.com/photo-1622973536968-3ead9e780960?w=400',
    category: 'spaghetti',
  },
  // Palabok
  {
    id: '10',
    name: 'Palabok Fiesta',
    description: 'Rice noodles with savory shrimp-pork sauce, topped with egg and chicharon',
    price: 75,
    image: 'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=400',
    category: 'palabok',
  },
  {
    id: '11',
    name: 'Palabok Family Pan',
    description: 'Family-sized Palabok perfect for sharing',
    price: 329,
    image: 'https://images.unsplash.com/photo-1555126634-323283e090fa?w=400',
    category: 'palabok',
  },
  // Breakfast
  {
    id: '12',
    name: 'Longganisa Meal',
    description: 'Sweet Filipino sausages with garlic rice and egg',
    price: 99,
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400',
    category: 'breakfast',
  },
  {
    id: '13',
    name: 'Corned Beef Meal',
    description: 'Savory corned beef with garlic rice and egg',
    price: 109,
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400',
    category: 'breakfast',
  },
  // Desserts
  {
    id: '14',
    name: 'Peach Mango Pie',
    description: 'Crispy pie filled with sweet peach and mango',
    price: 39,
    image: 'https://images.unsplash.com/photo-1621743478914-cc8a86d7e7b5?w=400',
    category: 'desserts',
  },
  {
    id: '15',
    name: 'Chocolate Sundae',
    description: 'Creamy vanilla ice cream with rich chocolate syrup',
    price: 35,
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400',
    category: 'desserts',
  },
  {
    id: '16',
    name: 'Halo-Halo',
    description: 'Classic Filipino shaved ice dessert with sweet toppings',
    price: 89,
    image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400',
    category: 'desserts',
  },
  // Drinks
  {
    id: '17',
    name: 'Coke Float',
    description: 'Refreshing Coca-Cola with creamy vanilla ice cream',
    price: 49,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400',
    category: 'drinks',
  },
  {
    id: '18',
    name: 'Pineapple Juice',
    description: 'Fresh and tropical pineapple juice',
    price: 35,
    image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400',
    category: 'drinks',
  },
  {
    id: '19',
    name: 'Iced Tea',
    description: 'Classic refreshing iced tea',
    price: 29,
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400',
    category: 'drinks',
  },
];
