import React, { useState } from 'react';
import './Navbar.css'; // Import your custom CSS

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <a href="/" className="navbar-logo">
          <span className="navbar-logo-text">
            Victorious <br /><h5>computer institute</h5>
          </span>
        </a>

        {/* Hamburger Icon */}
        <div className="hamburger" onClick={toggleMenu}>
          <div className={`bar ${isOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        </div>

        {/* Desktop Nav */}
        <div className={`navbar-links ${isOpen ? 'open' : ''}`} id="navbar-sticky">
          <ul className="navbar-links-list">
            <li><a href="/" className="navbar-link active">Home</a></li>
            <li><a href="/courses" className="navbar-link">Cources</a></li>
            <li><a href="/labrary" className="navbar-link">Library</a></li>
            <li><a href="/about" className="navbar-link">About</a></li>
            <li><a href="/contact" className="navbar-link">Contact</a></li>
            <button className='get-started-btn '>Login/Register</button>
          </ul>
         
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu open" id="navbar-sticky-mobile">
          <ul className="mobile-menu-list">
            <li><a href="/" className="mobile-menu-item">Home</a></li>
            <li><a href="/library" className="mobile-menu-item">Library</a></li>
            <li><a href="/about" className="mobile-menu-item">About</a></li>
            <li><a href="/courses" className="mobile-menu-item">Services</a></li>
            <li><a href="/contact" className="mobile-menu-item">Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
