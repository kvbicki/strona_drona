import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => (
  <section id="hero" className="hero">
    <motion.h2
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      Odkryj świat dronów z DronyPro
    </motion.h2>
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1 }}
    >
      Najnowsze technologie, najlepsze zdjęcia z powietrza.
    </motion.p>
    <motion.img
      src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
      alt="Dron w locie"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, duration: 1 }}
      className="hero-image"
    />
  </section>
);

export default HeroSection;
