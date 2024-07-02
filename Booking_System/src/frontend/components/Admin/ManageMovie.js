// Example function to fetch and display movies
async function fetchMovies() {
    try {
      const response = await fetch('http://localhost:3000/api/movies');
      if (!response.ok) {
        throw new Error('Failed to fetch movies');
      }
      const movies = await response.json();
      displayMovies(movies);
    } catch (error) {
      console.error('Error fetching movies:', error.message);
      // Handle fetch error, show error message to user, etc.
    }
  }
  
  // Function to display movies on the frontend
  function displayMovies(movies) {
    const moviesContainer = document.getElementById('movies-container');
    moviesContainer.innerHTML = ''; // Clear previous content
  
    movies.forEach(movie => {
      const movieElement = document.createElement('div');
      movieElement.classList.add('movie-item');
      movieElement.innerHTML = `
        <p><strong>Title:</strong> ${movie.title}</p>
        <p><strong>Genre:</strong> ${movie.genre}</p>
        <p><strong>Showtimes:</strong> ${movie.showtimes.join(', ')}</p>
        <button class="edit-btn" data-movie-id="${movie.id}">Edit</button>
        <button class="delete-btn" data-movie-id="${movie.id}">Delete</button>
      `;
  
      // Event listener for edit button
      const editButton = movieElement.querySelector('.edit-btn');
      editButton.addEventListener('click', () => {
        const movieId = editButton.getAttribute('data-movie-id');
        // Implement logic to edit movie (e.g., redirect to edit page)
        console.log(`Edit movie ID ${movieId}`);
      });
  
      // Event listener for delete button
      const deleteButton = movieElement.querySelector('.delete-btn');
      deleteButton.addEventListener('click', async () => {
        const movieId = deleteButton.getAttribute('data-movie-id');
        if (confirm(`Are you sure you want to delete movie ID ${movieId}?`)) {
          try {
            // Send request to delete movie to backend
            const response = await fetch(`http://localhost:3000/api/movies/${movieId}`, {
              method: 'DELETE'
            });
  
            if (!response.ok) {
              throw new Error('Failed to delete movie');
            }
  
            // Optionally handle success message or refresh movies list
            alert('Movie deleted successfully!');
            fetchMovies(); // Refresh movies list after deletion
          } catch (error) {
            console.error('Error deleting movie:', error.message);
            // Handle delete movie error, show error message to user, etc.
          }
        }
      });
  
      moviesContainer.appendChild(movieElement);
    });
  }
  
  // Example usage: Fetch and display movies when the page loads
  document.addEventListener('DOMContentLoaded', () => {
    fetchMovies();
  });
  