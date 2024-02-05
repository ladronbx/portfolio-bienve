import React from 'react';
import linkedinIcon from '../../assets/build/img/linkedin-icon.png';
import githubIcon from '../../assets/build/img/github-icon.png';
import mailIcon from '../../assets/build/img/mail-icon.png';

export const Contact = () => {
    return (
        <div className="flex justify-end">
            <div className="flex space-x-5 items-center">
                <div className="contact-icon">
                    <img className="2xl:h-[35px] xl:h-[35px]  lg:h-[30px] md:h-[22px] sm:h-[19px] xs:h-[17px]" src={mailIcon} alt="Mail Icon" draggable="false" />
                </div>
                <div className="contact-icon">
                    <img className="2xl:h-[40px] xl:h-[40px] lg:h-[32px] md:h-[26px] sm:h-[24px] xs:h-[22px]" src={linkedinIcon} alt="LinkedIn Icon" draggable="false" />
                </div>
                <div className="contact-icon">
                    <img className="2xl:h-[40px] xl:h-[40px] lg:h-[32px] md:h-[26px] sm:h-[24px] xs:h-[22px]" src={githubIcon} alt="GitHub Icon" draggable="false" />
                </div>
            </div>
        </div>
    );
}
