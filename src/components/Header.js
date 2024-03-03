import React from 'react';
import Socials from './Socials';
import Logo from '../img/header/logo.png';
import MobileNav from './MobileNav';
import { fadeIn } from '../variants';
import { motion } from 'framer-motion';

import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center'>
      <motion.div
        variants={fadeIn('up', 0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: false, amount: 0.7 }}
        className='flex flex-col lg:flex-row lg:items-center w-full justify-between'>
        <Link to={'/'} className='max-w-[200px]'>
          <img src={Logo} alt='' />
        </Link>
        <nav className='hidden xl:flex gap-x-12 font-semibold'>
          <Link
            to={'/'}
            className='text-[#fff] transition hover:text-[#66ccff] hover:shadow-lg'
          >
            Home
          </Link>
          <Link
            to={'/about'}
            className='text-[#fff] transition hover:text-[#66ccff] hover:shadow-lg'
          >
            Sobre
          </Link>
          <Link
            to={'/portfolio'}
            className='text-[#fff] transition hover:text-[#66ccff] hover:shadow-lg'
          >
            Portfolio
          </Link>
          <Link
            to={'/contact'}
            className='text-[#fff] transition hover:text-[#66ccff] hover:shadow-lg'
          >
            Contactos
          </Link>
        </nav>
      </motion.div>
      <Socials />
      <MobileNav />
    </header>
  );
};

export default Header;
