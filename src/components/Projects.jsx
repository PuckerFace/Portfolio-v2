import React, { Suspense, useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { ChevronFirst } from '../svg/ChevronFirst';
import { ChevronLast } from '../svg/ChevronLast';

import { ErrorBoundary } from 'react-error-boundary';
import fallbackRender from './ErrorBoundary';
const ProjectGallary = React.lazy(() => import('./ProjectGallary'));

const Projects = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`transition-all duration-500 mb-50 mt-20 flex-col items-center justify-center h-full lg:h-screen flex gap-4 relative ${
        theme === 'dark' ? ' text-[#dbd8e3]' : 'text-[#3a3440] '
      }`}
      id="work"
    >
      <div className="flex flex-col items-center">
        <motion.h1
          whileInView={{ opacity: 0.2, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className={`tracking-[0.7rem]  opacity-20  z-1  text-7xl ${
            theme === 'dark' ? '  text-[#c3b1e1]' : ' text-[#473f4e]'
          }`}
        >
          Projects
        </motion.h1>
        <h2 className=" absolute top-10 lg:-top-4   z-2 text-4xl">
          My Projects
        </h2>
      </div>
      <div className="mt-10">
        <ErrorBoundary fallbackRender={fallbackRender} onReset={() => {}}>
          <Suspense fallback={<div>Loading...</div>}>
            <ProjectGallary />
          </Suspense>
        </ErrorBoundary>
      </div>
    </div>
  );
};

export default Projects;
