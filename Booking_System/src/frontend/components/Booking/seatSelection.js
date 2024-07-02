// Example data for seat availability (can be fetched from backend)
const seatData = {
    screen1: {
      rows: 5,
      seatsPerRow: 10,
      availableSeats: [
        { row: 1, seatNumber: 3 },
        { row: 2, seatNumber: 5 },
        // Add more available seats as needed
      ],
      bookedSeats: [
        { row: 3, seatNumber: 2 },
        // Add booked seats as needed
      ]
    },
    // Add more screens if applicable
  };
  
  // Function to initialize seat selection UI
  function initializeSeatSelection(screenId) {
    const screenData = seatData[screenId];
    const seatsContainer = document.getElementById('seats-container');
    seatsContainer.innerHTML = ''; // Clear previous content
  
    // Generate seats UI based on available and booked seats
    for (let row = 1; row <= screenData.rows; row++) {
      const rowElement = document.createElement('div');
      rowElement.classList.add('seat-row');
      for (let seatNumber = 1; seatNumber <= screenData.seatsPerRow; seatNumber++) {
        const seatElement = document.createElement('div');
        seatElement.classList.add('seat');
        seatElement.dataset.row = row;
        seatElement.dataset.seatNumber = seatNumber;
  
        // Check if seat is available or booked
        if (isSeatAvailable(screenId, row, seatNumber)) {
          seatElement.classList.add('available');
        } else if (isSeatBooked(screenId, row, seatNumber)) {
          seatElement.classList.add('booked');
          seatElement.setAttribute('disabled', true); // Optionally disable booked seats
        }
  
        seatElement.addEventListener('click', () => {
          if (seatElement.classList.contains('available')) {
            // Handle seat selection logic (e.g., toggle selection, update UI)
            seatElement.classList.toggle('selected');
          } else {
            alert('This seat is not available.');
          }
        });
  
        rowElement.appendChild(seatElement);
      }
      seatsContainer.appendChild(rowElement);
    }
  }
  
  // Function to check if a seat is available
  function isSeatAvailable(screenId, row, seatNumber) {
    const availableSeats = seatData[screenId].availableSeats;
    return availableSeats.some(seat => seat.row === row && seat.seatNumber === seatNumber);
  }
  
  // Function to check if a seat is already booked
  function isSeatBooked(screenId, row, seatNumber) {
    const bookedSeats = seatData[screenId].bookedSeats;
    return bookedSeats.some(seat => seat.row === row && seat.seatNumber === seatNumber);
  }
  
  // Example usage: Initialize seat selection for screen1
  initializeSeatSelection('screen1');
  