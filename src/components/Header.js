import React from 'react';
import Socials from './Socials';
import Logo from '../img/header/logo.png';
import MobileNav from './MobileNav';

import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='bg-indigo-950 fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center'>
      <div className='flex flex-col lg:flex-row lg:items-center w-full justify-between'>
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
      </div>
      <Socials />
      <MobileNav />
    </header>
  );
};

export default Header;
