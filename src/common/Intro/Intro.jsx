import React from "react";

export const Intro = () => {
    return (
        <div className="intro-style text-white">
            <h2 className='titles line-green' style={{ textShadow: '0 0 2px rgb(145, 246, 21)' }}>Hey there👋</h2>
            <div className="text-xl text-green-100 mt-2">
                <p><strong>Soy Bienve, Full Stack Developer</strong></p>
                <p>En 2022 dejé mi trabajo en una multinacional como administrativa y me lancé a estudiar programación.
                    Desde entonces me he dedicado a especializarme en el desarrollo de software</p>
                <p>Finalicé de estudiar en 2024 y en marzo de ese mismo año, comencé a trabajar en el sector hasta la actualidad.</p>
                <p>Me encanta aprender y seguir formándome, por lo que siempre estoy en constante evolución.</p>
                <p>Si quieres saber más sobre mí, sigue bajando 👇</p>
            </div>
        </div>
    );
}
