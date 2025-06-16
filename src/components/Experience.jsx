import React from 'react';
import { EXPERIENCES } from '../constants';

const Experience = () => {
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
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-purple-500"></div>

        {EXPERIENCES.map((item, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div
              key={index}
              className={`mb-12 flex flex-col md:flex-row items-center ${
                isLeft ? 'md:justify-start' : 'md:justify-end'
              } relative`}
            >
              {/* Card */}
              <div
                className={`w-full md:w-1/2 flex ${
                  isLeft ? 'md:justify-end md:pr-8' : 'md:justify-start md:pl-8'
                } z-10`}
              >
                <div className="w-full md:w-[350px] bg-transparent  backdrop-blur-sm   shadow-xl p-6 rounded-xl">
                  <span className="inline-block bg-gradient-to-r from-purple-300 to-purple-500 text-white px-3 py-1 text-sm font-semibold rounded-full mb-2">
                    {item.year}
                  </span>
                  <h3 className="text-xl font-bold text-[#c3b1e1]">
                    {item.role}
                  </h3>
                  <p className="text-gray-500 mt-2">{item.company}</p>

                  <div className="flex mt-3">
                    <div>
                      {item.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="text-white text-xs px-2 py-1 mr-2 mb-2 bg-purple-600 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Timeline Dot */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 bg-purple-500 border-4 border-white w-8 h-8 rounded-full z-20"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
