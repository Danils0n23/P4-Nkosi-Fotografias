import React from 'react';
import BenguiImg from '../img/home/3.png';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className='section'>
      <div className='container mx-auto h-full relative'>
        <div className='flex flex-col justify-center'>

          <div className='w-full pt-36 pb-14 lg:pt-0 lg:pb-0 lg:w-auto z-10 lg:absolute flex flex-col justify-center items-center lg:items-start'>
            <h1 className='h1 text-indigo-50'>
              P4-Nkosi <br /> Photograph <br /> A-firma<br />
            </h1>


            <p className='text-[26px] lg:text-[36px] font-primary mb-4 lg:mb-12  text-indigo-50'>
              Luanda, Angola
            </p>
            <Link to='/contact' className='btn mb-[30px]  text-indigo-50'>
              hire me
            </Link>
          </div>

          <div className='flex justify-end max-h-96 lg:max-h-max'>
            <div className='relative lg:-right-40 overflow-hidden'>
              <img src={BenguiImg} alt='Bengui' />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Home;
