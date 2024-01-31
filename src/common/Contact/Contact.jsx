import React from 'react';
import linkedinIcon from '../../assets/build/img/linkedin-icon.png';
import githubIcon from '../../assets/build/img/github-icon.png';
import mailIcon from '../../assets/build/img/mail-icon.png';

export const Contact = () => {
    return (
        <div className="flex justify-end">
            {/* <h1 className='text-3xl mb-4'>Contacto</h1> */}
            <div className="flex space-x-5 items-center">
                <a href='mailto:ladronbravovlc@gmail.com'>
                    <img className="2xl:h-[35px] xl:h-[35px]  lg:h-[25px] md:h-[15px] sm:h-[12px] xs:h-[10px]" src={mailIcon} alt="Mail Icon" draggable="false" />
                </a>
                <a href='https://www.linkedin.com/in/ladronbx/'>
                    <img className="2xl:h-[40px] xl:h-[40px] lg:h-[30px] md:h-[20px] sm:h-[17px] xs:h-[15px]" src={linkedinIcon} alt="LinkedIn Icon" draggable="false"  />
                </a>
                <a href='https://github.com/ladronbx'>
                    <img className="2xl:h-[40px] xl:h-[40px] lg:h-[30px] md:h-[20px] sm:h-[17px] xs:h-[15px]" src={githubIcon} alt="GitHub Icon" draggable="false" />
                </a>
                
            </div>
        </div>
    );
}