const Movie = require('../models/Movie.model');

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
    return deletedMovie;
  } catch (error) {
    throw new Error(`Error deleting movie: ${error.message}`);
  }
}

module.exports = {
  createMovie,
  getAllMovies,
  getMovieById,
  updateMovie,
  deleteMovie,
};
