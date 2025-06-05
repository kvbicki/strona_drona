import React from "react";
import DronesSectionList from "./DronesSectionList.jsx";
import { drones } from "../util/mock.js";
import "../styles/drones.css";

const DronesSection = () => (
  <section id="drones" className="drones-section">
    <h2>Nasza oferta</h2>
    <DronesSectionList drones={drones} />
  </section>
);

export default DronesSection;
