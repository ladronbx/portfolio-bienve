import React from 'react';
import { Education } from '../../common/Education/Education';
import { Language } from '../../common/Language/Language';
import { Contact } from '../../common/Contact/Contact';
import name from '../../assets/build/name-cabecera.png';
import imgCabecera from '../../assets/build/img/home-header-container-img.png';
import './Home.css';
// import { GroupProjects } from '../GroupProjects/GroupProjects';

export const Home = () => {
  return (
    <div className='home-style flex relative flex-wrap flex-col w-screen '>
      <div className="w-screen h-screen absolute z-[-1] flex flex-col items-center">
        <img className="mx-auto" src={imgCabecera} alt="name" draggable="false" />
      </div>



      <div className='h-screen relative w-30 2xl:30 xl:30 lg:30 md:30 sm:100 xs:100'>
        <div className='2xl:p-[36px] xl:p-[30px] lg:p-[20px] md:p-[20px] sm:p-[16px] xs:p-[10px]'><img className="w-100" src={name} alt="name" draggable="false" /></div>
        <div className='text-right 2xl:p-[36px] xl:p-[30px] lg:p-[20px] md:p-[20px] sm:p-[16px] xs:p-[10px]'>
          <h2 className='text-right 2xl:text-[36px] xl:text-[30px] lg:text-[20px] md:text-[20px] sm:text-[16px] xs:text-[10px]'>Web developer</h2>
          <Contact />
        </div>

      </div>
      {/* <GroupProjects /> */}

      <div className='flex flex-col'>
        <div className='row'>
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

      <div className='row'>
        <Language language='Spanish' level='Native' />
        <Language language='English' level='Certificado A2' />
        <Language language='Valenciano' level='Alto' />
      </div>




      <div className='tecnologias'>
        <h4 className='tecnologias-title'>Tecnologías</h4>
        <ul className="sc-1c5ffc37-10 crwaTb">
          <li><img src="https://media-asgard.s3.eu-west-1.amazonaws.com/22/05/10/0ac6686e-6f1b-404e-bea9-f48caf630357_git-icon.svg" alt="Git_icon" aria-hidden="true" /><span>Git</span></li>
          <li><img src="https://media-asgard.s3.eu-west-1.amazonaws.com/9e203859-fbb2-4cec-afda-76ac67d7326f_html5-original.svg" alt="HTML_Icon" aria-hidden="true" /><span>HTML</span></li>
          <li><img src="https://media-asgard.s3.eu-west-1.amazonaws.com/74b1de9e-4322-4696-b5d3-3e0afbdb1d69_css3-original.svg" alt="CSS_Icon" aria-hidden="true" /><span>CSS</span></li>
          <li><img src="https://media-asgard.s3.eu-west-1.amazonaws.com/ee029a19-3caf-41fd-a518-f3bba89b189a_expressjs.svg" alt="Express" aria-hidden="true" /><span>Express</span></li>
          <li><img src="https://media-asgard.s3.eu-west-1.amazonaws.com/30998747-6db9-4b10-bdd2-a1648a183cf5_redux.svg" alt="Redux_Icon" aria-hidden="true" /><span>Redux</span></li>
          <li><img src="https://media-asgard.s3.eu-west-1.amazonaws.com/7681aee4-3c67-4400-bdba-9162e4e40002_typescript_Icon.png" alt="Typescript_Icon" aria-hidden="true" /><span>TypeScript</span></li>
          <li><img src="https://media-asgard.s3.eu-west-1.amazonaws.com/6f9516ed-93b4-4c0c-8437-e07d208087a8_nodejs-original.svg" alt="Node_Icon" aria-hidden="true" /><span>NodeJS</span></li>
          <li><img src="https://media-asgard.s3.eu-west-1.amazonaws.com/cefadbb0-1e21-4b06-afab-87122abb590f_GitHub_Icon.png" alt="GitHub_Icon" aria-hidden="true" /><span>Github</span></li>
          <li><img src="https://media-asgard.s3.eu-west-1.amazonaws.com/22/07/27/de7063e0-b07c-4882-ba02-15ad6dc720bd_tailwindcss-icon.svg" alt="tailwind_avatar" aria-hidden="true" /><span>Tailwind</span></li>
          <li><img src="https://media-asgard.s3.eu-west-1.amazonaws.com/5230823c-de8c-4996-9b46-4a9029c41322_react-original.svg" alt="React_Icon" aria-hidden="true" /><span>React</span></li>
          <li><img src="https://media-asgard.s3.eu-west-1.amazonaws.com/22/05/10/7f4427d3-5f82-4ea8-a78a-5b9e0b4a1cac_excel_icon.png" alt="Excel_icon" aria-hidden="true" /><span>Microsoft Excel</span></li>
          <li><img src="https://media-asgard.s3.eu-west-1.amazonaws.com/01e3f3ea-9e28-4bdf-847c-e7eaad85fa11_php-original.svg" alt="PHP_Icon" aria-hidden="true" /><span>PHP</span></li>
          <li><img src="https://media-asgard.s3.eu-west-1.amazonaws.com/bd0b2bd8-c6cf-49c9-9438-5cf99e6286ba_laravel-plain.svg" alt="Laravel_Icon" aria-hidden="true" /><span>Laravel</span></li>
          <li><img src="https://media-asgard.s3.eu-west-1.amazonaws.com/b6433b93-4491-4d88-b692-a24f1e108bc7_javascript-original.svg" alt="JavaScript_Icon" aria-hidden="true" /><span>JavaScript</span></li>
          <li><img src="https://media-asgard.s3.eu-west-1.amazonaws.com/8b444286-1ea9-41c7-972e-c233aca157ad_mysql-original.svg" alt="MySQL_Icon" aria-hidden="true" /><span>MySQL</span></li>
          <li><img src="https://media-asgard.s3.eu-west-1.amazonaws.com/895264cc-77c6-4ec7-82e1-089fb2b0de50_SQL_Icon.png" alt="SQL_Icon" aria-hidden="true" /><span>SQL</span></li>
          <li><img src="https://media-asgard.s3.eu-west-1.amazonaws.com/5e40f5a3-9a3e-4e23-a48d-112bd1f8de32_bootstrap-plain.svg" alt="Bootstrap logo" aria-hidden="true" /><span>Bootstrap</span></li>
          <li><img src="../../assets/build/icons/icon_default_tech.svg" alt="" aria-hidden="true" /><span>FlexBox</span></li>
          <li><img src="https://media-asgard.s3.eu-west-1.amazonaws.com/22/07/27/2401a4f4-8203-45b9-b66e-a35d47172b6a_typeorm.svg" alt="avatar" aria-hidden="true" /><span>TypeORM</span></li></ul>
      </div>
    </div>
  );
};
