import React from "react";
import { Project } from '../../common/Project/Project';
export const GroupProjects = () => {
    return (
        <>
            <div className='project-container'>

                {/* To do : Modificar los links y agregar longDescription a cada componente */}
                < Project
                    title='Restaurante japonés'
                    description='Se trata de una carta de restaurante con ambiente japonés'
                    technologies={['HTML', 'CSS', 'JavaScript']}
                    link='https://github.com/ladronbx/katanasushi'
                    code='https://github.com/ladronbx/katanasushi'
                />

                <Project
                    title='Mastermind'
                    description='Juego de lógica Mastermind'
                    technologies={['HTML', 'CSS', 'JavaScript']}
                    link='https://github.com/ladronbx/mastermind'
                    code='https://github.com/ladronbx/mastermind'
                />

                <Project
                    title='Tatto studio gestión citas'
                    description='Aplicación para gestionar citas en un estudio de tatuajes'
                    technologies={['React', 'CSS', 'Typescript', 'Node.js', 'Express', 'SQL']}
                    link='https://github.com/ladronbx/tattoo-studio-frontend-react.git'
                    code='https://github.com/ladronbx/tattoo-studio-frontend-react.git'
                />

                <Project
                    title="Nintendo Switch Interactiva"
                    description="Un desafío construir el diseño de la consonla con código HTML y CSS"
                    technologies={['HTML', 'CSS']}
                    link='https://ladronbx.github.io/nintendo-switch-interactiva/'
                    code='https://github.com/ladronbx/nintendo-switch-interactiva.git'
                />

                <Project
                    title='Itinera'
                    description='Aplicación web para gestionar itinerarios de viajes'
                    technologies={['React', 'CSS', 'JavaScript', 'Node.js', 'PHP', 'Laravel', 'SQL']}
                    link='https://github.com/ladronbx/itinera-proyecto-final-react'
                    code='https://github.com/ladronbx/itinera-proyecto-final-react'
                />

                <Project
                    title='Game room'
                    description='Una aplicación web LFG (Looking for Group), que permite contactar entre usuarios para formar grupos y jugar videojuegos como actividad de ocio afterwork.'
                    longDescription='Aplicación web LFG que permita a los usuarios registrarse, autenticarse, crear y unirse a partidas de videojuegos, así como intercambiar mensajes en un chat común. El objetivo es fomentar la socialización y compartir momentos de ocio.'
                    technologies={['PHP', 'Node.js', 'Laravel', 'SQL']}
                    link='https://github.com/ladronbx/GameRoom-LFG-PGP-Laravel.git'

                />
            </div>

        </>
    );
};