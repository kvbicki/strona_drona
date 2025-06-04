import React from "react";
import "./styles/header.css"

const Header = () => (
  <header className="header">
    <h1>DroneShields</h1>
    <nav>
      <a href="#hero">Home</a>
      <a href="#drones">Projekt</a>
      <a href="#about">O nas</a>
      <a href="#contact">Kontakt</a>
    </nav>
  </header>
);

export default Header;
