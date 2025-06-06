import { motion } from "framer-motion";

const DronesSectionItem = ({ src, alt, description }) => {
  return (
    <motion.div
      className="drone-card"
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 1, ease: "easeOut" }} 
      whileHover={{ scale: 1.05 }}
    >
      <img src={src} alt={alt} />
      <h3>{alt}</h3>
      <p>{description}</p>
    </motion.div>
  );
};

export default DronesSectionItem;
