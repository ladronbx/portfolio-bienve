import React from "react";

export const Language = ({ language, level }) => {
    return (
        <div className="language">
            <h3>{language}</h3>
            <p>{level}</p>
        </div>
    );
}