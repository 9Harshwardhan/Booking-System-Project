// Import necessary modules and models
const User = require('../models/User');
const Movie = require('../models/Movie');
const Booking = require('../models/Booking');
const { validationResult } = require('express-validator');

// Example controller methods
const adminController = {
  // Get all users
  getUsers: async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      console.error('Error fetching users:', error);
      res.status(500).json({ message: 'Server error' });
    }
  },

  // Create a new movie
  createMovie: async (req, res) => {
    // Validate input
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Extract movie details from request body
    const { title, genre, description, duration } = req.body;

    try {
      // Check if the movie already exists
      let movie = await Movie.findOne({ title });
      if (movie) {
        return res.status(400).json({ message: 'Movie already exists' });
      }

      // Create new movie instance
      movie = new Movie({
        title,
        genre,
        description,
        duration,
      });

      // Save movie to database
      await movie.save();
      res.json({ message: 'Movie created successfully', movie });
    } catch (error) {
      console.error('Error creating movie:', error);
      res.status(500).json({ message: 'Server error' });
    }
  },

  // Update a movie
  updateMovie: async (req, res) => {
    // Validate input
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Extract updated movie details from request body
    const { title, genre, description, duration } = req.body;
    const movieId = req.params.id;

    try {
      // Find the movie by ID
      let movie = await Movie.findById(movieId);
      if (!movie) {
        return res.status(404).json({ message: 'Movie not found' });
      }

      // Update movie details
      movie.title = title;
      movie.genre = genre;
      movie.description = description;
      movie.duration = duration;

      // Save updated movie to database
      await movie.save();
      res.json({ message: 'Movie updated successfully', movie });
    } catch (error) {
      console.error('Error updating movie:', error);
      res.status(500).json({ message: 'Server error' });
    }
  },

  // Delete a movie
  deleteMovie: async (req, res) => {
    const movieId = req.params.id;

    try {
      // Find the movie by ID and delete
      await Movie.findByIdAndDelete(movieId);
      res.json({ message: 'Movie deleted successfully' });
    } catch (error) {
      console.error('Error deleting movie:', error);
     
    }}}