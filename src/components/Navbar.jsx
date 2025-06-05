import React, { useState } from "react";
import "./styles/navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="navbar">
      <h1>Drone Shields</h1>

      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>

      <ul className={`nav-menu ${isOpen ? "open" : ""}`}>
        <li><a href="#hero" onClick={handleLinkClick}>Home</a></li>
        <li><a href="#drones" onClick={handleLinkClick}>Oferta</a></li>
        <li><a href="#about" onClick={handleLinkClick}>O nas</a></li>
        <li><a href="#contact" onClick={handleLinkClick}>Contact</a></li>
      </ul>

    </div>
  );
};

export default Navbar;
