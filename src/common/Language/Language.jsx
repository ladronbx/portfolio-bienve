import React from "react";

export const Language = ({ language, level }) => {
    return (
        <div className="language-style">
            <h3>{language}</h3>
            <p>{level}</p>
        </div>
    );
}