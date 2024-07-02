// Assuming you have some form of event listener to trigger the registration process
document.getElementById('register-form').addEventListener('submit', async function(event) {
    event.preventDefault();
  
    const name = document.getElementById('name-input').value;
    const email = document.getElementById('email-input').value;
    const password = document.getElementById('password-input').value;
  
    try {
      // Send registration data to backend for user creation
      const response = await fetch('http://localhost:3000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, password })
      });
  
      if (!response.ok) {
        throw new Error('Registration failed');
      }
  
      // Optionally handle success message or redirect to login page
      alert('Registration successful! Please login to continue.');
  
      // Redirect to login page after successful registration
      window.location.href = '/login.html'; // Redirect to login page
    } catch (error) {
      console.error('Registration error:', error.message);
      // Handle registration error, show error message to user, etc.
    }
  });
  