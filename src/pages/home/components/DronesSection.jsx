import React from "react";
import DronesSectionList from "./DronesSectionList.jsx";
import { drones } from "../util/mock.js";
import "../styles/drones.css";
import Aurora from "./Aurora.jsx";
import { motion } from "framer-motion";

const DronesSection = () => {
  return (
    <>
      <Aurora
        colorStops={["#83A8D3", "#83A8D3", "#83A8D3"]}
        blend={0.05}
        amplitude={1.0}
        speed={0.5}
      />
      <section id="drones" className="drones-section">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Nasza oferta
        </motion.h2>
        <DronesSectionList drones={drones} />
      </section>
    </>
  );
};

export default DronesSection;
