import {motion} from "framer-motion";
const DronesSectionItem = ({src, alt, description}) => {
    return (<>
        <motion.div

            className="drone-card"
            whileHover={{scale: 1.05}}
            transition={{type: "spring", stiffness: 300}}
        >
            <img src={src} alt={alt}/>
            <h3>{alt}</h3>
            <p>{description}</p>
        </motion.div>
    </>)
}
export default DronesSectionItem;