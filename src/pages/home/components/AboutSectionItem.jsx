import {motion} from "framer-motion";
import React from "react";

const AboutSectionItem = (props) => {
    return (
        <>
            <motion.div

                className="team-member"
                whileHover={{scale: 1.1}}
                transition={{type: "spring", stiffness: 300}}
            >
                <img src={props.src} alt={props.alt}/>
                <h3>{props.alt}</h3>
                <p>{props.role}</p>
            </motion.div>
        </>)
}
export default AboutSectionItem;