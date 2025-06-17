import React, { useContext } from 'react';
import { EXPERIENCES } from '../constants';
import { ThemeContext } from '../context/ThemeContext';
import { motion } from 'framer-motion';

const Experience = () => {
  const { theme } = useContext(ThemeContext);
  return (
    // <div className="relative p-6 max-w-5xl mx-auto">
    //   <div className="relative">
    //     {/* Vertical Line */}
    //     <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-purple-500"></div>

    //     {/* Timeline Items */}
    //     {EXPERIENCES.map((item, index) => {
    //       const isLeft = index % 2 === 0;
    //       return (
    //         <div
    //           key={index}
    //           className={`mb-12 flex flex-col  md:flex-row items-center ${
    //             isLeft ? 'md:justify-start' : 'md:justify-end'
    //           } relative`}
    //         >
    //           <div
    //             className={`md:w-1/2 flex ${
    //               isLeft ? 'justify-end pr-8' : 'justify-start pl-8'
    //             } z-10`}
    //           >
    //             <div className="bg-white shadow-xl w-[450px] p-6 rounded-xl">
    //               <span className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 text-sm font-semibold rounded-full mb-2">
    //                 {item.year}
    //               </span>
    //               <h3 className="text-xl font-bold text-purple-700">
    //                 {item.role}
    //               </h3>
    //               <p className="text-gray-600 mt-2">{item.company}</p>
    //               {/* <a
    //                 href="#"
    //                 className="text-purple-600 font-semibold text-sm mt-3 inline-block"
    //               >
    //                 Read More &rarr;
    //               </a> */}
    //               <div className="flex">
    //                 <div>
    //                   {item.technologies.map((tech, techIndex) => (
    //                     <span
    //                       key={techIndex}
    //                       className="text-white text-xs px-2 py-1 mr-2 mb-2 bg-purple-600 rounded-full"
    //                     >
    //                       {tech}
    //                     </span>
    //                   ))}
    //                 </div>
    //               </div>
    //             </div>
    //           </div>

    //           {/* Timeline Circle */}
    //           <div className="absolute left-1/2 transform -translate-x-1/2 bg-purple-500 border-4 border-white w-8 h-8 rounded-full z-20"></div>
    //         </div>
    //       );
    //     })}
    //   </div>
    // </div>
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
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1.2 }}
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
              </motion.div>

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
