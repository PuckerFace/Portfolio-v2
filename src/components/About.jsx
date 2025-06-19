import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { motion } from 'framer-motion';

import picture from '../assets/birthdayshoot9.webp'; // ✅ normal import
import { ABOUT_CONTENT } from '../constants/index'; // or destructure if needed
const ArrowLeft = React.lazy(() => import('../svg/ArrowLeft'));
const ScribbleTwo = React.lazy(() => import('../svg/ScribbleTwo'));
const ConatctBtn = React.lazy(() => import('./buttons/ConatctBtn'));

console.log('Importing About');

const About = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`transition-all duration-500 my-20 flex-col items-center justify-center h-full lg:h-screen flex gap-4 relative ${
        theme === 'dark' ? ' text-[#dbd8e3]' : 'text-[#3a3440] '
      }`}
      id="about"
    >
      <div className="flex flex-col items-center">
        <motion.h1
          whileInView={{ opacity: 0.2, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
          className={`tracking-[0.7rem]  opacity-20  z-1  text-7xl ${
            theme === 'dark' ? '  text-[#c3b1e1]' : ' text-[#473f4e]'
          }`}
        >
          About
        </motion.h1>
        <h2 className=" absolute top-10 z-2 text-4xl">About Me</h2>
      </div>

      <div className="flex flex-wrap p-6 lg:flex-row-reverse ">
        <div className="w-full lg:w-1/2 flex justify-center p-2">
          <motion.img
            src={picture}
            alt=""
            className=" w-[530px]  rounded-3xl object-contain border-2 border-[#473f4e] shadow-lg"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            loading="lazy"
            width={530}
            height={530}
            effect="blur"
          />
        </div>
        <div className="w-full lg:w-1/2 flex justify-center p-2 items-center">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="flex flex-col  gap-2"
          >
            <div className="flex flex-col  ">
              {' '}
              <h2 className="lg:text-5xl text-2xl   lg:tracking-wider">
                I am a{' '}
                <span
                  className={` ${
                    theme === 'dark' ? '  text-[#c3b1e1]' : ' text-[#473f4e]'
                  } `}
                >
                  {' '}
                  Web Developer.
                </span>
              </h2>
              <div className="self-end">
                <ArrowLeft />
              </div>
            </div>

            <p className="leading-loose   tracking-wide  mb-6">
              {ABOUT_CONTENT}
            </p>
            <div className="flex gap-3 ">
              <div>
                <ConatctBtn buttonType={'resume'} buttonStatus={'about'} />
              </div>{' '}
              <div>
                <ConatctBtn buttonType={'contact'} buttonStatus={'about'} />
              </div>
              <div className="self-end hidden lg:block">
                <ScribbleTwo />
              </div>
            </div>
            <div className="self-end block lg:hidden">
              <ScribbleTwo />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
