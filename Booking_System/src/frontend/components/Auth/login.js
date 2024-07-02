// Assuming you have some form of event listener to trigger the login process
document.getElementById('login-form').addEventListener('submit', async function(event) {
    event.preventDefault();
  
    const email = document.getElementById('email-input').value;
    const password = document.getElementById('password-input').value;
  
    try {
      // Send login credentials to backend for authentication
      const response = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });
  
      if (!response.ok) {
        throw new Error('Login failed');
      }
  
      const data = await response.json();
      // Assuming you receive a token upon successful login
      const token = data.token;
  
      // Store token in localStorage or sessionStorage for future authenticated requests
      localStorage.setItem('token', token);
  
      // Redirect or perform any actions after successful login
      window.location.href = '/dashboard.html'; // Redirect to dashboard or home page
    } catch (error) {
      console.error('Login error:', error.message);
      // Handle login error, show error message to user, etc.
    }
  });
s  