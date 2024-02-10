import React from "react";
import { Link } from "react-scroll";

export const ScrollLink = ({ to, text }) => {
    return (
        <Link
            to={to}
            smooth={true}
            duration={200}
            offset={0}
            className={"mt-30 inline-block bg-cyan-700 hover:bg-cyan-500 hover:cursor-pointer text-white font-bold py-2 px-4 rounded no-underline text-center"}
        >
            {text}
        </Link>
    );
}
