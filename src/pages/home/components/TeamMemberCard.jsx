import {motion} from "framer-motion";
import React from "react";

const TeamMemberCard = ({link, alt, role}) =>{
    return (
        <motion.div

            className="team-member"
            whileHover={{scale: 1.1}}
            transition={{type: "spring", stiffness: 300}}
        >
            <img src={link} alt={alt}/>
            <h3>{alt}</h3>
            <p>{role}</p>
        </motion.div>
    )
};export default TeamMemberCard;