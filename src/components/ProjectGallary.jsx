import React, { useContext, useState } from 'react';
import '../styles/project.css';
import { ThemeContext } from '../context/ThemeContext';
import { PROJECTS } from '../constants';
import { ChevronFirst } from '../svg/ChevronFirst';
import { ChevronLast } from '../svg/ChevronLast';
// import github from '../assets/github.svg';
import { Github, Link } from 'lucide-react';

const ProjectGallary = () => {
  const { theme } = useContext(ThemeContext);
  const [currentIndex, setCurrentIndex] = useState(0);
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? PROJECTS.length - 1 : prevIndex - 1
    );
  };
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === PROJECTS.length - 1 ? 0 : prevIndex + 1
    );
  };
  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };
  return (
    <div>
      <div className="flex items-center justify-center lg:gap-6">
        <div
        //   className="absolute top-1/2 left-6 transform -translate-y-1/2"
        >
          <ChevronFirst className="cursor-pointer" onClick={handlePrev} />
        </div>

        <div className="box lg:w-[500px] lg:h-[500px] w-[300px] h-[300px]  ">
          {/* <img
          src={`${PROJECTS[currentIndex].image}`}
          alt={`${PROJECTS[currentIndex].title}`}
          className=""
        /> */}
          <div
            style={{ backgroundImage: `url(${PROJECTS[currentIndex].image})` }}
            className="img bg-center bg-no-repeat bg-cover object-contain p-4 flex flex-col justify-end items-center "
          >
            <div className="p-3 text-center ">
              <h3 className="text-2xl text-[#]">
                {PROJECTS[currentIndex].title}
              </h3>

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
                {/* <div>
              <a href="#">
                <img src={github} alt="" />
              </a>
              <a href="#">
                <Link />
              </a>
            </div> */}
              </div>
            </div>
          </div>

          {/* <div
          style={{ backgroundImage: `url(${PROJECTS[currentIndex].image})` }}
          className="w-[500px] h-[500px] object-cover bg-cover bg-center rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-[1.2] "
        >
          <p>poop</p>
        </div> */}
          <div className="overlay">
            <div className="flex justify-center items-center gap-4">
              <a
                href="#"
                className="flex items-center gap-2 rounded-full border border-[#dbd8e3] bg-[#2a2431] p-2 text-white hover:bg-[#c3b1e1] hover:text-[#2a2431] transition-colors duration-300"
              >
                {/* <img src={github} alt="" /> */}
                <Github />
                <p className="tracking-wider">Github</p>
              </a>
              <a
                href="#"
                className="flex items-center gap-2 rounded-full border border-[#dbd8e3] bg-[#2a2431] p-2 text-white hover:bg-[#c3b1e1] hover:text-[#2a2431] transition-colors duration-300"
              >
                <Link />
                <p className="tracking-wider"> Demo</p>
              </a>
            </div>
          </div>
        </div>
        <div
        //   className="absolute top-1/2 right-6 transform -translate-y-1/2"
        >
          <ChevronLast className="cursor-pointer" onClick={handleNext} />
        </div>
      </div>
      <div className="flex justify-center py-2">
        <div className="flex items-center justify-center gap-2">
          {PROJECTS.map((project, index) => (
            <button
              key={index}
              className={`w-4 h-4 rounded-full ${
                currentIndex === index
                  ? theme === 'dark'
                    ? 'bg-[#c3b1e1] '
                    : 'bg-[#2a2431] '
                  : theme === 'dark'
                  ? 'bg-[#c3b1e1]/50 hover:opacity-100'
                  : 'bg-[#2a2431]/50 hover:opacity-100'
              }`}
              onClick={() => handleDotClick(index)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectGallary;
