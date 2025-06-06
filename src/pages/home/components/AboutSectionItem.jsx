import {motion} from "framer-motion";
import React from "react";
import FlipCard from "./FlipCard.jsx";
import TeamMemberCard from "./TeamMemberCard.jsx";
import SocialsCard from "./SocialsCard.jsx";

const AboutSectionItem = (props) => {
    return (
        <FlipCard
            awers={<TeamMemberCard link={props.src} alt={props.alt} role={props.role}/>}
            rewers={<SocialsCard socials={props.socials}/>}
        />)
}
export default AboutSectionItem;