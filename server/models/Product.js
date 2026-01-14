const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Product name is required'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Description is required']
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
    min: 0
  },
  image: {
    type: String,
    required: [true, 'Image URL is required']
  },
  category: {
    type: String,
    required: [true, 'Category is required'],
    enum: ['Chickenjoy', 'Burgers', 'Jolly Spaghetti', 'Palabok', 'Burger Steak', 'Fries & Sides', 'Beverages', 'Desserts', 'Family Meals', 'Breakfast']
  },
  isAvailable: {
    type: Boolean,
    default: true
  },
  isBestSeller: {
    type: Boolean,
    default: false
  },
  calories: {
    type: Number
  },
  preparationTime: {
    type: Number, // in minutes
    default: 15
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Product', productSchema);
