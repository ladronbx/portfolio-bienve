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
import imgJava from '../../assets/build/img/java.png';




import './Home.css';
import { Intro } from '../../common/Intro/Intro';
import { ScrollLink } from '../../common/ScrollLink/ScrollLink';
import { GroupProjects } from '../../common/GroupProjects/GroupProjects';




export const Home = () => {
  const handleDownloadCV = () => {
    const downloadLink = document.createElement('a');
    downloadLink.href = '/assets/build/CV - M bienvenida ladrón.pdf';
    downloadLink.download = 'CV - M bienvenida ladrón.pdf';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div className='container-body relative bg-black w-full overflow-x-hidden'>

      <div className='container-img-contact-cabecera absolute z-[4] right-0 2xl:w-40 xl:w-40 lg:w-50 md:w-60 sm:w-70 xs:w-100'>
        <div className='2xl:p-[36px] xl:p-[30px] lg:p-[20px] md:p-[20px] sm:p-[16px] xs:p-[10px]'>
          <img className="w-100" src={name} alt="name" draggable="false" />
        </div>

        <div className='text-right 2xl:p-[36px] xl:p-[30px] lg:p-[20px] md:p-[20px] sm:p-[16px] xs:p-[10px]'>
          <h2 className='text-right 2xl:text-[36px] xl:text-[30px] lg:text-[20px] md:text-[20px] sm:text-[20px] xs:text-[20px]'>Web developer</h2>
          <Contact />



          <div className='flex justify-end items-end mt-[30px] flex-col'>
            <button className="Download-button mb-4 bg-gray-800 " onClick={handleDownloadCV}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                width="20"
                viewBox="0 0 640 512"
              >
                <path
                  d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-167l80 80c9.4 9.4 24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-39 39V184c0-13.3-10.7-24-24-24s-24 10.7-24 24V318.1l-39-39c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9z"
                  fill="white"
                ></path>
              </svg>
              <span>Download CV</span>
            </button>
            <ScrollLink to={"section2"} />
          </div>
        </div>

      </div>

      <div className="z-[-4]" style={{ scrollSnapAlign: 'start' }}>
        <img className="img-cabecera-style h-screen object-cover object-center w-full" src={imgCabecera} alt="name" draggable="false" />
      </div>

      <div id="section2" className='flex justify-center items-center flex-wrap relative' style={{ scrollSnapAlign: 'start' }}>

        <div className='row flex flex-col items-center flex-wrap lg:flex-row align-middle'>
          <div className='col flex justify-center'>
            <img src={gifIntro} alt="GIF" className="w-70 h-full object-contain" />
          </div>

          <div className='col flex justify-center'>
            <div className='m-30 p-30'>
              <Intro />
              <div className='flex justify-end items-end mt-[30px]'>
                <ScrollLink to={"section3"} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='tecnologias relative' id="section3" style={{ scrollSnapAlign: 'start' }}>
        <div className='row pt-[40px] flex items-center flex-wrap'>

          <h2 className='tecnologias-title text-purple-700'>Tecnologías</h2>
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
            <li><img src={imgJava} alt="Java_Icon" aria-hidden="true" /><span>Java</span></li>
            <li><img src={imgAWS} alt="Deploy_AWS" aria-hidden="true" /><span>Deploy AWS</span></li>
            <li><img src={imgPostman} alt="Postman" aria-hidden="true" /><span>Postman</span></li>
            <li><img src={imgDocker} alt="Docker" aria-hidden="true" /><span>Docker</span></li>
            <li><img src={imgGit} alt="Git_icon" aria-hidden="true" /><span>Git</span></li>
            <li><img src={imgGitHub} alt="GitHub_Icon" aria-hidden="true" /><span>Github</span></li>
          </ul>

        </div >
      </div >


      <div id="section4" className='flex justify-center items-center flex-wrap' style={{ scrollSnapAlign: 'start' }}>
        <div className='row flex flex-col items-center flex-wrap lg:flex-row align-middle'>
          <div className='col flex justify-center'>
            <div className='m-30 '>
              <h2 className='text-purple-700 titles'>Formación académica</h2>
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

              <h2 className='text-purple-700 mt-[50px] titles'>Idiomas</h2>
              <Language language='Spanish' level='Native' />
              <Language language='English' level='Certificado A2' />
              <Language language='Valenciano' level='Alto' />
            </div>

          </div>

          <div className='col flex justify-center'>
            <img src={gifCode} alt="GIF" className="w-70 h-full object-contain" />
            <div className='flex justify-end items-end m-[30px]'>
              <ScrollLink to={"section5"} />
            </div>
          </div>
        </div>
      </div>

      <div className='section-projects' id='section5'>
        < GroupProjects />
      </div>

      {/* 

      Aquí faltaría agregar el contacto y el botón de descargar CV de nuevo. 

      <button className="Download-button mb-4 bg-gray-800 " onClick={handleDownloadCV}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="16"
          width="20"
          viewBox="0 0 640 512"
        >
          <path
            d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-167l80 80c9.4 9.4 24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-39 39V184c0-13.3-10.7-24-24-24s-24 10.7-24 24V318.1l-39-39c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9z"
            fill="white"
          ></path>
        </svg>
        <span>Download CV</span>
      </button> */}

    </div >

  );
};
