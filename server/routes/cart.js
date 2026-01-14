const express = require('express');
const router = express.Router();
const Cart = require('../models/Cart');
const Product = require('../models/Product');
const { auth } = require('../middleware/auth');

// @route   GET /api/cart
// @desc    Get user's cart
// @access  Private
router.get('/', auth, async (req, res) => {
  try {
    let cart = await Cart.findOne({ user: req.user._id })
      .populate('items.product', 'name image price category');
    
    if (!cart) {
      cart = new Cart({ user: req.user._id, items: [] });
      await cart.save();
    }
    
    res.json(cart);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   POST /api/cart/add
// @desc    Add item to cart
// @access  Private
router.post('/add', auth, async (req, res) => {
  try {
    const { productId, quantity = 1 } = req.body;

    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    let cart = await Cart.findOne({ user: req.user._id });
    
    if (!cart) {
      cart = new Cart({ user: req.user._id, items: [] });
    }

    // Check if item already in cart
    const existingItemIndex = cart.items.findIndex(
      item => item.product.toString() === productId
    );

    if (existingItemIndex > -1) {
      cart.items[existingItemIndex].quantity += quantity;
    } else {
      cart.items.push({
        product: productId,
        quantity,
        price: product.price
      });
    }

    await cart.save();
    
    cart = await Cart.findById(cart._id)
      .populate('items.product', 'name image price category');
    
    res.json(cart);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   PUT /api/cart/update
// @desc    Update item quantity in cart
// @access  Private
router.put('/update', auth, async (req, res) => {
  try {
    const { productId, quantity } = req.body;

    let cart = await Cart.findOne({ user: req.user._id });
    
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    const itemIndex = cart.items.findIndex(
      item => item.product.toString() === productId
    );

    if (itemIndex === -1) {
      return res.status(404).json({ message: 'Item not found in cart' });
    }

    if (quantity <= 0) {
      cart.items.splice(itemIndex, 1);
    } else {
      cart.items[itemIndex].quantity = quantity;
    }

    await cart.save();
    
    cart = await Cart.findById(cart._id)
      .populate('items.product', 'name image price category');
    
    res.json(cart);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   DELETE /api/cart/remove/:productId
// @desc    Remove item from cart
// @access  Private
router.delete('/remove/:productId', auth, async (req, res) => {
  try {
    let cart = await Cart.findOne({ user: req.user._id });
    
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    cart.items = cart.items.filter(
      item => item.product.toString() !== req.params.productId
    );

    await cart.save();
    
    cart = await Cart.findById(cart._id)
      .populate('items.product', 'name image price category');
    
    res.json(cart);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   DELETE /api/cart/clear
// @desc    Clear cart
// @access  Private
router.delete('/clear', auth, async (req, res) => {
  try {
    let cart = await Cart.findOne({ user: req.user._id });
    
    if (cart) {
      cart.items = [];
      await cart.save();
    }
    
    res.json({ message: 'Cart cleared successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
