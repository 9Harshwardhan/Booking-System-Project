const mongoose = require('mongoose');

// Define Booking schema
const BookingSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  movie: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Movie',
    required: true,
  },
  seats: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Seat',
    required: true,
  }],
  totalPrice: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create and export Booking model
module.exports = mongoose.model('Booking', BookingSchema);
