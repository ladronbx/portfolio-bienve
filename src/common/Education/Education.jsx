import React from "react";

export const Education = ({ title , academy, year, location}) => {
    return (
        <div className="text-green-100">
            <h5>{title} - {academy}</h5>
            <p>{year} {location}</p>
            <p></p>
        </div>
    );
};

