const express = require('express');
const router = express.Router();
const movieController = require('../controllers/Movie.controller');
const authMiddleware = require('../middleware/authMiddleware');
const { adminAuth } = require('../middleware/adminAuthMiddleware');

// Middleware to authenticate and authorize admin
router.use(authMiddleware); // Example authentication middleware
router.use(adminAuth); // Example admin authorization middleware

// Routes for movie management
router.post('/', movieController.createMovie);
router.get('/', movieController.getAllMovies);
router.get('/:id', movieController.getMovieById);
router.put('/:id', movieController.updateMovie);
router.delete('/:id', movieController.deleteMovie);

module.exports = router;
