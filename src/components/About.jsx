import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import picture from '../assets/birthdayshoot9.jpg';
import { ABOUT_CONTENT } from '../constants';
import { motion } from 'framer-motion';
import { Send, Download } from 'lucide-react';
import ArrowLeft from '../svg/ArrowLeft';
// import ArrowRight from '../svg/ArrowRight';
// import ScribbleOne from '../svg/ScribbleOne';
import ScribbleTwo from '../svg/ScribbleTwo';
import ConatctBtn from './buttons/ConatctBtn';

const About = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`transition-all duration-500 my-20 flex-col items-center justify-center h-full lg:h-screen flex gap-4 relative ${
        theme === 'dark' ? ' text-[#dbd8e3]' : 'text-[#3a3440] '
      }`}
      id="about"
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
          About
        </h1>
        <h2 className=" absolute top-10 z-2 text-4xl">About Me</h2>
      </motion.div>

      <div className="flex flex-wrap p-6 lg:flex-row-reverse ">
        <div className="w-full lg:w-1/2 flex justify-center p-2">
          <motion.img
            src={picture}
            alt=""
            className=" w-[530px]  rounded-3xl object-contain border-2 border-[#473f4e] shadow-lg"
            // width={450}
            // height={450}
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1.2 }}
          />
        </div>
        <div className="w-full lg:w-1/2 flex justify-center p-2 items-center">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1.2 }}
            className="flex flex-col  gap-2"
          >
            <div className="flex flex-col  ">
              {' '}
              <h2 className="lg:text-5xl text-2xl   lg:racking-wider">
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
                {/* <a
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className={`flex gap-1  rounded-full text- p-3 justify-between items-center border-2    ${
                    theme === 'dark'
                      ? 'bg-[#dbd8e3] text-[#2a2431]'
                      : 'bg-[#2a2431] text-[#dbd8e3]'
                  }`}
                >
                  <Download />
                  My Resume
                </a> */}
                <ConatctBtn buttonType={'resume'} buttonStatus={'about'} />
              </div>{' '}
              <div>
                {/* <a
                  href="#contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex gap-1  rounded-full  p-3 justify-between items-center border-2  transparent ${
                    theme === 'dark'
                      ? 'border-[#dbd8e3] text-[#dbd8e3]'
                      : 'border-[#2a2431] text-[#2a2431]'
                  }`}
                >
                  Contact Me
                  <Send />
                </a> */}
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
