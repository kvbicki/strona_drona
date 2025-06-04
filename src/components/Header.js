import React from "react";

const Header = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.logo}>DroneStartup</h1>
      <nav>
        <ul style={styles.navList}>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    background: "#0c2340",
    color: "#fff",
    padding: "1rem 2rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    margin: 0,
  },
  navList: {
    listStyle: "none",
    display: "flex",
    gap: "1rem",
    margin: 0,
    padding: 0,
  },
};

export default Header;
