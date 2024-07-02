const express = require('express');
const router = express.Router();
const authController = require('../controllers/Auth.controller');
const authMiddleware = require('../middleware/authMiddleware');

// Route for user registration
router.post('/register', authController.registerUser);

// Route for user login
router.post('/login', authController.loginUser);

// Route to get authenticated user profile
router.get('/me', authMiddleware, authController.getAuthenticatedUser);

module.exports = router;
