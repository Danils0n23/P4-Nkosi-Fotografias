import React, { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { CgMenuRight } from 'react-icons/cg';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const menuVariants = {
  hidden: {
    x: '100%'
  },
  show: {
    x: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.9],
    },
  },
};

const MobileNav = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <nav className='text-white xl:hidden'>
      <div onClick={() => setOpenMenu(true)}
        className='text-3x1 cursor-pointer'>
        <CgMenuRight />
      </div>
      <motion.div
        variants={menuVariants}
        initial='hidden'
        animate={openMenu ? 'show' : ''}
        className='bg-black shadow-2xl w-full absolute top-0 right-0 max-w-xs h-screen z-20'>
        <div
          onClick={() => setOpenMenu(false)}
          className='text-4x1 absolute z-30 left-4 top-14 cursor-pointer'>
          <IoMdClose />
        </div>
        <ul className='h-full flex flex-col justify-center items-center gap-y-8 text font-primary font-bold text-3xl'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>Sobre</Link>
          </li>
          <li>
            <Link to='/portfolio'>Portfolio</Link>
          </li>
          <li>
            <Link to='/contact'>Contactos</Link>
          </li>
        </ul>
      </motion.div>
    </nav>
  );
};

export default MobileNav;
