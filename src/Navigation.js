// Navigation.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css'; // Create this file for styling

function Navigation() {
  const [isNavOpen, setNavOpen] = useState(false);

    const toggleNav = () => {
        setNavOpen(!isNavOpen);
    };
  return (
    <header>
      <div className={`nav-toggle ${isNavOpen ? 'open' : ''}`} onClick={toggleNav}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <nav className={`nav-links ${isNavOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/" onClick={toggleNav}>Home</Link></li>
          <li><Link to="/about" onClick={toggleNav}>About</Link></li>
          <li><Link to="/projects" onClick={toggleNav}>Projects</Link></li>
          <li><Link to="/cv" onClick={toggleNav}>CV</Link></li>
          <li><Link to="/contact" onClick={toggleNav}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;