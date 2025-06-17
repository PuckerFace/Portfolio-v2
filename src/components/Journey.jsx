import { motion } from 'framer-motion';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { EDUCATION, JOURNEY_LINKS } from '../constants';
import { Dot, Circle } from 'lucide-react';
// import { FaCircle } from 'react-icons/fa';
import { useState } from 'react';
import Experience from './Experience';
import Education from './Education';
const Journey = () => {
  const { theme } = useContext(ThemeContext);
  const [activeLink, setActiveLink] = useState('#exp');
  const handleLink = (e, href) => {
    e.preventDefault;
    setActiveLink(href);
  };
  return (
    // flex
    <div
      className={`transition-all  duration-500 my-40  h-full lg:h-screen flex flex-col gap-8  items-center justify-center  ${
        theme === 'dark' ? ' text-[#dbd8e3]' : 'text-[#3a3440] '
      }`}
      id="journey"
    >
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-col items-center relative"
      >
        <h1
          className={`tracking-[0.7rem]  opacity-20  z-1  text-7xl ${
            theme === 'dark' ? '  text-[#c3b1e1]' : ' text-[#473f4e]'
          }`}
        >
          Journey
        </h1>
        <h2 className=" absolute top-10 z-2 text-4xl">My Journey</h2>
      </motion.div>
      <div className="flex mt-10">
        <div className="">
          <ul className="flex items-center gap-2 lg:gap-6">
            {JOURNEY_LINKS.map((link, index) => (
              <li
                key={index}
                className={`flex items-center justify-between rounded-full py-1 px-2
                    transition-all duration-200
                 ${
                   activeLink === link.href
                     ? theme === 'dark'
                       ? ' bg-[#dbd8e3] text-[#2a2431]'
                       : 'bg-[#2a2431] text-[#dbd8e3] '
                     : ''
                 } `}
              >
                {link.label}
                <a
                  href={link.href}
                  className={`inline-flex items-center justify-center p-2 text-base    transition-all duration-500  `}
                  onClick={(e) => handleLink(e, link.href)}
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <div className="w-full  relative h-full">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-md opacity-70  animate-blob "></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-md opacity-70 animate-blob animation-delay-2"></div>
          <div className="absolute left-20 -bottom-8 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-md opacity-70 animate-blob animation-delay-4"></div>

          {activeLink === '#exp' && (
            // <div className="flex  w-full ">
            //   <div className="flex flex-col gap-4">
            //     {EDUCATION.map((exp, index) => (
            //       <div key={index} className="">
            //         <h1>{exp.title}</h1>
            //         <p>{exp.company}</p>
            //         <div>
            //           <p>{exp.location}</p>
            //           <p>{exp.date}</p>
            //         </div>
            //         {exp.skills.map((skill, skillIndex) => (
            //           <p key={skillIndex}>{skill}</p>
            //         ))}
            //       </div>
            //     ))}
            //   </div>
            // </div>
            <Experience />
          )}
          {activeLink === '#edu' && <Education />}
        </div>
      </div>
    </div>
  );
};

export default Journey;
