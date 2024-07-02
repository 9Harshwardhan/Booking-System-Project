// Example MovieService.js for handling movie CRUD operations
class MovieService {
    // Fetch all movies
    async fetchMovies() {
      try {
        const response = await fetch('http://localhost:3000/api/movies');
        if (!response.ok) {
          throw new Error('Failed to fetch movies');
        }
        const movies = await response.json();
        return movies;
      } catch (error) {
        console.error('Error fetching movies:', error.message);
        throw error;
      }
    }
  
    // Fetch movie by ID
    async fetchMovieById(movieId) {
      try {
        const response = await fetch(`http://localhost:3000/api/movies/${movieId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch movie details');
        }
        const movie = await response.json();
        return movie;
      } catch (error) {
        console.error(`Error fetching movie ID ${movieId}:`, error.message);
        throw error;
      }
    }
  
    // Add a new movie
    async addMovie(movieData) {
      try {
        const response = await fetch('http://localhost:3000/api/movies', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(movieData),
        });
        if (!response.ok) {
          throw new Error('Failed to add movie');
        }
        const newMovie = await response.json();
        return newMovie;
      } catch (error) {
        console.error('Error adding movie:', error.message);
        throw error;
      }
    }
  
    // Update an existing movie
    async updateMovie(movieId, movieData) {
      try {
        const response = await fetch(`http://localhost:3000/api/movies/${movieId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(movieData),
        });
        if (!response.ok) {
          throw new Error('Failed to update movie');
        }
        const updatedMovie = await response.json();
        return updatedMovie;
      } catch (error) {
        console.error(`Error updating movie ID ${movieId}:`, error.message);
        throw error;
      }
    }
  
    // Delete a movie by ID
    async deleteMovie(movieId) {
      try {
        const response = await fetch(`http://localhost:3000/api/movies/${movieId}`, {
          method: 'DELETE',
        });
        if (!response.ok) {
          throw new Error('Failed to delete movie');
        }
        const deletionResponse = await response.json();
        return deletionResponse;
      } catch (error) {
        console.error(`Error deleting movie ID ${movieId}:`, error.message);
        throw error;
      }
    }
  }
  
  export default new MovieService();
  