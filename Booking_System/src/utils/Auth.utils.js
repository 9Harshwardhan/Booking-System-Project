// Example AuthUtils.js for handling authentication utilities
class AuthUtils {
    // Save auth token to localStorage
    static saveAuthToken(token) {
      localStorage.setItem('authToken', token);
    }
  
    // Retrieve auth token from localStorage
    static getAuthToken() {
      return localStorage.getItem('authToken');
    }
  
    // Remove auth token from localStorage
    static removeAuthToken() {
      localStorage.removeItem('authToken');
    }
  
    // Check if user is authenticated
    static isAuthenticated() {
      const authToken = localStorage.getItem('authToken');
      return !!authToken; // Double negation to coerce to boolean
    }
  }
  
  export default AuthUtils;
  