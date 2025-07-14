import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-brand">
              <img src="/avh.png" alt="AVH Developments" className="footer-logo" />
              <span className="footer-title">AVH Developments</span>
            </div>
            <p className="footer-description">
              Professional Roblox game development services. 
              Fast, reliable, and trusted by major groups.
            </p>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-heading">Services</h3>
            <ul className="footer-links">
              <li><Link to="/pricing">Hospitals & Hotels</Link></li>
              <li><Link to="/pricing">Cafes & Restaurants</Link></li>
              <li><Link to="/pricing">Training Centers</Link></li>
              <li><Link to="/pricing">Events Centers</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-heading">Company</h3>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/past-products">Past Products</Link></li>
              <li><Link to="/pricing">Pricing</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-heading">Contact</h3>
            <div className="footer-contact">
              <p>Ready to start your project?</p>
              <p>DM us for custom quotes!</p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-stats">
            <span>550,629 Robux Revenue</span>
            <span>•</span>
            <span>32+ Projects Completed</span>
            <span>•</span>
            <span>3-4 Days Delivery</span>
          </div>
          <div className="footer-copyright">
            <p>&copy; 2024 AVH Developments. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 