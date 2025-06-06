
import React from "react";
import AboutSectionItem from "./AboutSectionItem.jsx";
import FlipCard from "./FlipCard.jsx";

const AboutSectionList = ({team}) => {
    return (
        <div className="team">
            {team.map(({id, name, role, photo}) => (
                <FlipCard
                    awers={<AboutSectionItem key={id} src={photo} alt={name} role={role}/>}
                    rewers={<AboutSectionItem key={id} src={photo} alt={name} role={role}/> }
                />
            ))}
        </div>
    )
};export default AboutSectionList;