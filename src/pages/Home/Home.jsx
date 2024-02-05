import React from 'react';
import { Education } from '../../common/Education/Education';
import { Language } from '../../common/Language/Language';
import { Contact } from '../../common/Contact/Contact';
import name from '../../assets/build/name-cabecera.png';
import imgCabecera from '../../assets/build/img/home-header-container-img.png';
import './Home.css';
import { Intro } from '../../common/Intro/Intro';
import { Link } from 'react-scroll';

export const Home = () => {
  return (
    <div className='container-body relative' style={{ scrollSnapType: 'y mandatory', overflowY: 'scroll' }}>

      <Link to="section2" smooth={true} duration={500} offset={-50}>
        <div className='container-img-contact-cabecera absolute z-[4] right-0 2xl:w-40 xl:w-40 lg:w-50 md:w-60 sm:w-70 xs:w-100'>
          <div className='2xl:p-[36px] xl:p-[30px] lg:p-[20px] md:p-[20px] sm:p-[16px] xs:p-[10px]'>
            <img className="w-100" src={name} alt="name" draggable="false" />
          </div>
          <div className='text-right 2xl:p-[36px] xl:p-[30px] lg:p-[20px] md:p-[20px] sm:p-[16px] xs:p-[10px]'>
            <h2 className='text-right 2xl:text-[36px] xl:text-[30px] lg:text-[20px] md:text-[20px] sm:text-[20px] xs:text-[20px]'>Web developer</h2>
            <Contact />
          </div>
        </div>


        <div className="z-[-4]" style={{ scrollSnapAlign: 'start' }}>
          <img className="img-cabecera-style h-screen object-cover object-center w-full" src={imgCabecera} alt="name" draggable="false" />
        </div>

      </Link>

      <div className='home-style flex flex-col items-center flex-wrap'>
        <Link to="section3" smooth={true} duration={500} offset={-50}>
          <div id="section2" style={{ scrollSnapAlign: 'start' }}>
            <div className='h-screen'>
              <Intro />
            </div>
          </div>
        </Link>
        <Link to="section4" smooth={true} duration={500} offset={-50}>
          <div className='2xl:mt-[36px] xl:mt-[30px] lg:mt-[20px] md:mt-[20px] sm:mt-[16px] xs:mt-[30px] h-screen' id="section3" style={{ scrollSnapAlign: 'start' }}>
            <h3>Formación académica</h3>
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
          </div>

        </Link>
        <Link to="section5" smooth={true} duration={500} offset={-50}>
          <div className='2xl:mt-[36px] xl:mt-[30px] lg:mt-[20px] md:mt-[20px] sm:mt-[16px] xs:mt-[30px] h-screen' id="section4" style={{ scrollSnapAlign: 'start' }}>
            <Language language='Spanish' level='Native' />
            <Language language='English' level='Certificado A2' />
            <Language language='Valenciano' level='Alto' />
          </div>
        </Link>

      </div>
      <Link to="section6" smooth={true} duration={500} offset={-50}>
        <div className='tecnologias h-screen' id="section5" style={{ scrollSnapAlign: 'start' }}>
          <h4 className='tecnologias-title'>Tecnologías</h4>
          <ul className="tecnologias-grupo">
            <li><img src="../../src/assets/build/img/icons/html5.svg" alt="HTML_Icon" aria-hidden="true" /><span>HTML</span></li>
            <li><img src="../../src/assets/build/img/icons/css.svg" alt="CSS_Icon" aria-hidden="true" /><span>CSS</span></li>
            <li><img src="../../src/assets/build/img/icons/icon_default_tech.svg" alt="" aria-hidden="true" /><span>FlexBox</span></li>
            <li><img src="../../src/assets/build/img/icons/bootstrap.svg" alt="Bootstrap logo" aria-hidden="true" /><span>Bootstrap</span></li>
            <li><img src="../../src/assets/build/img/icons/tailwind.svg" alt="tailwind_avatar" aria-hidden="true" /><span>Tailwind</span></li>
            <li><img src="../../src/assets/build/img/icons/react.svg" alt="React_Icon" aria-hidden="true" /><span>React</span></li>
            <li><img src="../../src/assets/build/img/icons/redux.svg" alt="Redux_Icon" aria-hidden="true" /><span>Redux</span></li>
            <li><img src="../../src/assets/build/img/icons/figma.svg" alt="Figma" aria-hidden="true" /><span>Figma</span></li>
            <li><img src="../../src/assets/build/img/icons/js.svg" alt="JavaScript_Icon" aria-hidden="true" /><span>JavaScript</span></li>
            <li><img src="../../src/assets/build/img/icons/typescript.png" alt="Typescript_Icon" aria-hidden="true" /><span>TypeScript</span></li>
            <li><img src="../../src/assets/build/img/icons/node.svg" alt="Node_Icon" aria-hidden="true" /><span>NodeJS</span></li>
            <li><img src="../../src/assets/build/img/icons/express.svg" alt="Express" aria-hidden="true" /><span>Express</span></li>
            <li><img src="../../src/assets/build/img/icons/typeorm.svg" alt="avatar" aria-hidden="true" /><span>TypeORM</span></li>
            <li><img src="../../src/assets/build/img/icons/sql.png" alt="SQL_Icon" aria-hidden="true" /><span>SQL</span></li>
            <li><img src="../../src/assets/build/img/icons/mysql.svg" alt="MySQL_Icon" aria-hidden="true" /><span>MySQL</span></li>
            <li><img src="../../src/assets/build/img/icons/mongo.svg" alt="MongoDB_Icon" aria-hidden="true" /><span>MongoDB</span></li>
            <li><img src="../../src/assets/build/img/icons/php.svg" alt="PHP_Icon" aria-hidden="true" /><span>PHP</span></li>
            <li><img src="../../src/assets/build/img/icons/laravel.svg" alt="Laravel_Icon" aria-hidden="true" /><span>Laravel</span></li>
            <li><img src="../../src/assets/build/img/icons/aws.png" alt="Deploy_AWS" aria-hidden="true" /><span>Deploy AWS</span></li>
            <li><img src="../../src/assets/build/img/icons/postman.svg" alt="Postman" aria-hidden="true" /><span>Postman</span></li>
            <li><img src="../../src/assets/build/img/icons/docker.svg" alt="Docker" aria-hidden="true" /><span>Docker</span></li>
            <li><img src="../../src/assets/build/img/icons/git-icon.svg" alt="Git_icon" aria-hidden="true" /><span>Git</span></li>
            <li><img src="../../src/assets/build/img/icons/GitHub_Icon.svg" alt="GitHub_Icon" aria-hidden="true" /><span>Github</span></li>
          </ul>
        </div >
      </Link>

    </div >
  );
};
