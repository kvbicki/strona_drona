import React from "react";
import { motion } from "framer-motion";

const team = [
  {
    id: 1,
    name: "Szymon Kubicki",
    role: "Co-Founder & IT",
    photo:
      "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    name: "Jakub Kruczek",
    role: "Co-Founder & Embedded systems",
    photo:
      "./assets/KruczC:\Users\Szymon\Desktop\Programowanie\react\strona_drona\src\assets\Kruczek_Jakub.jpgek_Jakub.jpg",
  },
  {
    id: 3,
    name: "Krzysztof Kwapisz",
    role: "Co-Founder & Marketing",
    photo:
      "https://randomuser.me/api/portraits/women/65.jpg",
  },
];

const AboutSection = () => (
  <section id="about" className="about-section">
    <h2>O nas</h2>
    <p>
      Jesteśmy pasjonatami dronów i nowych technologii. Nasz zespół składa się z ekspertów, którzy
      dbają o najwyższą jakość usług i innowacyjne rozwiązania.
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
