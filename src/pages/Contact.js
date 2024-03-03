import React from 'react';
import BenguiImg from '../img/contact/2.png';
import { fadeIn } from '../variants';
import { motion } from 'framer-motion';
import { transition1 } from '../transitions';

const Contact = () => {
  return (
    <section className='section'>
      <div className='container mx-auto h-full'>
        <div className='flex flex-col lg:flex-row h-full items-center justify-start pt-36 gap-x-8 text-center lg:text-left'>
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className='lg:flex-1 lg:pt-32 px-4'>
            <h1 className='h1'>Contacte</h1>
            <p className='mb-12'>Estamos abertos para marcações </p>
            <form className='flex flex-col gap-y-4'>
              <div className='flex gap-x-10'>
                <input
                  className='outline-none border-b
                   border-b-secondary
                   h-[60px] bg-transparent
                   font-secondary w-full pl-3 placeholder:text-[#757879]'
                  type='text'
                  placeholder='Seu nome' />
                <input
                  className='outline-none border-b
                   border-b-secondary
                   h-[60px] bg-transparent
                   font-secondary w-full pl-3 placeholder:text-[#757879]'
                  type='text'
                  placeholder='Seu Email' />
              </div>
              <input
                className='outline-none border-b
                   border-b-secondary
                   h-[60px] bg-transparent
                   font-secondary w-full pl-3 placeholder:text-[#757879]'
                type='text'
                placeholder='Sua mensagem' />
              <button className='btn mb-[30px] mx-auto lg:mx-0 self-start'>Enviar</button>
            </form>
          </motion.div>

          <motion.div
            variants={fadeIn('left', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className='relative lg:-right-40 overflow-hidden'>
            <motion.img
              whileHover={{ scale: 1.1 }}
              transition={transition1}
              src={BenguiImg} alt='Bengui' />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
