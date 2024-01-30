import React from "react";

export const Experience = (title, description, time) => {
    return (
        <>
        <h2>{title}</h2>
        <h3>{description}</h3>
        <h3>{time}</h3>
        </>
    );
}