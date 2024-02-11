import React, { useState } from "react";
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { FaTimes } from 'react-icons/fa';

import './Project.css';

export const Project = ({ title, description, longDescription, technologies, link, code, video, img1, img2, img3, img4, img5 }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [fullscreenImage, setFullscreenImage] = useState(null);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const openFullscreen = (image) => {
        setFullscreenImage(image);
    };

    const closeFullscreen = () => {
        setFullscreenImage(null);
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

            {fullscreenImage && (
                <div className="fixed top-0 left-0 z-50 w-full h-full bg-black bg-opacity-75 flex justify-center items-center" onClick={closeFullscreen}>
                    <div className="relative">
                        <button onClick={closeFullscreen} className="absolute top-0 right-0 m-4 text-red-600 hover:text-red-800">
                            <FaTimes className="w-6 h-6" />
                        </button>
                        <img src={fullscreenImage} alt={title} className="max-h-full max-w-full" />
                    </div>
                </div>
            )}

            <div className="flex justify-between items-center mb-4">
                <a href={link} target="_blank" rel="noreferrer" className="inline-block bg-gray-400 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-lg shadow-lg transition duration-300 ease-in-out no-underline uppercase">
                    Deploy
                </a>
                <button title="Add New" className="button" onClick={openModal}>
                    <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="20px" height="20px">
                        <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" fill="currentColor"></path>
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
                        <SwiperSlide><img src={img1} alt={title} className="w-full rounded-md" onClick={() => openFullscreen(img1)} /></SwiperSlide>
                        <SwiperSlide><img src={img2} alt={title} className="w-full rounded-md" onClick={() => openFullscreen(img2)} /></SwiperSlide>
                        <SwiperSlide><img src={img3} alt={title} className="w-full rounded-md" onClick={() => openFullscreen(img3)} /></SwiperSlide>
                        <SwiperSlide><img src={img4} alt={title} className="w-full rounded-md" onClick={() => openFullscreen(img4)} /></SwiperSlide>
                        <SwiperSlide><img src={img5} alt={title} className="w-full rounded-md" onClick={() => openFullscreen(img5)} /></SwiperSlide>
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
