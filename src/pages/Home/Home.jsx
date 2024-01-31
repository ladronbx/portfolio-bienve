import React from 'react';
import { Education } from '../../common/Education/Education';
import { Language } from '../../common/Language/Language';
import { Contact } from '../../common/Contact/Contact';
import name from '../../assets/build/name-cabecera.png';
import imgCabecera from '../../assets/build/img/home-header-container-img.png';
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
    </div>
  );
};
