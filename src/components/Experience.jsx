import React, { useContext } from 'react';
import { EXPERIENCES } from '../constants';
import { ThemeContext } from '../context/ThemeContext';
import { motion } from 'framer-motion';

const Experience = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="relative p-6 w-screen mt-4 overflow-hidden">
      <div className="relative">
        {/* Vertical line */}
        <div
          className={`hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 ${
            theme === 'dark' ? 'border-[#c3b1e1] ' : 'border-[#473f4e] '
          }`}
        ></div>

        {EXPERIENCES.map((item, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div
              key={index}
              className={`mb-12 flex flex-col md:flex-row items-center ${
                isLeft ? 'md:justify-start' : 'md:justify-end'
              } relative ${
                theme === 'dark' ? ' text-[#dbd8e3]' : 'text-[#3a3440] '
              }`}
            >
              {/* Card */}
              <div
                className={`w-full md:w-1/2 flex ${
                  isLeft ? 'md:justify-end md:pr-8' : 'md:justify-start md:pl-8'
                } z-10`}
              >
                <div
                  className={`w-full md:w-[350px] bg-transparent  backdrop-blur-sm border-b-2   shadow-xl p-6 rounded-xl ${
                    theme === 'dark' ? 'border-[#c3b1e1] ' : 'border-[#473f4e] '
                  }`}
                >
                  <span
                    className={`inline-block  bg-gradient-to-r px-3 py-1 text-sm font-semibold rounded-full mb-2 ${
                      theme === 'dark'
                        ? 'from-[#c3b1e1]/30 to-[#c3b1e1] text-[#2a2431]'
                        : 'from-[#2a2431]/50 to-[#2a2431] text-[#dbd8e3]'
                    }`}
                  >
                    {item.year}
                  </span>
                  <h3 className="text-xl font-bold ">{item.role}</h3>
                  <p className="text-gray-500 mt-2">{item.company}</p>

                  <div className="flex mt-3">
                    <div>
                      {item.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className={` text-xs px-2 py-1 mr-2 mb-2  rounded-full ${
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

              {/* Timeline Dot */}
              <div
                className={`hidden md:block absolute left-1/2 transform -translate-x-1/2 ${
                  theme === 'dark' ? '  bg-[#2c2732] ' : ' bg-[#dbd8e3]'
                } border-2 ${
                  theme === 'dark' ? 'border-[#c3b1e1] ' : 'border-[#2a2431] '
                } w-8 h-8 rounded-full z-20`}
              ></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
