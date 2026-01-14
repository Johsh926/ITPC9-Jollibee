const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Product = require('../models/Product');
const { auth } = require('../middleware/auth');

// @route   PUT /api/users/profile
// @desc    Update user profile
// @access  Private
router.put('/profile', auth, async (req, res) => {
  try {
    const { firstName, lastName, phone, address } = req.body;

    const user = await User.findByIdAndUpdate(
      req.user._id,
      { firstName, lastName, phone, address },
      { new: true, runValidators: true }
    ).select('-password');

    res.json({
      message: 'Profile updated successfully',
      user
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   PUT /api/users/password
// @desc    Change password
// @access  Private
router.put('/password', auth, async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;

    const user = await User.findById(req.user._id);

    const isMatch = await user.comparePassword(currentPassword);
    if (!isMatch) {
      return res.status(400).json({ message: 'Current password is incorrect' });
    }

    user.password = newPassword;
    await user.save();

    res.json({ message: 'Password changed successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   GET /api/users/favorites
// @desc    Get user's favorite products
// @access  Private
router.get('/favorites', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user._id)
      .populate('favorites', 'name description price image category');
    
    res.json(user.favorites);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   POST /api/users/favorites/:productId
// @desc    Add product to favorites
// @access  Private
router.post('/favorites/:productId', auth, async (req, res) => {
  try {
    const product = await Product.findById(req.params.productId);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    const user = await User.findById(req.user._id);
    
    if (user.favorites.includes(req.params.productId)) {
      return res.status(400).json({ message: 'Product already in favorites' });
    }

    user.favorites.push(req.params.productId);
    await user.save();

    res.json({ message: 'Added to favorites' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   DELETE /api/users/favorites/:productId
// @desc    Remove product from favorites
// @access  Private
router.delete('/favorites/:productId', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    
    user.favorites = user.favorites.filter(
      fav => fav.toString() !== req.params.productId
    );
    await user.save();

    res.json({ message: 'Removed from favorites' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
