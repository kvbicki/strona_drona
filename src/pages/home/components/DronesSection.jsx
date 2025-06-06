import React from "react";
import DronesSectionList from "./DronesSectionList.jsx";
import { drones } from "../util/mock.js";
import "../styles/drones.css";
import Aurora from "./Aurora.jsx"


const DronesSection = () => (
  <> <Aurora
  colorStops={["#83A8D3", "#83A8D3", "#83A8D3"]}
  blend={0.05}
  amplitude={1.0}
  speed={0.5}
/>
  <section id="drones" className="drones-section">
    <h2>Nasza oferta</h2>
    <DronesSectionList drones={drones} />
  </section>
  </>
);

export default DronesSection;