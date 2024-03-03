import React from 'react';
import BenguiImg from '../img/home/3.png';
import { Link } from 'react-router-dom';
import { fadeIn } from '../variants';
import { motion } from 'framer-motion';
import { transition1 } from '../transitions';

const Home = () => {
  return (
    <section className='section'>
      <div className='container mx-auto h-full relative'>
        <div className='flex flex-col justify-center'>

          <div className='w-full pt-36 pb-14 lg:pt-0 lg:pb-0 lg:w-auto z-10 lg:absolute flex flex-col justify-center items-center lg:items-start'>
            <motion.h1
              variants={fadeIn('right', 0.3)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='h1 text-indigo-50'>
              P4-Nkosi <br /> Fotografias <br /> A-firma<br />
            </motion.h1>


            <motion.p
              variants={fadeIn('up', 0.5)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='text-[26px] lg:text-[36px] font-primary mb-4 lg:mb-12  text-indigo-50'>
              Luanda, Angola
            </motion.p>
            <Link to='/contact' className='btn mb-[30px]  text-indigo-50'>
              Agende aqui
            </Link>
          </div>

          <motion.div
            variants={fadeIn('left', 0.4)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className='flex justify-end max-h-96 lg:max-h-max'>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={transition1}
              className='relative lg:-right-40 overflow-hidden'>
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={transition1}
                src={BenguiImg} alt='Bengui' />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Home;