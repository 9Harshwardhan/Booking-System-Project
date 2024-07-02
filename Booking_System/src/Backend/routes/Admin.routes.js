const express = require('express');
const router = express.Router();
const adminController = require('../controllers/Admin.controller');
const authMiddleware = require('../middleware/authMiddleware');
const { adminAuth } = require('../middleware/adminAuthMiddleware');

// Middleware to authenticate and authorize admin
router.use(authMiddleware); // Example authentication middleware
router.use(adminAuth); // Example admin authorization middleware

// Routes for screen management
router.post('/screens', adminController.createScreen);
router.get('/screens', adminController.getAllScreens);
router.get('/screens/:id', adminController.getScreenById);
router.put('/screens/:id', adminController.updateScreen);
router.delete('/screens/:id', adminController.deleteScreen);

// Routes for booking management
router.get('/bookings', adminController.getAllBookings);
router.get('/bookings/:id', adminController.getBookingById);
router.put('/bookings/:id', adminController.updateBooking);
router.delete('/bookings/:id', adminController.deleteBooking);

// Routes for movie management
router.post('/movies', adminController.createMovie);
router.get('/movies', adminController.getAllMovies);
router.get('/movies/:id', adminController.getMovieById);
router.put('/movies/:id', adminController.updateMovie);
router.delete('/movies/:id', adminController.deleteMovie);

module.exports = router;
