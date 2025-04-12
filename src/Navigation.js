// Navigation.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css'; // Create this file for styling

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navigation">
      <div className="hamburger" onClick={toggleMenu}>
        &#9776;
      </div>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li>
          <Link to="/" onClick={toggleMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={toggleMenu}>
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
```

```
/* Navigation.css */
/*.navigation {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #333;
  color: white;
  padding: 10px;
  z-index: 1000;
}

.hamburger {
  font-size: 24px;
  cursor: pointer;
  padding: 5px 10px;
}

.menu {
  list-style: none;
  padding: 0;
  margin: 0;
  display: none;
}

.menu.open {
  display: block;
}

.menu li {
  padding: 10px;
  text-align: center;
}

.menu a {
  color: white;
  text-decoration: none;
  font-size: 18px;
}

/* Basic animation */
/*.menu {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
}*/
/*
.menu.open {
  max-height: 200px; /* Adjust as needed */
// }