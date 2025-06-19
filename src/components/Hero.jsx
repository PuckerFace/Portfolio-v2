import { motion } from 'framer-motion';
import picture from '../assets/profile2.webp';
import { Send, Mouse, ChevronsDown, MoveUp, MoveRight } from 'lucide-react';
import github from '../assets/github.svg';
import githubLight from '../assets/github-light.svg';
// import instagram from '../assets/instagram.svg';
// import instagramLight from '../assets/instagram-light.svg';
import xLight from '../assets/xLight.svg';
import x from '../assets/x.svg';
import linkedin from '../assets/linkedin.svg';
import linkedinLight from '../assets/linkedin-light.svg';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import ArrowRight from '../svg/ArrowRight';
import ScribbleOne from '../svg/ScribbleOne';
import ConatctBtn from './buttons/ConatctBtn';

const Hero = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`transition-all duration-500 my-20 flex-col lg:flex-row items-center justify-center h-full lg:h-screen w-full flex gap-4  ${
        theme === 'dark' ? ' text-[#dbd8e3]' : 'text-[#3a3440] '
      }`}
      id="home"
    >
      <div className=" order-2 flex  lg:flex-col items-center gap-4 lg:gap-8 justify-center lg:p-6 ">
        <div className="lg:mb-3 flex lg:flex-col gap-4 lg:px-4">
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
        </div>
        <div className="mb-3 rotate-270 hidden lg:block">
          <ArrowRight />
        </div>
        <div className=" mb-1 lg:mr-1 hidden lg:block">
          <p className="  rotate-270">socials</p>
        </div>
      </div>
      <div className="w-3/4 flex flex-col p-6 lg:flex-row justify-center gap-2 lg:order-2 order-1">
        <div className=" flex justify-center lg:p-2 ">
          <img
            src={picture}
            alt=""
            className="rounded-full border-3 border-pink-300 sm:w-[400px] sm:h-[400px]  object-cover object-center w-[200px] h-[200px]   "
            width={400}
            height={400}
            loading="eager"
          />
          {/* <LazyLoadImage
            src={picture}
            effect="blur"
            className="rounded-full border-3 border-pink-300 sm:w-[400px] sm:h-[400px]  object-cover object-center w-[200px] h-[200px]   "
          /> */}
        </div>
        <div className=" flex justify-center p-2 items-center">
          <div className="flex flex-col items-center  lg:items-start gap-4">
            <div className="text-center lg:text-justify">
              {' '}
              <p className="leading-relaxed tracking-tighter text-xl text-zinc-400 ">
                Hey, I'm
              </p>
              <h1 className="lg:text-5xl text-4xl flex flex-col  tracking-wider mb-3">
                Bukola
                <span className="text-zinc-400">Ajamolaya</span>
              </h1>
              <h2
                className={`${
                  theme === 'dark'
                    ? 'bg-gradient-to-r from-[#dbd8e3] to-[#a99fc4]'
                    : 'bg-gradient-to-r from-[#74697d] to-[#2a2431]'
                } bg-clip-text text-lg   lg:text-2xl tracking-wide text-transparent`}
              >
                Web Developer
              </h2>
            </div>

            <div className="flex flex-col">
              {' '}
              <div>
                <ConatctBtn buttonType={'contact'} buttonStatus={'hero'} />
              </div>
              <div className="self-end ">
                <ScribbleOne />
              </div>
            </div>
          </div>
        </div>
      </div>
      <a
        className="order-3   flex flex-col items-center gap-2 lg:gap-8 justify-center "
        href="#about"
      >
        <div className="mb-3 hidden lg:block">
          <Mouse />
        </div>
        <div className="lg:mb-3 ml-1">
          <p className=" lg:rotate-90">scroll down</p>
        </div>
        <div className="animate-bounce">
          <ChevronsDown />
        </div>
      </a>
    </div>
  );
};

export default Hero;
