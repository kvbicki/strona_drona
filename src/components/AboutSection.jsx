import React from "react";
import { motion } from "framer-motion";
import { team } from "./util/mock.js"
const AboutSection = () => (
  <section id="about" className="about-section">
    <h2>O nas</h2>
    <p>
      Jesteśmy zespołem młodych inżynierów mechatroników pasjonatów nowoczesnych technologii i rozwiązań militarnych. 
      Nasz startup powstał z chęci połączenia zaawansowanej technologii dronów z potrzebami współczesnego szkolenia wojskowego i taktycznego.
    </p>
    <div className="team">
      {team.map(({ id, name, role, photo }) => (
        <motion.div
          key={id}
          className="team-member"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img src={photo} alt={name} />
          <h3>{name}</h3>
          <p>{role}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default AboutSection;
