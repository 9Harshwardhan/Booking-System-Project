// Import necessary modules and models
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');
const User = require('../models/User');
const config = require('../config/config'); // Example configuration file for JWT secret

// Example controller methods
const authController = {
  // Register a new user
  registerUser: async (req, res) => {
    // Validate input
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Extract user details from request body
    const { name, email, password } = req.body;

    try {
      // Check if the user already exists
      let user = await User.findOne({ email });
      if (user) {
        return res.status(400).json({ message: 'User already exists' });
      }

      // Create new user instance
      user = new User({
        name,
        email,
        password, // Password will be hashed before saving
      });

      // Generate salt and hash password
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      // Save user to database
      await user.save();

      res.json({ message: 'User registered successfully', user: { id: user.id, name: user.name, email: user.email } });
    } catch (error) {
      console.error('Error registering user:', error);
      res.status(500).json({ message: 'Server error' });
    }
  },

  // Authenticate user and generate JWT token
  loginUser: async (req, res) => {
    // Validate input
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Extract user credentials from request body
    const { email, password } = req.body;

    try {
      // Check if the user exists
      let user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: 'Invalid credentials' });
      }

      // Compare hashed password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: 'Invalid credentials' });
      }

      // Generate JWT token
      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        config.jwtSecret, // JWT secret key from configuration
        { expiresIn: '1h' }, // Token expires in 1 hour
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (error) {
      console.error('Error logging in user:', error);
      res.status(500).json({ message: 'Server error' });
    }
  },

  // Get current authenticated user
  getAuthenticatedUser: async (req, res) => {
    try {
      const user = await User.findById(req.user.id).select('-password'); // Exclude password from user data
      res.json(user);
    } catch (error) {
      console.error('Error fetching authenticated user:', error);
      res.status(500).json({ message: 'Server error' });
    }
  },
};

module.exports = authController;
