import React from "react";

export const Language = ({ language, level }) => {
    return (
        <div className="language-style text-lg  text-black">
            {language} - {level}
        </div>
    );
}