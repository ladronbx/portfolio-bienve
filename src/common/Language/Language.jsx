import React from "react";

export const Language = ({ language, level }) => {
    return (
        <div className="language-style text-lg  text-green-100">
            {language} - {level}
        </div>
    );
}