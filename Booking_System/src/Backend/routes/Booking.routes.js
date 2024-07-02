const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/Booking.controller');
const authMiddleware = require('../middleware/authMiddleware');

// Middleware to authenticate users
router.use(authMiddleware);

// Routes for booking management
router.post('/', bookingController.createBooking);
router.get('/', bookingController.getAllBookings);
router.get('/:id', bookingController.getBookingById);
router.put('/:id', bookingController.updateBooking);
router.delete('/:id', bookingController.deleteBooking);

module.exports = router;
