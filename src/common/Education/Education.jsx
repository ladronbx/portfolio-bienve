import React from "react";

export const Education = ({ title , academy, year, location}) => {
    return (
        <div className="education-style  text-black">
            <h5>{title} - {academy}</h5>
            <p>{year} {location}</p>
            <p></p>
        </div>
    );
};

