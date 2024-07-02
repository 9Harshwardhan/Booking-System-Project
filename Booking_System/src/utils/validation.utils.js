// Example ValidationUtils.js for handling validation utilities
class ValidationUtils {
    // Validate email format
    static isValidEmail(email) {
      // Basic email validation using regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  
    // Validate password strength (at least 8 characters)
    static isValidPassword(password) {
      return password.length >= 8;
    }
  
    // Validate if value is a number
    static isNumber(value) {
      return !isNaN(parseFloat(value)) && isFinite(value);
    }
  
    // Validate if value is not empty
    static isNotEmpty(value) {
      return value.trim() !== '';
    }
  
    // Validate if value is a valid date
    static isValidDate(dateString) {
      // Basic date validation using regex for format YYYY-MM-DD
      const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
      if (!dateRegex.test(dateString)) return false;
      const date = new Date(dateString);
      return date instanceof Date && !isNaN(date);
    }
  }
  
  export default ValidationUtils;
  