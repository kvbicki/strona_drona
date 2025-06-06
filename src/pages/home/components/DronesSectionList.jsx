import React from "react";
import DronesSectionItem from "./DronesSectionItem.jsx";
import { motion } from "framer-motion";

const DronesSectionList = ({ drones }) => {
  return (
    <motion.div
      className="drones-list"
      initial="hidden"
      whileInView="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.4 } } // dłuższe opóźnienie między elementami
      }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {drones.map(({ id, name, description, image }) => (
        <DronesSectionItem
          key={id}
          src={image}
          alt={name}
          description={description}
        />
      ))}
    </motion.div>
  );
};

export default DronesSectionList;
