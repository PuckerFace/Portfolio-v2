import React, { useContext, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { ChevronFirst } from '../svg/ChevronFirst';
import { ChevronLast } from '../svg/ChevronLast';
import ProjectGallary from './ProjectGallary';

const Projects = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`transition-all duration-500 my-20 flex-col items-center justify-center h-full lg:h-screen flex gap-4 relative ${
        theme === 'dark' ? ' text-[#dbd8e3]' : 'text-[#3a3440] '
      }`}
      id="work"
    >
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-col items-center"
      >
        <h1
          className={`tracking-[0.7rem]  opacity-20  z-1  text-7xl ${
            theme === 'dark' ? '  text-[#c3b1e1]' : ' text-[#473f4e]'
          }`}
        >
          Projects
        </h1>
        <h2 className=" absolute top-3   z-2 text-4xl">My Works</h2>
      </motion.div>
      <div className="mt-10">
        <ProjectGallary />
      </div>
    </div>
  );
};

export default Projects;
