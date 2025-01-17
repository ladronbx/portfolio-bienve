import React from "react";
import { Project } from '../Project/Project';

import videoKatana from '../../assets/build/img-projects/demo-katana.mp4';
import videoMaster from '../../assets/build/img-projects/demo-master.mp4';
import videoMoto from '../../assets/build/img-projects/demo-moto.mp4';
import videoTattoo from '../../assets/build/img-projects/demo-tattoo.mp4';
import videoNsw from '../../assets/build/img-projects/demo-nsw.mp4';
import videoItinera from '../../assets/build/img-projects/demo-itinera.mp4';
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
import imgItinera1 from '../../assets/build/img-projects/img-itinera1.png';
import imgItinera2 from '../../assets/build/img-projects/img-itinera2.png';
import imgItinera3 from '../../assets/build/img-projects/img-itinera3.png';
import imgItinera4 from '../../assets/build/img-projects/img-itinera4.png';
import imgItinera5 from '../../assets/build/img-projects/img-itinera5.png';
import imgGr1 from '../../assets/build/img-projects/img-Gr1.png';
import imgGr2 from '../../assets/build/img-projects/img-Gr2.png';
import imgGr3 from '../../assets/build/img-projects/img-Gr3.png';

export const GroupProjects = () => {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">


                < Project
                    title='Katana Sushi - Restaurante japonés'
                    description='Frontend. Se trata de una carta de restaurante con ambiente japonés'
                    technologies={['HTML5', 'CSS', 'JavaScript', 'Bootstrap']}
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
                    title='Juego de lógica Mastermind'
                    description='Frontend. Juego de lógica Mastermind'
                    technologies={['HTML5', 'CSS', 'JavaScript', 'Bootstrap']}
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
                    title='Maquetación de página de producto'
                    description='Frontend. Maquetación de una página de producto para motos.'
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
                    description='Frontend + Backend. Aplicación para gestionar citas en un estudio de tatuajes'
                    technologies={['HTML5','React',  'CSS', 'Bootstrap', 'Typescript', 'Node.js', 'Express', 'SQL', 'MySQL']}
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
                    description="Frontend. Un desafío construir el diseño de la consonla únicamente con código HTML5 y CSS"
                    technologies={['HTML5', 'CSS', 'JavaScript', 'Flexbox']}
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
                    title='Itinera - Planificación viajes'
                    description='Frontend + Backend. Para gestionar itinerarios de viajes'
                    technologies={['HTML5','React', 'CSS', 'Bootstrap', 'JavaScript', 'Node.js', 'PHP', 'Laravel', 'SQL', 'MySQL']}
                    link='https://main.doeffgwvxcsjl.amplifyapp.com/'
                    code='https://github.com/ladronbx/itinera-proyecto-final-react'
                    video={videoItinera}
                    img1={imgItinera1}
                    img2={imgItinera2}
                    img3={imgItinera3}
                    img4={imgItinera4}
                    img5={imgItinera5}
                />

                <Project
                    title='Game Room - LFG'
                    description='Backend para web LFG (Looking for Group), que permite contactar entre usuarios para formar grupos y jugar videojuegos como actividad de ocio afterwork.'
                    longDescription='Aplicación web LFG que permita a los usuarios registrarse, autenticarse, crear y unirse a partidas de videojuegos, así como intercambiar mensajes en un chat común. El objetivo es fomentar la socialización y compartir momentos de ocio.'
                    technologies={['PHP', 'Node.js', 'Laravel', 'SQL', 'MySQL']}
                    link='https://github.com/ladronbx/GameRoom-LFG-PGP-Laravel'
                    code='https://github.com/ladronbx/GameRoom-LFG-PGP-Laravel'
                    img1={imgGr1}
                    img2={imgGr2}
                    img3={imgGr3}
                    img4={imgGr1}
                    img5={imgGr2}

                />

            </div>

        </>
    );
};