import React from 'react';
import { Education } from '../../common/Education/Education';
import { Language } from '../../common/Language/Language';
import { Contact } from '../../common/Contact/Contact';
import { Intro } from '../../common/Intro/Intro';
import { ScrollLink } from '../../common/ScrollLink/ScrollLink';
import { GroupProjects } from '../../common/GroupProjects/GroupProjects';
import { ContactFooter } from '../../common/ContactFooter/ContactFooter';
import './Home.css';

//importaciones gifs
import gifIntro from '../../assets/build/img/code.gif';
import gifCode from '../../assets/build/img/code1.gif';

//importaciones imágenes
import name from '../../assets/name-cabecera.png';
import imgCabecera from '../../assets/build/img/home-header-container-img.webp';
import imgAWS from '../../assets/build/img/aws.webp';
import imgHtml from '../../assets/build/img/html5.webp';
import imgCss from '../../assets/build/img/css.webp';
import imgDefaultTech from '../../assets/build/img/icon_default_tech.webp';
import imgBootstrap from '../../assets/build/img/bootstrap.webp';
import imgTailwind from '../../assets/build/img/tailwind.webp';
import imgReact from '../../assets/build/img/react.webp';
// import imgRedux from '../../assets/build/img/redux.webp';
import imgFigma from '../../assets/build/img/figma.webp';
import imgJs from '../../assets/build/img/js.webp';
import imgTypescript from '../../assets/build/img/typescript.webp';
// import imgNode from '../../assets/build/img/node.webp';
import imgExpress from '../../assets/build/img/express.webp';
import imgTypeORM from '../../assets/build/img/typeorm.webp';
import imgSql from '../../assets/build/img/sql.webp';
import imgMysql from '../../assets/build/img/mysql.webp';
import imgCi4 from '../../assets/build/img/ci4.webp';
import imgBitbucket from '../../assets/build/img/bitbucket.svg';
import imgLaravel from '../../assets/build/img/laravel.webp';
import imgPostman from '../../assets/build/img/postman.webp';
import imgDocker from '../../assets/build/img/docker.webp';
import imgGit from '../../assets/build/img/git-icon.webp';
import imgGitHub from '../../assets/build/img/GitHub_Icon.webp';
import imgJira from '../../assets/build/img/jira.svg';
import imgTrello from '../../assets/build/img/trello.svg';
import imgSass from '../../assets/build/img/sass.svg';

export const Home = () => {
  const handleDownloadCV = () => {
    const downloadLink = document.createElement('a');
    downloadLink.href = 'CV-MBienvenida.pdf';
    downloadLink.download = 'CV-MBienvenida.pdf';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div className='container-body relative bg-white w-full overflow-x-hidden'>

      <div className='container-body relative bg-white w-full overflow-x-hidden'>
        <div className='container-img-contact-cabecera absolute z-[4] right-0 2xl:w-40 xl:w-40 lg:w-50 md:w-60 sm:w-70 xs:w-100'>
          <div className='2xl:p-[36px] xl:p-[30px] lg:p-[20px] md:p-[20px] sm:p-[16px] xs:p-[10px]'>
            <img className="w-100" src={name} alt="name" draggable="false" />
          </div>

          <div className='text-right 2xl:p-[26px] xl:p-[20px] lg:p-[10px] md:p-[10px] sm:p-[10px] xs:p-[10px]'>
            <h2 className='text-right 2xl:text-[36px] xl:text-[30px] lg:text-[20px] md:text-[20px] sm:text-[20px] xs:text-[20px]'>FullStack Developer</h2>
            <a className='text-right 2xl:text-[20px] xl:text-[18px] lg:text-[12px] md:text-[12px] sm:text-[12px] xs:text-[12px] no-underline text-black' href="mailto:ladronbravovlc@gmail.com">ladronbravovlc@gmail.com</a>
            <div className='2xl:p-[26px] xl:p-[20px] lg:p-[10px] md:p-[10px] sm:p-[10px] xs:p-[10px]]'><Contact /></div>
          </div>

          <div className='flex justify-end items-end mt-[30px]'>
            <ScrollLink to={"section2"} />
          </div>

        </div>

        <div className="z-[-4]" style={{ scrollSnapAlign: 'start' }}>
          <img className="img-cabecera-style h-screen object-cover object-center w-full" src={imgCabecera} alt="name" draggable="false" />
          <div className="absolute bottom-0 left-0 mb-4 ml-4">
            <button className="Download-button bg-gray-800 mb-4" onClick={handleDownloadCV}>
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
            <div><ScrollLink to={"section5"} text={'Proyectos'} customContainerClass={'animate-none cursor-pointer bg-gray-800 rounded-md text-white tracking-wider shadow-xl w-[200px] mb-2 text-left pt-1 pb-1'} /></div>
            <div><ScrollLink to={"section4"} text={'Formación'} customContainerClass={'animate-none cursor-pointer bg-gray-800 rounded-md text-white tracking-wider shadow-xl w-[200px] mb-2 text-left pt-1 pb-1'} /></div>
            <div><ScrollLink to={"section3"} text={'Tecnologías'} customContainerClass={'animate-none cursor-pointer bg-gray-800 rounded-md text-white tracking-wider shadow-xl w-[200px] mb-2 text-left pt-1 pb-1'} /></div>
          </div>
        </div>
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

          <div><h1 className='tecnologias-title text-black '>Tecnologías</h1></div>
          <ul className="tecnologias-grupo">
            <li><img src={imgHtml} alt="HTML_Icon" /><span>HTML</span></li>
            <li><img src={imgCss} alt="CSS_Icon" aria-hidden="true" /><span>CSS</span></li>
            <li><img src={imgDefaultTech} alt="" aria-hidden="true" /><span>FlexBox</span></li>
            <li><img src={imgBootstrap} alt="Bootstrap logo" aria-hidden="true" /><span>Bootstrap</span></li>
            <li><img src={imgTailwind} alt="tailwind_avatar" aria-hidden="true" /><span>Tailwind</span></li>
            <li><img src={imgSass} alt="Sass_Icon" aria-hidden="true" /><span>SASS</span></li>
            <li><img src={imgReact} alt="React_Icon" aria-hidden="true" /><span>React</span></li>
            {/* <li><img src={imgRedux} alt="Redux_Icon" aria-hidden="true" /><span>Redux</span></li> */}
            <li><img src={imgJs} alt="JavaScript_Icon" aria-hidden="true" /><span>JavaScript</span></li>
            <li><img src={imgTypescript} alt="Typescript_Icon" aria-hidden="true" /><span>TypeScript</span></li>
            {/* <li><img src={imgNode} alt="Node_Icon" aria-hidden="true" /><span>NodeJS</span></li> */}
            <li><img src={imgExpress} alt="Express" aria-hidden="true" /><span>Express</span></li>
            <li><img src={imgTypeORM} alt="avatar" aria-hidden="true" /><span>TypeORM</span></li>
            <li><img src={imgSql} alt="SQL_Icon" aria-hidden="true" /><span>SQL</span></li>
            <li><img src={imgMysql} alt="MySQL_Icon" aria-hidden="true" /><span>MySQL</span></li>
            <li><img src={imgCi4} alt="ci4_Icon" aria-hidden="true" /><span>CodeIgniter</span></li>
            <li><img src={imgLaravel} alt="Laravel_Icon" aria-hidden="true" /><span>Laravel</span></li>
            <li><img src={imgAWS} alt="Deploy_AWS" aria-hidden="true" /><span>Deploy AWS</span></li>
            <li><img src={imgPostman} alt="Postman" aria-hidden="true" /><span>Postman</span></li>
            <li><img src={imgDocker} alt="Docker" aria-hidden="true" /><span>Docker</span></li>
            <li><img src={imgGit} alt="Git_icon" aria-hidden="true" /><span>Git</span></li>
            <li><img src={imgGitHub} alt="GitHub_Icon" aria-hidden="true" /><span>Github</span></li>
            <li><img src={imgBitbucket} alt="Bitbucket_Icon" aria-hidden="true" /><span>Bitbucket</span></li>
            <li><img src={imgFigma} alt="Figma" aria-hidden="true" /><span>Figma</span></li>
            <li><img src={imgJira} alt="Jira_Icon" aria-hidden="true" /><span>Jira</span></li>
            <li><img src={imgTrello} alt="Trello_Icon" aria-hidden="true" /><span>Trello</span></li>
          </ul>
        </div >
      </div >

      <div id="section4" className='flex justify-center items-center flex-wrap' style={{ scrollSnapAlign: 'start' }}>
        <div className='row flex flex-col items-center flex-wrap lg:flex-row align-middle'>
          <div className='col flex justify-center'>
            <div className='m-30 '>
              <h2 className='text-black titles line-green' >Formación académica</h2>
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
              <h2 className='text-black mt-[50px] titles line-green' >Idiomas</h2>
              <Language language='Español' level='Nativo' />
              <Language language='Inglés' level='Certificado A2' />
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

      <div id="section5" className='section-projects'>
        <h1 className='text-black titles mt-[20px] text-center border-b line-green p-6 text-[3rem] mb-4' >Últimos proyectos</h1>

        <GroupProjects />
      </div>


      <div className='section-contacto flex flex-col items-center'>
        <ContactFooter />
        <button className="Download-button m-4 bg-gray-800 " onClick={handleDownloadCV}>
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
      </div>

    </div >

  );
};
