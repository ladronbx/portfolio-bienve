import React from "react";

export const Education = ({ title , academy, year, location}) => {
    return (
        <div className="project">
            <h3>{title}</h3>
            <h4>{academy}</h4>
            <p>{year}</p>
            <p>{location}</p>
        </div>
    );
};

