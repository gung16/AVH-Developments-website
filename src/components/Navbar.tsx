import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img src="/avh.png" alt="AVH Developments" className="navbar-logo" />
          <span className="navbar-title">AVH Developments</span>
        </Link>
        
        <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <Link 
            to="/" 
            className={`navbar-link ${isActive('/') ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/past-products" 
            className={`navbar-link ${isActive('/past-products') ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Past Products
          </Link>
          <Link 
            to="/pricing" 
            className={`navbar-link ${isActive('/pricing') ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Pricing
          </Link>
        </div>
        
        <button 
          className="navbar-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar; 