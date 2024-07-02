// Example BookingService.js for handling movie booking operations
class BookingService {
    // Fetch available movies
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
  
    // Fetch movie details by ID
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
  
    // Fetch available seats for a specific movie and showtime
    async fetchAvailableSeats(movieId, showtime) {
      try {
        const response = await fetch(`http://localhost:3000/api/seats/${movieId}/${showtime}`);
        if (!response.ok) {
          throw new Error('Failed to fetch available seats');
        }
        const seats = await response.json();
        return seats;
      } catch (error) {
        console.error(`Error fetching available seats for movie ID ${movieId} and showtime ${showtime}:`, error.message);
        throw error;
      }
    }
  
    // Book tickets for selected seats
    async bookTickets(movieId, showtime, selectedSeats, userId) {
      try {
        const response = await fetch('http://localhost:3000/api/bookings', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            movieId,
            showtime,
            selectedSeats,
            userId,
          }),
        });
        if (!response.ok) {
          throw new Error('Failed to book tickets');
        }
        const bookingConfirmation = await response.json();
        return bookingConfirmation;
      } catch (error) {
        console.error('Error booking tickets:', error.message);
        throw error;
      }
    }
  
    // Fetch bookings for a specific user
    async fetchUserBookings(userId) {
      try {
        const response = await fetch(`http://localhost:3000/api/bookings/user/${userId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch user bookings');
        }
        const userBookings = await response.json();
        return userBookings;
      } catch (error) {
        console.error(`Error fetching bookings for user ID ${userId}:`, error.message);
        throw error;
      }
    }
  
    // Cancel a booking by booking ID
    async cancelBooking(bookingId) {
      try {
        const response = await fetch(`http://localhost:3000/api/bookings/${bookingId}`, {
          method: 'DELETE',
        });
        if (!response.ok) {
          throw new Error('Failed to cancel booking');
        }
        const cancellationResponse = await response.json();
        return cancellationResponse;
      } catch (error) {
        console.error(`Error cancelling booking ID ${bookingId}:`, error.message);
        throw error;
      }
    }
  }
  
  export default new BookingService();
  