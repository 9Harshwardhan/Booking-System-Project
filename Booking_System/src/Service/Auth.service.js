// Example AuthService.js for handling user authentication
class AuthService {
    // Login method
    login(email, password) {
      // Replace with actual API endpoint for login
      return fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Login failed');
        }
        return response.json();
      })
      .then(data => {
        // Save token to localStorage or sessionStorage
        localStorage.setItem('accessToken', data.accessToken);
        return data;
      });
    }
  
    // Logout method
    logout() {
      // Clear token from localStorage or sessionStorage
      localStorage.removeItem('accessToken');
    }
  
    // Register method
    register(name, email, password) {
      // Replace with actual API endpoint for registration
      return fetch('http://localhost:3000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Registration failed');
        }
        return response.json();
      })
      .then(data => {
        // Optionally handle registration success (e.g., redirect to login)
        return data;
      });
    }
  
    // Check if user is authenticated
    isAuthenticated() {
      // Check if token exists in localStorage or sessionStorage
      return !!localStorage.getItem('accessToken');
    }
  }
  
  export default new AuthService();
  