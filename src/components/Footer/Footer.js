import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>News Categories</h3>
          <ul>
            <li><Link to="/business">Business</Link></li>
            <li><Link to="/entertainment">Entertainment</Link></li>
            <li><Link to="/health">Health</Link></li>
            <li><Link to="/science">Science</Link></li>
            <li><Link to="/sports">Sports</Link></li>
            <li><Link to="/technology">Technology</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>About Us</h3>
          <p>Stay informed with the latest news from around the world. We bring you breaking news, in-depth coverage, and analysis from trusted sources.</p>
        </div>
        <div className="footer-section">
          <h3>Connect With Us</h3>
          <div className="social-links">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} News App. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 