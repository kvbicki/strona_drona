import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>&copy; {new Date().getFullYear()} DroneStartup. All rights reserved.</p>
    </footer>
  );
};

const styles = {
  footer: {
    background: "#0c2340",
    color: "#fff",
    textAlign: "center",
    padding: "1rem",
    marginTop: "auto",
  },
};

export default Footer;
