import React from "react";
import { Education } from "../Education/Education";
import { Language } from "../Language/Language";
import { ScrollLink } from "../ScrollLink/ScrollLink";
import gifCode from '../../assets/build/img/code1.gif';
import gifIntro from '../../assets/build/img/code.gif';


export const Intro = () => {
    return (
        <div className='container mb-8 flex flex-col items-center flex-wrap lg:flex-row align-middle'>
            <div className='row'>
            <div className='col flex justify-center'>sss

                    <img src={gifIntro} alt="GIF" className="w-70 h-full object-contain" />
                </div>

                <div className='col flex justify-center flex-col'>
                    <div className='m-30 '>
                        <h2 className='text-white titles line-green'>Hey there👋</h2>
                        <div className="text-xl text-green-100">
                            Soy Bienve, Junior Full Stack Developer. En 2022 dejé mi trabajo en una multinacional como administrativa y me lancé a estudiar programación. Desde entonces me he dedicado a especializarme en el desarrollo de software
                        </div>
                    </div>
                </div>
            </div>

            <div className='row flex flex-col items-center flex-wrap lg:flex-row align-middle'>
                <div className='col flex justify-center'>
                    <div className='m-30 '>
                        <h2 className='text-white titles line-green' style={{ textShadow: '0 0 2px rgb(145, 246, 21)' }}>Formación académica</h2>
                        <Education
                            title='Bootcamp Full Stack Web Developer'
                            academy='GeeksHubs Academy'
                            year='2024'
                            location='Valencia, Spain'
                        />
                        <Education
                            title='GM Gestión administrativa'
                            academy='CIPFP Mislata'
                            year='2015'
                            location='Valencia, Spain'
                        />
                        <h2 className='text-white mt-[50px] titles line-green' style={{ textShadow: '0 0 2px rgb(145, 246, 21)' }}>Idiomas</h2>
                        <Language language='Español' level='Nativo' />
                        <Language language='Inglés' level='Certificado A2' />
                        <Language language='Valenciano' level='Alto' />
                    </div>
                </div>

                <div className='col flex justify-center'>
                    <img src={gifCode} alt="GIF" className="w-70 h-full object-contain" />
                    <div className='flex justify-end items-end m-[30px]'>
                        <ScrollLink to={"section3"} />
                    </div>
                </div>
            </div>



        </div >
    );
}