import React, { useState } from "react";
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

export const Project = ({ title, description, longDescription, technologies, link, code, video, img1, img2 }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="bg-white rounded-lg shadow-md p-6 relative h-[650px]">
            <h3 className="text-xl font-semibold mb-2 h-[50px]">{title}</h3>
            <p className="text-gray-700 mb-4 h-[100px]">{description}</p>
            <div className="h-[40px]">
                <button onClick={openModal} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
                    Open Video Demo
                </button>
            </div>

            {isModalOpen && (
                <div className="fixed top-0 left-0 z-50 w-full h-full bg-black bg-opacity-75 flex justify-center items-center">
                    <div className="bg-white p-4 rounded-lg">
                        <video controls autoPlay className="w-full">
                            <source src={video} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <button onClick={closeModal} className="block mt-4 bg-gray-200 text-gray-600 px-4 py-2 rounded-md hover:bg-gray-300 transition duration-300">
                            Close Video
                        </button>
                    </div>
                </div>
            )}

            <div className="h-[250px]">

                <div className="flex justify-center align-middle m-[20px]">
                    <Swiper
                        spaceBetween={30}
                        modules={[Autoplay, Navigation]}
                        className="h-[250px]"
                    >
                        <SwiperSlide><img src={img1} alt={title} className="w-full rounded-md" /></SwiperSlide>
                        <SwiperSlide><img src={img2} alt={title} className="w-full rounded-md" /></SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <div className="flex justify-between items-center mb-4 h-[150px">
                <a href={link} target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">
                    See Project
                </a>
                <a href={code} target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">
                    See Code
                </a>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
                {technologies.map((tech, index) => (
                    <span key={index} className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md">{tech}</span>
                ))}
            </div>


        </div>
    );
};
