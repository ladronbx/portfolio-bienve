import React from "react";
import { Link } from "react-scroll";

export const ScrollLink = ({ to, text }) => {
    return (

        <Link
            to={to}
            smooth={true}
            duration={200}
            offset={-50}
            className={"inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"}
        >{text}</Link>
    );
}