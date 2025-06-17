import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { motion } from 'framer-motion';

import ContactCard from './ContactCard';
import ContactForm from './ContactForm';

const Contact = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`transition-all duration-500 my-20 flex-col items-center justify-center min-w-screen  h-full     gap-4 relative ${
        theme === 'dark' ? ' text-[#dbd8e3]' : 'text-[#3a3440] '
      }`}
      id="contact"
    >
      <div className="flex flex-col items-center">
        <motion.h1
          whileInView={{ opacity: 0.2, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
          className={`tracking-[0.7rem]  opacity-20  z-1 text-6xl  lg:text-7xl ${
            theme === 'dark' ? '  text-[#c3b1e1]' : ' text-[#473f4e]'
          }`}
        >
          Conatact
        </motion.h1>
        <h2 className=" absolute top-8 z-2 text-4xl">Contact Me</h2>
      </div>
      <div className="relative  mt-20 flex lg:flex-col flex-col-reverse  items-center justify-center    lg:p-12 p-2 ">
        <ContactCard />
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
