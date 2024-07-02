// Assuming you have some form of function to handle payment submission
document.getElementById('payment-form').addEventListener('submit', async function(event) {
    event.preventDefault();
  
    // Retrieve form data
    const name = document.getElementById('name-input').value;
    const email = document.getElementById('email-input').value;
    const cardNumber = document.getElementById('card-number-input').value;
    const expiryDate = document.getElementById('expiry-date-input').value;
    const cvv = document.getElementById('cvv-input').value;
    const amount = calculateTotalAmount(); // Implement your logic to calculate total amount
  
    try {
      // Send payment details to backend for processing
      const response = await fetch('http://localhost:3000/api/payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, cardNumber, expiryDate, cvv, amount })
      });
  
      if (!response.ok) {
        throw new Error('Payment failed');
      }
  
      // Optionally handle success message or redirect to confirmation page
      alert('Payment successful!');
  
      // Redirect to booking confirmation or home page after successful payment
      window.location.href = '/confirmation.html'; // Redirect to confirmation page
    } catch (error) {
      console.error('Payment error:', error.message);
      // Handle payment error, show error message to user, etc.
    }
  });
  
  // Function to calculate total amount (replace with your actual logic)
  function calculateTotalAmount() {
    // Example logic: sum of selected seats prices or fixed amount
    return 50; // Replace with your actual calculation
  }
  