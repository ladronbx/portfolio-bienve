import React from 'react';
import { Education } from '../../common/Education/Education';
import { Language } from '../../common/Language/Language';
import { Contact } from '../../common/Contact/Contact';
import name from '../../assets/name-cabecera.png';
import imgCabecera from '../../assets/build/img/home-header-container-img.png';


//importaciones gifs
import gifIntro from '../../assets/build/img/code.gif';
import gifCode from '../../assets/build/img/code1.gif';
import gifCode2 from '../../assets/build/img/code2.gif';

//importaciones iconos tecnologías
import imgAWS from '../../assets/build/img/aws.png';
import imgHtml from '../../assets/build/img/html5.png';
import imgCss from '../../assets/build/img/css.png';
import imgDefaultTech from '../../assets/build/img/icon_default_tech.png';
import imgBootstrap from '../../assets/build/img/bootstrap.png';
import imgTailwind from '../../assets/build/img/tailwind.png';
import imgReact from '../../assets/build/img/react.png';
import imgRedux from '../../assets/build/img/redux.png';
import imgFigma from '../../assets/build/img/figma.png';
import imgJs from '../../assets/build/img/js.png';
import imgTypescript from '../../assets/build/img/typescript.png';
import imgNode from '../../assets/build/img/node.png';
import imgExpress from '../../assets/build/img/express.png';
import imgTypeORM from '../../assets/build/img/typeorm.png';
import imgSql from '../../assets/build/img/sql.png';
import imgMysql from '../../assets/build/img/mysql.png';
import imgMongo from '../../assets/build/img/mongo.png';
import imgPhp from '../../assets/build/img/php.png';
import imgLaravel from '../../assets/build/img/laravel.png';
import imgPostman from '../../assets/build/img/postman.png';
import imgDocker from '../../assets/build/img/docker.png';
import imgGit from '../../assets/build/img/git-icon.png';
import imgGitHub from '../../assets/build/img/GitHub_Icon.png';


import './Home.css';
import { Intro } from '../../common/Intro/Intro';
import { Link } from 'react-scroll';
import { ScrollLink } from '../../common/ScrollLink/ScrollLink';

export const Home = () => {
  return (
    <div className='container-body relative bg-black w-full overflow-x-hidden'>

      <div className='container-img-contact-cabecera absolute z-[4] right-0 2xl:w-40 xl:w-40 lg:w-50 md:w-60 sm:w-70 xs:w-100'>
        <div className='2xl:p-[36px] xl:p-[30px] lg:p-[20px] md:p-[20px] sm:p-[16px] xs:p-[10px]'>
          <img className="w-100" src={name} alt="name" draggable="false" />
        </div>
        <div className='text-right 2xl:p-[36px] xl:p-[30px] lg:p-[20px] md:p-[20px] sm:p-[16px] xs:p-[10px]'>
          <h2 className='text-right 2xl:text-[36px] xl:text-[30px] lg:text-[20px] md:text-[20px] sm:text-[20px] xs:text-[20px]'>Web developer</h2>
          <Contact />
          < ScrollLink to={"section2"} text={'¿Quién soy?'} />
        </div>
      </div>

      <div className="z-[-4]" style={{ scrollSnapAlign: 'start' }}>
        <img className="img-cabecera-style h-screen object-cover object-center w-full" src={imgCabecera} alt="name" draggable="false" />
      </div>

      <div id="section2" className='flex justify-center items-center flex-wrap h-screen' style={{ scrollSnapAlign: 'start' }}>
        <div className='row flex items-center flex-wrap'>
          <div className='col'>
            <div className='p-30 m-30 '>
              <Intro />
              <ScrollLink to={"section3"} text={'Ver formación académica'} />
            </div>
          </div>
          <div className='col'>
            <div className='p-30 m-30'>
              <img src={gifIntro} alt="GIF" />
            </div>
          </div>
        </div>
      </div>

      <div id="section3" className='flex justify-center items-start flex-wrap h-screen' style={{ scrollSnapAlign: 'start' }}>
        <div className='row flex items-start flex-wrap'>
          <div className='col'>
            <div className='m-30'><img src={gifCode} alt="GIF" />
            </div>
            <ScrollLink to={"section4"} text={'¿Qué lenguajes de programación conozco?'} />
          </div>
          <div className='col'>
            <div className='m-30 '>
              <h2 className='text-cyan-700'>Formación académica</h2>
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
          </div>
          <div className='col'>
            <div className='m-30'>
              <h2 className='text-cyan-700'>Idiomas</h2>
              <Language language='Spanish' level='Native' />
              <Language language='English' level='Certificado A2' />
              <Language language='Valenciano' level='Alto' />
            </div>
          </div>
        </div>
      </div>


      <div className='tecnologias h-screen' id="section4" style={{ scrollSnapAlign: 'start' }}>
        <img src={gifCode2} alt="GIF" />
        <h4 className='tecnologias-title'>Tecnologías</h4>
        <ul className="tecnologias-grupo">
          <li><img src={imgHtml} alt="HTML_Icon" /><span>HTML</span></li>
          <li><img src={imgCss} alt="CSS_Icon" aria-hidden="true" /><span>CSS</span></li>
          <li><img src={imgDefaultTech} alt="" aria-hidden="true" /><span>FlexBox</span></li>
          <li><img src={imgBootstrap} alt="Bootstrap logo" aria-hidden="true" /><span>Bootstrap</span></li>
          <li><img src={imgTailwind} alt="tailwind_avatar" aria-hidden="true" /><span>Tailwind</span></li>
          <li><img src={imgReact} alt="React_Icon" aria-hidden="true" /><span>React</span></li>
          <li><img src={imgRedux} alt="Redux_Icon" aria-hidden="true" /><span>Redux</span></li>
          <li><img src={imgFigma} alt="Figma" aria-hidden="true" /><span>Figma</span></li>
          <li><img src={imgJs} alt="JavaScript_Icon" aria-hidden="true" /><span>JavaScript</span></li>
          <li><img src={imgTypescript} alt="Typescript_Icon" aria-hidden="true" /><span>TypeScript</span></li>
          <li><img src={imgNode} alt="Node_Icon" aria-hidden="true" /><span>NodeJS</span></li>
          <li><img src={imgExpress} alt="Express" aria-hidden="true" /><span>Express</span></li>
          <li><img src={imgTypeORM} alt="avatar" aria-hidden="true" /><span>TypeORM</span></li>
          <li><img src={imgSql} alt="SQL_Icon" aria-hidden="true" /><span>SQL</span></li>
          <li><img src={imgMysql} alt="MySQL_Icon" aria-hidden="true" /><span>MySQL</span></li>
          <li><img src={imgMongo} alt="MongoDB_Icon" aria-hidden="true" /><span>MongoDB</span></li>
          <li><img src={imgPhp} alt="PHP_Icon" aria-hidden="true" /><span>PHP</span></li>
          <li><img src={imgLaravel} alt="Laravel_Icon" aria-hidden="true" /><span>Laravel</span></li>
          <li><img src={imgAWS} alt="Deploy_AWS" aria-hidden="true" /><span>Deploy AWS</span></li>
          <li><img src={imgPostman} alt="Postman" aria-hidden="true" /><span>Postman</span></li>
          <li><img src={imgDocker} alt="Docker" aria-hidden="true" /><span>Docker</span></li>
          <li><img src={imgGit} alt="Git_icon" aria-hidden="true" /><span>Git</span></li>
          <li><img src={imgGitHub} alt="GitHub_Icon" aria-hidden="true" /><span>Github</span></li>
        </ul>
      </div >
      <Link to="section6" smooth={true} duration={500} offset={-50}>Ver más</Link>
    </div >
  );
};
