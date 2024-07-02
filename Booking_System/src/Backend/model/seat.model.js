const mongoose = require('mongoose');

// Define Seat schema
const SeatSchema = new mongoose.Schema({
  screen: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Screen',
    required: true,
  },
  seatNumber: {
    type: String,
    required: true,
  },
  booked: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create and export Seat model
module.exports = mongoose.model('Seat', SeatSchema);
