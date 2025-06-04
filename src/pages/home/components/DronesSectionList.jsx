
import DronesSectionItem from "./DronesSectionItem.jsx";
import React from "react";

const DronesSectionList = ({drones}) =>{
    return (
        <div className="drones-list">
            {drones.map(({id, name, description, image}) => (
                <DronesSectionItem key={id} src={image} alt={name} description={description}/>
            ))}
        </div>
    )
};export default DronesSectionList;