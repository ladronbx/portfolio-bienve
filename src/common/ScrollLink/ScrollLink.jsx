import React from "react";
import { Link } from "react-scroll";

export const ScrollLink = ({ to, text, customClass,customContainerClass }) => {
    return (
        <div className={`animate-bounce hover:animate-none ${customContainerClass}`}>
        <Link
            to={to}
            smooth={true}
            duration={200}
            offset={0}
            className={`cursor-pointer bg-gray-800 rounded-md text-white tracking-wider shadow-xl animate-bounce hover:animate-none no-underline p-1 py-2 ${customClass}`}
        >

            <svg
                className="w-5 h-5 inline-block m-[10px]"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                ></path>
            </svg>
                        {text}
        </Link></div>
    );
}
