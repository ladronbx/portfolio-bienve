import React, { useState } from "react";
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { FaTimes } from 'react-icons/fa';

import './Project.css';

export const Project = ({ title, description, longDescription, technologies, link, code, video, img1, img2, img3, img4, img5 }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="bg-white rounded-lg shadow-md p-6 relative h-[700px]">
            <h3 className="text-xl font-semibold mb-2 h-[50px]">{title}</h3>
            <p className="text-gray-700 mb-4 h-[100px]">{description}</p>

            {isModalOpen && (
                <div className="fixed top-0 left-0 z-50 w-full h-full bg-black bg-opacity-75 flex justify-center items-center">
                    <div className="bg-white p-4 rounded-lg">
                        <div className="flex justify-between items-center mb-4">
                            <a href={link} target="_blank" rel="noreferrer" className="no-underline">
                                Deploy
                            </a>
                            <a href={code} target="_blank" rel="noreferrer" className="no-underline">
                                Código
                            </a>
                            <button onClick={closeModal} className="flex items-center text-red-600 hover:text-red-800">
                                <FaTimes className="mr-2" />
                                Close
                            </button>
                        </div>
                        <video controls autoPlay className="w-full">
                            <source src={video} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            )}

            <div className="flex justify-between items-center mb-4">
                <a href={link} target="_blank" rel="noreferrer" className="inline-block bg-gray-400 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-lg shadow-lg transition duration-300 ease-in-out no-underline uppercase">
                    Deploy
                </a>
                <button title="Add New" className="group cursor-pointer outline-none duration-300" onClick={openModal}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 24 24" className="stroke-green-400 fill-none group-hover:fill-green-100 group-active:stroke-green-200 group-active:fill-green-100 group-active:duration-0 duration-300 hover:rotate-90">
                        <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" strokeWidth="1.5"></path>
                        <path d="M8 12H16" strokeWidth="1.5"></path>
                        <path d="M12 16V8" strokeWidth="1.5"></path>
                    </svg>
                </button>

                <a href={code} target="_blank" rel="noreferrer" className="inline-block bg-gray-400  hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-lg shadow-lg transition duration-300 ease-in-out no-underline uppercase">
                    Código
                </a>
            </div>

            <div className="h-[300px]">
                <div className="flex justify-center align-middle mt-[20px]">
                    <Swiper
                        spaceBetween={30}
                        modules={[Navigation]}
                        navigation={true}
                        className=""
                    >
                        <SwiperSlide><img src={img1} alt={title} className="w-full rounded-md" /></SwiperSlide>
                        <SwiperSlide><img src={img2} alt={title} className="w-full rounded-md" /></SwiperSlide>
                        <SwiperSlide><img src={img3} alt={title} className="w-full rounded-md" /></SwiperSlide>
                        <SwiperSlide><img src={img4} alt={title} className="w-full rounded-md" /></SwiperSlide>
                        <SwiperSlide><img src={img5} alt={title} className="w-full rounded-md" /></SwiperSlide>
                    </Swiper>
                </div>
            </div>


            <div className="flex flex-wrap gap-2 mt-4">
                {technologies.map((tech, index) => (
                    <span key={index} className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md">{tech}</span>
                ))}
            </div>
        </div>
    );
};
