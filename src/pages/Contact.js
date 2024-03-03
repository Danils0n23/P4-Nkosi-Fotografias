import React from 'react';
import BenguiImg from '../img/contact/2.png';
import { fadeIn } from '../variants';
import { motion } from 'framer-motion';
import { transition1 } from '../transitions';
import { ImFacebook, ImInstagram, ImWhatsapp } from 'react-icons/im';

const defaultColor = '#fff'; // Defina a cor padrão que você deseja para os ícones

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
            className=' lg:flex-1 lg:pt-32 px-4 mb-11'>
            <h1 className='h1'>Contacte</h1>
            <p className='mb-12'>
              Na P4-Nkosi Fotografias, não apenas tiramos fotos, mas também criamos experiências. Desde o primeiro contato até a entrega final do produto.<br /><br />

              Nossa abordagem é centrada no cliente, focada em compreender suas necessidades, desejos e visão, para que possamos traduzi-los em imagens que o deixarão sem palavras.<br /><br />

              Confie na P4-Nkosi Fotografias para tornar seus momentos especiais ainda mais memoráveis. Junte-se a nós enquanto transformamos suas histórias em obras de arte que você vai querer revisitar vezes sem conta, entre em contactos pelas nossas redes sociais.
            </p>
            <div className='flex  gap-x-4'>
              <a href='https://web.facebook.com/profile.php?id=100071345795757' target='_blank' rel="noreferrer">
                <ImFacebook color={defaultColor} style={{ fontSize: '24px' }} />
              </a>
              <a href='https://www.instagram.com/p4_nkosi_fotografias/' target='_blank' rel="noreferrer">
                <ImInstagram color={defaultColor} style={{ fontSize: '24px' }} />
              </a>
              <a href='https://l.facebook.com/l.php?u=https%3A%2F%2Fapi.whatsapp.com%2Fsend%3Fphone%3D%252B244931707253%26data%3DARDJXbYsD4vEVsDFTbouAzXHnwdl_WAPTfa1zqghaBg8hvcrACPZ3gbNo6zkbJIjWevJpUZ-Fx8loolGTQOl6fulTm7E9FdSDzf5VKY9ZQJX2ZSATGZc0V8EbCfiDcluL3BpmNa1_MxZcyfcu8e2Moa5PA%26source%3DFB_Page%26app%3Dfacebook%26entry_point%3Dpage_cta%26fbclid%3DIwAR0tXBoVMehq-Vs-3WZP2JvUH3INTVhxJfLAPQIVlBB7Qfce4W5u5slMWcw&h=AT0M12ZH3CEWG6NaWsPGTp8PulnL9g2DRVtYfl2UMhGOOCjGVkA8qMUZ5b7XeJg9WS7TUnBoSwpLr-rMiin_xnrHSnDflKIPFBj38zXJSWW7Rvdr8hZLzsIYRXs82A' target='_blank' rel="noreferrer">
                <ImWhatsapp color={defaultColor} style={{ fontSize: '24px' }} />
              </a>
            </div>
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
