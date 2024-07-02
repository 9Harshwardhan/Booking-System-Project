// Import necessary modules and models
const Booking = require('../models/Booking');
const Movie = require('../models/Movie');
const Seat = require('../models/Seat');
const { validationResult } = require('express-validator');

// Example controller methods
const bookingController = {
  // Get all bookings
  getAllBookings: async (req, res) => {
    try {
      const bookings = await Booking.find().populate('movie').populate('seats');
      res.json(bookings);
    } catch (error) {
      console.error('Error fetching bookings:', error);
      res.status(500).json({ message: 'Server error' });
    }
  },

  // Create a new booking
  createBooking: async (req, res) => {
    // Validate input
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Extract booking details from request body
    const { movieId, seats, totalPrice } = req.body;

    try {
      // Check if the movie exists
      const movie = await Movie.findById(movieId);
      if (!movie) {
        return res.status(404).json({ message: 'Movie not found' });
      }

      // Check if seats are available
      const availableSeats = await Seat.find({ movie: movieId, seatNumber: { $in: seats }, booked: false });
      if (availableSeats.length !== seats.length) {
        return res.status(400).json({ message: 'Some seats are already booked' });
      }

      // Create new booking instance
      const newBooking = new Booking({
        movie: movieId,
        seats,
        totalPrice,
      });

      // Save booking to database
      await newBooking.save();

      // Mark seats as booked
      await Seat.updateMany({ _id: { $in: seats } }, { booked: true });

      res.json({ message: 'Booking created successfully', booking: newBooking });
    } catch (error) {
      console.error('Error creating booking:', error);
      res.status(500).json({ message: 'Server error' });
    }
  },

  // Cancel a booking
  cancelBooking: async (req, res) => {
    const bookingId = req.params.id;

    try {
      // Find the booking by ID
      const booking = await Booking.findById(bookingId);
      if (!booking) {
        return res.status(404).json({ message: 'Booking not found' });
      }

      // Release booked seats
      await Seat.updateMany({ _id: { $in: booking.seats } }, { booked: false });

      // Delete the booking
      await Booking.findByIdAndDelete(bookingId);

      res.json({ message: 'Booking cancelled successfully' });
    } catch (error) {
      console.error('Error cancelling booking:', error);
      res.status(500).json({ message: 'Server error' });
    }
  },
};

module.exports = bookingController;
