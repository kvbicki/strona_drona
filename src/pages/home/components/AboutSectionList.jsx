
import React from "react";
import AboutSectionItem from "./AboutSectionItem.jsx";

const AboutSectionList = ({team}) => {
    return (
        <div className="team">
            {team.map(({id, name, role, photo}) => (
                <AboutSectionItem key={id} src={photo} alt={name} role={role}/>
            ))}
        </div>
    )
};export default AboutSectionList;