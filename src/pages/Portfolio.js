import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
  const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15, image16, image17, image18, image19, image20];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className='section'>
      <div className='container mx-auto h-full relative'>
        <div className='flex flex-col lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8 '>
          <div className='flex flex-col lg:items-start w-full'>
            <div className='h1'>Portfolio</div>
            <div class='mb-12 max-w-sm'>
              <p>
                Na <b>P4-Nkosi Fotografias</b>, não apenas tiramos fotos, mas também criamos experiências.<br /> <br />Desde o primeiro contato até a entrega final do produto, nossa equipe está dedicada a superar suas expectativas.<br />
                <br />
              </p>
              <div className=' flex flex-col lg:items-center justify-center mb-1'>
                <Link to={'/contact'} className='btn'>Agende aqui</Link>
              </div>
            </div>

            <div className='w-full'>
              <Slider {...settings}>
                {images.map((image, index) => (
                  <div key={index} className='mx-auto max-w-[250px] lg:max-w-[320px] bg-accent overflow-hidden'>
                    <img className='object-cover w-full h-[187px] lg:h-[220px] hover:scale-110 transition-all duration-500 ' src={image} alt={`Image ${index + 1}`} />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
