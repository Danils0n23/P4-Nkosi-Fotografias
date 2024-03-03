import React from 'react';
import BenguiImg from '../img/about/biso2.png'
import { Link } from 'react-router-dom';

const About = () => {
  return <section className='section'>
    <div className='container mx-auto h-full relative'>

      <div className='flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16'>

        <div className='flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden'>
          <img src={BenguiImg} alt='' />
        </div>

        <div className='flex-1 pt-6 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center lg:items-start' style={{ marginTop: '70px' }}>
          <h1 className='h1'>Sobre.</h1>
          <div class='mb-12 max-w-sm'>
            <p>
              Bem-vindo ao mundo da <b>P4-Nkosi Fotografias</b> ,
              Onde cada clique é uma obra de arte. <br />
              <br />
              Cada momento é eternizado, e cada memória é transformada em uma narrativa visual emocionante.
            </p>
          </div>
          <div className=' flex flex-col lg:items-center justify-center mb-1'>
            <Link to={'/portfolio'} className='btn'>Visite-nos</Link>
          </div>
        </div>
      </div>
    </div>
  </section>;
};

export default About;
