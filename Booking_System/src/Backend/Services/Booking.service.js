const Booking = require('../models/Booking.model');
const Seat = require('../models/Seat.model');

// Function to create a new booking
async function createBooking(bookingData) {
  try {
    // Check seat availability before booking
    const seatsAvailable = await Seat.find({
      _id: { $in: bookingData.seats },
      status: 'available'
    });

    if (seatsAvailable.length !== bookingData.seats.length) {
      throw new Error('One or more selected seats are not available');
    }

    // Reserve seats
    await Seat.updateMany({ _id: { $in: bookingData.seats } }, { status: 'booked' });

    // Create new booking
    const newBooking = await Booking.create(bookingData);
    return newBooking;
  } catch (error) {
    throw new Error(`Error creating booking: ${error.message}`);
  }
}

// Function to get all bookings
async function getAllBookings() {
  try {
    const bookings = await Booking.find();
    return bookings;
  } catch (error) {
    throw new Error(`Error fetching bookings: ${error.message}`);
  }
}

// Function to get a booking by ID
async function getBookingById(bookingId) {
  try {
    const booking = await Booking.findById(bookingId);
    if (!booking) {
      throw new Error('Booking not found');
    }
    return booking;
  } catch (error) {
    throw new Error(`Error fetching booking: ${error.message}`);
  }
}

// Function to update a booking by ID
async function updateBooking(bookingId, updateData) {
  try {
    const updatedBooking = await Booking.findByIdAndUpdate(bookingId, updateData, { new: true });
    if (!updatedBooking) {
      throw new Error('Booking not found');
    }
    return updatedBooking;
  } catch (error) {
    throw new Error(`Error updating booking: ${error.message}`);
  }
}

// Function to delete a booking by ID
async function deleteBooking(bookingId) {
  try {
    const deletedBooking = await Booking.findByIdAndDelete(bookingId);
    if (!deletedBooking) {
      throw new Error('Booking not found');
    }

    // Free up seats
    await Seat.updateMany({ _id: { $in: deletedBooking.seats } }, { status: 'available' });

    return deletedBooking;
  } catch (error) {
    throw new Error(`Error deleting booking: ${error.message}`);
  }
}

module.exports = {
  createBooking,
  getAllBookings,
  getBookingById,
  updateBooking,
  deleteBooking,
};
