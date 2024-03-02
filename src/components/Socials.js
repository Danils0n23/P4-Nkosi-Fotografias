import React from 'react';
import {
  ImInstagram,
  ImFacebook,
  ImWhatsapp
} from 'react-icons/im'

const Socials = () => {
  const defaultColor = "#fff"; // Defina sua cor padrão aqui
  return (
    <div className='hidden xl:flex ml-24'>
      <ul className='flex gap-x-4'>
        <li>
          <a href='https://web.facebook.com/profile.php?id=100071345795757' target='_blank' rel="noreferrer">
            <ImFacebook color={defaultColor} />
          </a>
        </li>

        <li>
          <a href='https://www.instagram.com/p4_nkosi_fotografias/' target='_blank' rel="noreferrer">
            <ImInstagram color={defaultColor} />
          </a>
        </li>

        <li>
          <a href='https://l.facebook.com/l.php?u=https%3A%2F%2Fapi.whatsapp.com%2Fsend%3Fphone%3D%252B244931707253%26data%3DARDJXbYsD4vEVsDFTbouAzXHnwdl_WAPTfa1zqghaBg8hvcrACPZ3gbNo6zkbJIjWevJpUZ-Fx8loolGTQOl6fulTm7E9FdSDzf5VKY9ZQJX2ZSATGZc0V8EbCfiDcluL3BpmNa1_MxZcyfcu8e2Moa5PA%26source%3DFB_Page%26app%3Dfacebook%26entry_point%3Dpage_cta%26fbclid%3DIwAR0tXBoVMehq-Vs-3WZP2JvUH3INTVhxJfLAPQIVlBB7Qfce4W5u5slMWcw&h=AT0M12ZH3CEWG6NaWsPGTp8PulnL9g2DRVtYfl2UMhGOOCjGVkA8qMUZ5b7XeJg9WS7TUnBoSwpLr-rMiin_xnrHSnDflKIPFBj38zXJSWW7Rvdr8hZLzsIYRXs82A' target='_blank' rel="noreferrer">
            <ImWhatsapp color={defaultColor} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
