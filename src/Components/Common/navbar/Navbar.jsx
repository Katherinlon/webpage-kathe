import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${isOpen ? 'active' : ''}`}>
      <div className="navbar-container">
        <div className={`nav-toggle ${isOpen ? 'active' : ''}`} onClick={toggleNavbar}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#Nosotros">Nosotros</a></li>
          <li><a href="#Contacto">Contacto</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
