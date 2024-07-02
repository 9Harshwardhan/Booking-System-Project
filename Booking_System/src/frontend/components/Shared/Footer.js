// Example Footer.js component in React
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h3>Contact Us</h3>
            <p>Email: contact@example.com</p>
            <p>Phone: +1 123-456-7890</p>
          </div>
          <div className="footer-nav">
            <ul>
              <li><a href="/privacy-policy">Privacy Policy</a></li>
              <li><a href="/terms-of-service">Terms of Service</a></li>
              {/* Add more legal links or navigation links as needed */}
            </ul>
          </div>
          <div className="footer-social">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="https://twitter.com/example" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://facebook.com/example" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook"></i>
              </a>
              {/* Add more social media links/icons as needed */}
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Movie Booking System. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
