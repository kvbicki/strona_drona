import React from "react";
import { motion } from "framer-motion";

const drones = [
  {
    id: 1,
    name: "Dron Phantom X",
    description: "Zaawansowany dron z kamerą 4K i stabilizacją obrazu.",
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    name: "Dron SkyMaster",
    description: "Idealny do fotografii i filmowania z powietrza.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    name: "Dron AeroFly",
    description: "Lekki i szybki, świetny dla początkujących.",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=600&q=80",
  },
];

const DronesSection = () => (
  <section id="drones" className="drones-section">
    <h2>Drony w naszej ofercie</h2>
    <div className="drones-list">
      {drones.map(({ id, name, description, image }) => (
        <motion.div
          key={id}
          className="drone-card"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img src={image} alt={name} />
          <h3>{name}</h3>
          <p>{description}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default DronesSection;
