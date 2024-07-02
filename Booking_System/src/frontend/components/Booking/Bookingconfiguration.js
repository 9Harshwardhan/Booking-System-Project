// Example data for screen configuration (can be fetched from backend)
const screenConfig = {
    screen1: {
      name: 'Screen 1',
      seatLimit: 60, // Maximum capacity for Screen 1
    },
    screen2: {
      name: 'Screen 2',
      seatLimit: 50, // Maximum capacity for Screen 2
    },
    // Add more screens as needed
  };
  
  // Function to initialize screen selection UI
  function initializeScreenSelection() {
    const screenSelect = document.getElementById('screen-select');
  
    // Populate screen options based on screenConfig
    Object.keys(screenConfig).forEach(screenId => {
      const option = document.createElement('option');
      option.value = screenId;
      option.textContent = screenConfig[screenId].name;
      screenSelect.appendChild(option);
    });
  
    // Event listener for screen selection change
    screenSelect.addEventListener('change', () => {
      const selectedScreenId = screenSelect.value;
      const seatLimit = screenConfig[selectedScreenId].seatLimit;
      enforceSeatLimit(seatLimit);
    });
  
    // Initialize with default screen selection (if needed)
    const defaultScreenId = Object.keys(screenConfig)[0];
    if (defaultScreenId) {
      screenSelect.value = defaultScreenId;
      enforceSeatLimit(screenConfig[defaultScreenId].seatLimit);
    }
  }
  
  // Function to enforce seat limit based on selected screen
  function enforceSeatLimit(seatLimit) {
    const seatsInput = document.getElementById('seats-input');
    seatsInput.setAttribute('max', seatLimit);
  }
  
  // Example usage: Initialize screen selection UI
  initializeScreenSelection();
  