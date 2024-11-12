import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Close the menu when a link is clicked
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src="path/to/your/logo.png" alt="Logo" />
      </div>
      <button className="menu-toggle" onClick={toggleMenu}>
        {menuOpen ? '✕' : '☰'}
      </button>
      <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
        <ul>
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/login" onClick={closeMenu}>Login</Link></li>
          <li><Link to="/venue" onClick={closeMenu}>Venues</Link></li>
          <li><Link to="/venue-specific" onClick={closeMenu}>Venue Specific</Link></li>
          <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

