import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { fadeIn } from '../variants';
import image1 from '../img/portfolio/m42.png';
import image2 from '../img/portfolio/mariano.jpg';
import image3 from '../img/portfolio/p4.png';
import image4 from '../img/portfolio/carinha.png';
import image5 from '../img/portfolio/13.png';
import image6 from '../img/portfolio/14.png';
import image7 from '../img/portfolio/31.png';
import image8 from '../img/portfolio/boss.png';
import image9 from '../img/portfolio/bri.png';
import image10 from '../img/portfolio/cul.png';
import image11 from '../img/portfolio/kaa.png';
import image12 from '../img/portfolio/kendaz.png';
import image13 from '../img/portfolio/m.png';
import image14 from '../img/portfolio/m12.png';
import image15 from '../img/portfolio/m33.png';
import image16 from '../img/portfolio/m4.png';
import image17 from '../img/portfolio/ng.png';
import image18 from '../img/portfolio/q1.png';
import image19 from '../img/portfolio/mari.png';
import image20 from '../img/portfolio/namoo.png';

const Portfolio = () => {
  const images = [
    { url: image1, alt: 'Image 1', description: 'Descrição da imagem 1' },
    { url: image2, alt: 'Image 2', description: 'Descrição da imagem 2' },
    { url: image3, alt: 'Image 3', description: 'Descrição da imagem 3' },
    { url: image4, alt: 'Image 4', description: 'Descrição da imagem 4' },
    { url: image5, alt: 'Image 5', description: 'Descrição da imagem 5' },
    { url: image6, alt: 'Image 6', description: 'Descrição da imagem 6' },
    { url: image7, alt: 'Image 7', description: 'Descrição da imagem 7' },
    { url: image8, alt: 'Image 8', description: 'Descrição da imagem 8' },
    { url: image9, alt: 'Image 9', description: 'Descrição da imagem 9' },
    { url: image10, alt: 'Image 10', description: 'Descrição da imagem 10' },
    { url: image11, alt: 'Image 11', description: 'Descrição da imagem 11' },
    { url: image12, alt: 'Image 12', description: 'Descrição da imagem 12' },
    { url: image13, alt: 'Image 13', description: 'Descrição da imagem 13' },
    { url: image14, alt: 'Image 14', description: 'Descrição da imagem 14' },
    { url: image15, alt: 'Image 15', description: 'Descrição da imagem 15' },
    { url: image16, alt: 'Image 16', description: 'Descrição da imagem 16' },
    { url: image17, alt: 'Image 17', description: 'Descrição da imagem 17' },
    { url: image18, alt: 'Image 18', description: 'Descrição da imagem 18' },
    { url: image19, alt: 'Image 19', description: 'Descrição da imagem 19' },
    { url: image20, alt: 'Image 20', description: 'Descrição da imagem 20' },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <section className='section h-screen overflow-y-auto'>
      <div className='container mx-auto h-full'>
        <div className='text-center lg:text-left pt-24 lg:pt-36 pb-8'>
          <h1 className='h1 text-3xl lg:text-4xl font-bold mb-6'>Portfolio</h1>
          <p className='max-w-lg mx-auto lg:mx-0 mb-8'>
            Na <b>P4-Nkosi Fotografias</b>, não apenas tiramos fotos, mas também criamos experiências.
            Desde o primeiro contato até a entrega final do produto, nossa equipe está dedicada a superar suas expectativas.
          </p>
          <motion.div
            variants={fadeIn('up', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
          >
            <Slider {...settings}>
              {images.map((image, index) => (
                <div key={index} className='bg-gray-200 p-4 rounded-lg mb-6'>
                  <motion.img
                    className='object-cover w-full h-64 mb-4 cursor-pointer'
                    src={image.url}
                    alt={image.alt}
                    onClick={() => setCurrentImageIndex(index)}
                    whileHover={{ scale: 1.1 }}
                  />
                </div>
              ))}
            </Slider>
          </motion.div>
          <div className='w-full relative'>
            <button onClick={prevImage} className='absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full'>
              &lt;
            </button>
            <button onClick={nextImage} className='absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full'>
              &gt;
            </button>
            <div className='w-full h-full lg:h-[85vh]'>
              <motion.img
                className='object-cover w-full h-full transition-all duration-500'
                src={images[currentImageIndex].url}
                alt={images[currentImageIndex].alt}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Portfolio;