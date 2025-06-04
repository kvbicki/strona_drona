import React from "react";

const HeroSection = () => {
  return (
    <section style={styles.hero}>
      <h2 style={styles.heading}>Explore the World of Drones</h2>
      <p style={styles.text}>
        Cutting-edge drone technology to empower your business.
      </p>
      <button style={styles.button}>Learn More</button>
    </section>
  );
};

const styles = {
  hero: {
    background: "url('/drone-bg.jpg') center/cover no-repeat",
    color: "#fff",
    textAlign: "center",
    padding: "4rem 2rem",
  },
  heading: {
    fontSize: "2.5rem",
    marginBottom: "1rem",
  },
  text: {
    fontSize: "1.2rem",
    marginBottom: "1.5rem",
  },
  button: {
    background: "#ff6600",
    color: "#fff",
    border: "none",
    padding: "0.75rem 1.5rem",
    cursor: "pointer",
    fontSize: "1rem",
    borderRadius: "4px",
  },
};

export default HeroSection;
