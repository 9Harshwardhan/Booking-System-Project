// Example function to fetch and display bookings
async function fetchBookings() {
    try {
      const response = await fetch('http://localhost:3000/api/bookings');
      if (!response.ok) {
        throw new Error('Failed to fetch bookings');
      }
      const bookings = await response.json();
      displayBookings(bookings);
    } catch (error) {
      console.error('Error fetching bookings:', error.message);
      // Handle fetch error, show error message to user, etc.
    }
  }
  
  // Function to display bookings on the frontend
  function displayBookings(bookings) {
    const bookingsContainer = document.getElementById('bookings-container');
    bookingsContainer.innerHTML = ''; // Clear previous content
  
    bookings.forEach(booking => {
      const bookingElement = document.createElement('div');
      bookingElement.classList.add('booking-item');
      bookingElement.innerHTML = `
        <p><strong>Movie:</strong> ${booking.movie}</p>
        <p><strong>Seats:</strong> ${booking.seats.join(', ')}</p>
        <p><strong>Showtime:</strong> ${booking.showtime}</p>
        <p><strong>Total Price:</strong> ${booking.totalPrice}</p>
        <button class="edit-btn" data-booking-id="${booking.id}">Edit</button>
        <button class="cancel-btn" data-booking-id="${booking.id}">Cancel</button>
      `;
  
      // Event listener for edit button
      const editButton = bookingElement.querySelector('.edit-btn');
      editButton.addEventListener('click', () => {
        const bookingId = editButton.getAttribute('data-booking-id');
        // Implement logic to edit booking (e.g., redirect to edit page)
        console.log(`Edit booking ID ${bookingId}`);
      });
  
      // Event listener for cancel button
      const cancelButton = bookingElement.querySelector('.cancel-btn');
      cancelButton.addEventListener('click', async () => {
        const bookingId = cancelButton.getAttribute('data-booking-id');
        try {
          // Send request to cancel booking to backend
          const response = await fetch(`http://localhost:3000/api/bookings/${bookingId}`, {
            method: 'DELETE'
          });
  
          if (!response.ok) {
            throw new Error('Failed to cancel booking');
          }
  
          // Optionally handle success message or refresh bookings list
          alert('Booking canceled successfully!');
          fetchBookings(); // Refresh bookings list after cancellation
        } catch (error) {
          console.error('Error canceling booking:', error.message);
          // Handle cancel booking error, show error message to user, etc.
        }
      });
  
      bookingsContainer.appendChild(bookingElement);
    });
  }
  
  // Example usage: Fetch and display bookings when the page loads
  document.addEventListener('DOMContentLoaded', () => {
    fetchBookings();
  });
  