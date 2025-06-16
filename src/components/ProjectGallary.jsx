import React, { useContext, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { PROJECTS } from '../constants';
import { ChevronFirst } from '../svg/ChevronFirst';
import { ChevronLast } from '../svg/ChevronLast';

const ProjectGallary = () => {
  const { theme } = useContext(ThemeContext);
  const [currentIndex, setCurrentIndex] = useState(0);
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? PROJECTS.length - 1 : prevIndex - 1
    );
  };
  return (
    <div>
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
        <ChevronFirst className="cursor-pointer" onClick={handlePrev} />
      </div>
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
        <ChevronLast className="cursor-pointer" onClick={handlePrev} />
      </div>
      <div className="w-full h-[500px] p-4 flex items-center justify-center relative overflow-hidden">
        <div>
          <img
            src={`${PROJECTS[currentIndex].image}`}
            alt={`${PROJECTS[currentIndex].title}`}
            className="rounded-lg rounded-b-none w-[400px]  object-cover shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105"
          />
          <div className="bg-[#dbd8e3] flex flex-col gap-3  text-[#2a2431]  p-4 ">
            {PROJECTS[currentIndex].title}
            <div>
              {PROJECTS[currentIndex].technologies.map((tech, index) => (
                <span
                  key={index}
                  className={`inline-flex px-2 py-1 m-1 rounded-full text-xs ${
                    theme === 'dark'
                      ? 'bg-[#c3b1e1] text-[#2a2431]'
                      : 'bg-[#2a2431] text-[#dbd8e3]'
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectGallary;
