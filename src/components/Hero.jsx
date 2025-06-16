import { motion } from 'framer-motion';

// import picture from '../assets/picture.png';
// import picture from '../assets/picture.gif';

// import pictureBg from '../assets/picture.mp4';
// import picture from '../assets/pic.png';
// import picture from '../assets/profile.png';
// import picture from '../assets/profile.jpg';
import picture from '../assets/profile2.jpg';
import arrowright from '../assets/arrowRight.svg';
import { Send, Mouse, ChevronsDown, MoveUp, MoveRight } from 'lucide-react';
import github from '../assets/github.svg';
import githubLight from '../assets/github-light.svg';
// import instagram from '../assets/instagram.svg';
// import instagramLight from '../assets/instagram-light.svg';
import xLight from '../assets/xlight.svg';
import x from '../assets/x.svg';
import linkedin from '../assets/linkedin.svg';
import linkedinLight from '../assets/linkedin-light.svg';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import ArrowRight from '../svg/ArrowRight';
import ScribbleOne from '../svg/ScribbleOne';
import ConatctBtn from './buttons/ConatctBtn';

const Hero = () => {
  const containerVarients = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.5,
      },
    },
  };
  const childVarients = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`transition-all duration-500 my-20 flex-col lg:flex-row items-center justify-center h-full lg:h-screen w-full flex gap-4  ${
        theme === 'dark' ? ' text-[#dbd8e3]' : 'text-[#3a3440] '
      }`}
      id="home"
    >
      {/*  */}
      <div className=" order-2 flex  lg:flex-col items-center gap-4 lg:gap-8 justify-center lg:p-6 ">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1.5 }}
          className="lg:mb-3 flex lg:flex-col gap-4 lg:px-4"
        >
          <a
            href="https://x.com/PuckerFace7"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={theme === 'dark' ? xLight : x}
              alt=""
              className="w-10 lg:w-6 duration-200 ease-in hover:scale-130 cursor-pointer"
            />
          </a>
          <a
            href="https://github.com/puckerface"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={theme === 'dark' ? github : githubLight}
              alt=""
              className="w-10 lg:w-6 duration-200 ease-in hover:scale-130 cursor-pointer"
            />
          </a>
          {/* 
          <img
            src={theme === 'dark' ? instagram : instagramLight}
            alt=""
            className="w-10 lg:w-6 duration-200 ease-in hover:scale-130 cursor-pointer"
          /> */}

          <a
            href="https://www.linkedin.com/in/bukola-ajamolaya/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={theme === 'dark' ? linkedin : linkedinLight}
              alt=""
              className="w-10 lg:w-6 duration-200 ease-in hover:scale-130 cursor-pointer"
            />
          </a>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVarients}
          className="mb-3 rotate-270 hidden lg:block"
        >
          {/* <MoveRight /> */}
          {/* <img
            src={arrowright}
            alt=""
            className="w-16 h-16 fill-pink-400 "
          /> */}
          <ArrowRight />
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVarients}
          className=" mb-1 lg:mr-1 hidden lg:block"
        >
          <p className="  rotate-270">socials</p>
        </motion.div>
      </div>
      <div className="w-3/4 flex flex-col p-6 lg:flex-row justify-center gap-2 lg:order-2 order-1">
        <div className=" flex justify-center lg:p-2 ">
          <motion.img
            src={picture}
            alt=""
            className="rounded-full border-[1.2px] border-pink-300 sm:w-[400px] sm:h-[400px]  object-cover object-center w-[200px] h-[200px]   "
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          />
        </div>
        <div className=" flex justify-center p-2 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVarients}
            className="flex flex-col items-center  lg:items-start gap-4"
          >
            <div className="text-center lg:text-justify">
              {' '}
              <motion.p
                variants={childVarients}
                className="leading-relaxed tracking-tighter text-xl text-zinc-400 "
              >
                Hey, I'm
              </motion.p>
              <motion.h1
                variants={childVarients}
                className="lg:text-5xl text-4xl flex flex-col  tracking-wider mb-3"
              >
                Bukola
                <span className="text-zinc-400">Ajamolaya</span>
              </motion.h1>
              <motion.h2
                variants={childVarients}
                // className="gradient "
                className={`${
                  theme === 'dark'
                    ? 'bg-gradient-to-r from-[#dbd8e3] to-[#a99fc4]'
                    : 'bg-gradient-to-r from-[#74697d] to-[#2a2431]'
                } bg-clip-text text-lg   lg:text-2xl tracking-wide text-transparent`}
              >
                Web Developer
              </motion.h2>
            </div>

            <div className="flex flex-col">
              {' '}
              {/* <motion.a
                variants={childVarients}
                href="#contact"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-1  rounded-full text- p-3 justify-between items-center border-2 bg-[#dbd8e3] text-[#2a2431] "
              >
                Contact Me
                <Send />
              </motion.a> */}
              <motion.div variants={childVarients}>
                <ConatctBtn buttonType={'contact'} buttonStatus={'hero'} />
              </motion.div>
              <div className="self-end ">
                <ScribbleOne />
              </div>
            </div>
          </motion.div>
        </div>

        {/* <div className="flex items-center justify-center mt-2">
          {' '}
          <motion.a
            variants={childVarients}
            href="#contact"
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-1  rounded-full text- p-3 justify-between items-center border-2 bg-[#dbd8e3] text-[#2a2431] lg:hidden"
          >
            Contact Me
            <Send />
          </motion.a>
        </div> */}
      </div>
      <motion.a
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 2.5 }}
        className="order-3   flex flex-col items-center gap-2 lg:gap-8 justify-center "
        href="#about"
      >
        <div className="mb-3 hidden lg:block">
          <Mouse />
        </div>
        <div className="lg:mb-3 ml-1">
          <p className=" lg:rotate-90">scroll down</p>
        </div>
        <div>
          <ChevronsDown />
        </div>
      </motion.a>
    </div>
  );
};

export default Hero;
