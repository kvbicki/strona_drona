import React from "react";
import DronesSectionList from "./DronesSectionList.jsx";
import {drones} from "./util/mock.js";




const DronesSection = () => (
  <section id="drones" className="drones-section">
    <h2>Drony w naszej ofercie</h2>
    <DronesSectionList drones={drones}/>
  </section>
);

export default DronesSection;
