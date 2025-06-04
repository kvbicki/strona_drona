import React from "react";
import { motion } from "framer-motion";
import { team } from "../util/mock.js"
import AboutSectionList from "./AboutSectionList.jsx";



const AboutSection = () => (
  <section id="about" className="about-section">
    <h2>O nas</h2>
    <p>
      Jesteśmy zespołem młodych inżynierów mechatroników pasjonatów nowoczesnych technologii i rozwiązań militarnych.
      Nasz startup powstał z chęci połączenia zaawansowanej technologii dronów z potrzebami współczesnego szkolenia wojskowego i taktycznego.
    </p>
    <AboutSectionList team={team}/>
  </section>
);

export default AboutSection;
