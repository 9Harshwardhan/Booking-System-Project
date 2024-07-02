// Assuming you have some form of function to fetch movie data
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
  
    movies.forEach(movie => {
      const movieElement = document.createElement('div');
      movieElement.classList.add('movie-card');
      movieElement.innerHTML = `
        <h3>${movie.title}</h3>
        <p><strong>Genre:</strong> ${movie.genre}</p>
        <p><strong>Showtimes:</strong> ${movie.showtimes.join(', ')}</p>
        <button class="book-btn" data-movie-id="${movie.id}">Book Tickets</button>
      `;
      moviesContainer.appendChild(movieElement);
  
      // Assuming you have event listeners for booking buttons
      const bookButton = movieElement.querySelector('.book-btn');
      bookButton.addEventListener('click', () => {
        const movieId = bookButton.getAttribute('data-movie-id');
        // Implement logic to navigate to booking page with movieId or handle booking process
        console.log(`Book tickets for movie ID ${movieId}`);
      });
    });
  }
  
  // Call fetchMovies() to fetch and display movies when the page loads
  document.addEventListener('DOMContentLoaded', () => {
    fetchMovies();
  });
  