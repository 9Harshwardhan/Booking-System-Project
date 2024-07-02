const Screen = require('../models/Screen.model');
const Booking = require('../models/Booking.model');
const Movie = require('../models/Movie.model');

// Function to create a new screen
async function createScreen(screenData) {
  try {
    const newScreen = await Screen.create(screenData);
    return newScreen;
  } catch (error) {
    throw new Error(`Error creating screen: ${error.message}`);
  }
}

// Function to get all screens
async function getAllScreens() {
  try {
    const screens = await Screen.find();
    return screens;
  } catch (error) {
    throw new Error(`Error fetching screens: ${error.message}`);
  }
}

// Function to get a screen by ID
async function getScreenById(screenId) {
  try {
    const screen = await Screen.findById(screenId);
    if (!screen) {
      throw new Error('Screen not found');
    }
    return screen;
  } catch (error) {
    throw new Error(`Error fetching screen: ${error.message}`);
  }
}

// Function to update a screen by ID
async function updateScreen(screenId, updateData) {
  try {
    const updatedScreen = await Screen.findByIdAndUpdate(screenId, updateData, { new: true });
    if (!updatedScreen) {
      throw new Error('Screen not found');
    }
    return updatedScreen;
  } catch (error) {
    throw new Error(`Error updating screen: ${error.message}`);
  }
}

// Function to delete a screen by ID
async function deleteScreen(screenId) {
  try {
    const deletedScreen = await Screen.findByIdAndDelete(screenId);
    if (!deletedScreen) {
      throw new Error('Screen not found');
    }
    // Also delete associated bookings
    await Booking.deleteMany({ screen: screenId });
    return deletedScreen;
  } catch (error) {
    throw new Error(`Error deleting screen: ${error.message}`);
  }
}

// Function to create a new movie
async function createMovie(movieData) {
  try {
    const newMovie = await Movie.create(movieData);
    return newMovie;
  } catch (error) {
    throw new Error(`Error creating movie: ${error.message}`);
  }
}

// Function to get all movies
async function getAllMovies() {
  try {
    const movies = await Movie.find();
    return movies;
  } catch (error) {
    throw new Error(`Error fetching movies: ${error.message}`);
  }
}

// Function to get a movie by ID
async function getMovieById(movieId) {
  try {
    const movie = await Movie.findById(movieId);
    if (!movie) {
      throw new Error('Movie not found');
    }
    return movie;
  } catch (error) {
    throw new Error(`Error fetching movie: ${error.message}`);
  }
}

// Function to update a movie by ID
async function updateMovie(movieId, updateData) {
  try {
    const updatedMovie = await Movie.findByIdAndUpdate(movieId, updateData, { new: true });
    if (!updatedMovie) {
      throw new Error('Movie not found');
    }
    return updatedMovie;
  } catch (error) {
    throw new Error(`Error updating movie: ${error.message}`);
  }
}

// Function to delete a movie by ID
async function deleteMovie(movieId) {
  try {
    const deletedMovie = await Movie.findByIdAndDelete(movieId);
    if (!deletedMovie) {
      throw new Error('Movie not found');
    }
    // Also delete associated bookings
    await Booking.deleteMany({ movie: movieId });
    return deletedMovie;
  } catch (error) {
    throw new Error(`Error deleting movie: ${error.message}`);
  }
}

module.exports = {
  createScreen,
  getAllScreens,
  getScreenById,
  updateScreen,
  deleteScreen,
  createMovie,
  getAllMovies,
  getMovieById,
  updateMovie,
  deleteMovie,
};
