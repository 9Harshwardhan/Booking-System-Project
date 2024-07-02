const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User.model');

// Function to register a new user
async function registerUser(userData) {
  try {
    // Check if user with the same email already exists
    const existingUser = await User.findOne({ email: userData.email });
    if (existingUser) {
      throw new Error('User with this email already exists');
    }

    // Hash the password before saving to the database
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    userData.password = hashedPassword;

    // Create a new user
    const newUser = await User.create(userData);
    return newUser;
  } catch (error) {
    throw new Error(`Error registering user: ${error.message}`);
  }
}

// Function to authenticate user and generate JWT token
async function loginUser(email, password) {
  try {
    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error('User not found');
    }

    // Compare passwords
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      throw new Error('Invalid credentials');
    }

    // Generate JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return token;
  } catch (error) {
    throw new Error(`Error logging in: ${error.message}`);
  }
}

// Function to get authenticated user profile
async function getAuthenticatedUser(userId) {
  try {
    const user = await User.findById(userId).select('-password');
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  } catch (error) {
    throw new Error(`Error fetching user: ${error.message}`);
  }
}

module.exports = {
  registerUser,
  loginUser,
  getAuthenticatedUser,
};
