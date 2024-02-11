import React from "react";
import { Project } from '../Project/Project';

import videoKatana from '../../assets/build/img-projects/demo-katana.mp4';
import videoMaster from '../../assets/build/img-projects/demo-master.mp4';
import videoMoto from '../../assets/build/img-projects/demo-moto.mp4';
import videoTattoo from '../../assets/build/img-projects/demo-tattoo.mp4';
import videoNsw from '../../assets/build/img-projects/demo-nsw.mp4';
import imgKatana1 from '../../assets/build/img-projects/img-katana1.png';
import imgKatana2 from '../../assets/build/img-projects/img-katana2.png';
import imgMaster1 from '../../assets/build/img-projects/img-master1.png';
import imgMaster2 from '../../assets/build/img-projects/img-master2.png';
import imgMoto1 from '../../assets/build/img-projects/img-moto1.png';
import imgMoto2 from '../../assets/build/img-projects/img-moto2.png';
import imgTattoo1 from '../../assets/build/img-projects/img-tattoo-home.png';
import imgTattoo2 from '../../assets/build/img-projects/img-tattoo-login.png';
import imgTattoo3 from '../../assets/build/img-projects/panel-super-admin.png';
import imgTattoo4 from '../../assets/build/img-projects/img-tattoo-getallusers.png';
import imgTattoo5 from '../../assets/build/img-projects/img-tattoo-galeria.png';
import imgNsw1 from '../../assets/build/img-projects/img-nsw1.png';
import imgNsw2 from '../../assets/build/img-projects/img-nsw2.png';
import imgNsw3 from '../../assets/build/img-projects/img-nsw3.png';
import imgNsw4 from '../../assets/build/img-projects/img-nsw4.png';
import imgNsw5 from '../../assets/build/img-projects/img-nsw5.png';

export const GroupProjects = () => {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">


                < Project
                    title='Katana Sushi - Restaurante japonés'
                    description='Se trata de una carta de restaurante con ambiente japonés'
                    technologies={['HTML', 'CSS', 'JavaScript']}
                    link='https://ladronbx.github.io/katanasushi/'
                    code='https://github.com/ladronbx/katanasushi'
                    video={videoKatana}
                    img1={imgKatana1}
                    img2={imgKatana2}
                    img3={imgKatana1}
                    img4={imgKatana2}
                    img5={imgKatana1}
                />

                <Project
                    title='Mastermind'
                    description='Juego de lógica Mastermind'
                    technologies={['HTML', 'CSS', 'JavaScript']}
                    link='https://ladronbx.github.io/mastermind/'
                    code='https://github.com/ladronbx/mastermind'
                    video={videoMaster}
                    img1={imgMaster1}
                    img2={imgMaster2}
                    img3={imgMaster1}
                    img4={imgMaster2}
                    img5={imgMaster1}
                />

                <Project
                    title='Maquetación de Página de producto'
                    description='Maquetación de una página de producto para motos.'
                    technologies={['React', 'Vite', 'Tailwind CSS']}
                    link='https://main.d3n1an862zdtsv.amplifyapp.com/'
                    code='https://github.com/ladronbx/react-swiper-tailwind-moto'
                    video={videoMoto}
                    img1={imgMoto1}
                    img2={imgMoto2}
                    img3={imgMoto1}
                    img4={imgMoto2}
                    img5={imgMoto1}
                />

                <Project
                    title='Tatto studio gestión citas'
                    description='Aplicación para gestionar citas en un estudio de tatuajes'
                    technologies={['React', 'CSS', 'Typescript', 'Node.js', 'Express', 'SQL']}
                    link='https://main.d3dpmgzgjyqa56.amplifyapp.com/'
                    code='https://github.com/ladronbx/tattoo-studio-frontend-react'
                    video={videoTattoo}
                    img1={imgTattoo1}
                    img2={imgTattoo2}
                    img3={imgTattoo3}
                    img4={imgTattoo4}
                    img5={imgTattoo5}
                />


                <Project
                    title="Nintendo Switch Interactiva"
                    description="Un desafío construir el diseño de la consonla con código HTML y CSS"
                    technologies={['HTML', 'CSS']}
                    link='https://ladronbx.github.io/nintendo-switch-interactiva/'
                    code='https://github.com/ladronbx/nintendo-switch-interactiva'
                    video={videoNsw}
                    img1={imgNsw1}
                    img2={imgNsw2}
                    img3={imgNsw3}
                    img4={imgNsw4}
                    img5={imgNsw5}
                />


                <Project
                    title='Itinera'
                    description='Aplicación web para gestionar itinerarios de viajes'
                    technologies={['React', 'CSS', 'JavaScript', 'Node.js', 'PHP', 'Laravel', 'SQL']}
                    link='https://github.com/ladronbx/itinera-proyecto-final-react'
                    code='https://github.com/ladronbx/itinera-proyecto-final-react'
                    video={videoKatana}
                    img1={imgKatana1}
                    img2={imgKatana2}
                />

                <Project
                    title='Game room'
                    description='Una aplicación web LFG (Looking for Group), que permite contactar entre usuarios para formar grupos y jugar videojuegos como actividad de ocio afterwork.'
                    longDescription='Aplicación web LFG que permita a los usuarios registrarse, autenticarse, crear y unirse a partidas de videojuegos, así como intercambiar mensajes en un chat común. El objetivo es fomentar la socialización y compartir momentos de ocio.'
                    technologies={['PHP', 'Node.js', 'Laravel', 'SQL']}
                    link='https://github.com/ladronbx/GameRoom-LFG-PGP-Laravel.git'
                    video={videoKatana}
                    img1={imgKatana1}
                    img2={imgKatana2}
                />

            </div>

        </>
    );
};