// Example AdminService.js for handling admin functionalities
import ApiService from './ApiService';

class AdminService {
  // Fetch all users
  async fetchUsers() {
    try {
      const users = await ApiService.get('http://localhost:3000/api/admin/users');
      return users;
    } catch (error) {
      console.error('Error fetching users:', error.message);
      throw error;
    }
  }

  // Fetch user by ID
  async fetchUserById(userId) {
    try {
      const user = await ApiService.get(`http://localhost:3000/api/admin/users/${userId}`);
      return user;
    } catch (error) {
      console.error(`Error fetching user ID ${userId}:`, error.message);
      throw error;
    }
  }

  // Update user details
  async updateUser(userId, userData) {
    try {
      const updatedUser = await ApiService.put(`http://localhost:3000/api/admin/users/${userId}`, userData);
      return updatedUser;
    } catch (error) {
      console.error(`Error updating user ID ${userId}:`, error.message);
      throw error;
    }
  }

  // Fetch all movies
  async fetchMovies() {
    try {
      const movies = await ApiService.get('http://localhost:3000/api/admin/movies');
      return movies;
    } catch (error) {
      console.error('Error fetching movies:', error.message);
      throw error;
    }
  }

  // Fetch movie by ID
  async fetchMovieById(movieId) {
    try {
      const movie = await ApiService.get(`http://localhost:3000/api/admin/movies/${movieId}`);
      return movie;
    } catch (error) {
      console.error(`Error fetching movie ID ${movieId}:`, error.message);
      throw error;
    }
  }

  // Add a new movie
  async addMovie(movieData) {
    try {
      const newMovie = await ApiService.post('http://localhost:3000/api/admin/movies', movieData);
      return newMovie;
    } catch (error) {
      console.error('Error adding movie:', error.message);
      throw error;
    }
  }

  // Update an existing movie
  async updateMovie(movieId, movieData) {
    try {
      const updatedMovie = await ApiService.put(`http://localhost:3000/api/admin/movies/${movieId}`, movieData);
      return updatedMovie;
    } catch (error) {
      console.error(`Error updating movie ID ${movieId}:`, error.message);
      throw error;
    }
  }

  // Delete a movie by ID
  async deleteMovie(movieId) {
    try {
      const deletionResponse = await ApiService.delete(`http://localhost:3000/api/admin/movies/${movieId}`);
      return deletionResponse;
    } catch (error) {
      console.error(`Error deleting movie ID ${movieId}:`, error.message);
      throw error;
    }
  }
}

export default new AdminService();
