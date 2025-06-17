import React, { useContext } from 'react';
import github from '../assets/github.svg';
import githubLight from '../assets/github-light.svg';
import xLight from '../assets/xlight.svg';
import x from '../assets/x.svg';
import linkedin from '../assets/linkedin.svg';
import linkedinLight from '../assets/linkedin-light.svg';
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import ArrowLeft from '../svg/ArrowLeft';
import { ThemeContext } from '../context/ThemeContext';

const ContactCard = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <motion.div
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: 100 }}
      transition={{ duration: 1.2 }}
      className={` flex flex-col gap-4 p-6 rounded-b-lg  lg:rounded-lg shadow-lg w-full lg:w-[350px] border-b-3    ${
        theme === 'dark'
          ? 'bg-[#dbd8e3] text-[#2c2732] border-b-[#c3b1e1]'
          : ' bg-[#2c2732] text-[#dbd8e3] border-b-[#473f4e]'
      } lg:absolute lg:-top-40 lg:right-25  `}
      //   top-25  left-5
    >
      <h3>Get in Touch </h3>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <Phone className="w-6 h-6" />
          <span className="ml-2">+234 813 034 7702</span>
        </div>
        <div className="flex items-center gap-2">
          <Mail className="w-6 h-6" />
          <span className="ml-2">bumolaya@gmail.com</span>
        </div>
      </div>
      <div>
        <p className="w-3/4">Yo can also hit me up on my socials</p>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1.5 }}
          className="mt-3 flex  gap-4 lg:px-4"
        >
          <a
            href="https://x.com/PuckerFace7"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center w-10 h-10 rounded-md p-2  ${
              theme === 'dark' ? ' bg-[#473f4e]' : 'bg-[#cbc6d9]'
            }  transition-all duration-200`}
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
            className={`flex items-center justify-center w-10 h-10 rounded-md p-2  ${
              theme === 'dark' ? ' bg-[#473f4e]' : 'bg-[#cbc6d9]'
            }  transition-all duration-200`}
          >
            <img
              src={theme === 'dark' ? github : githubLight}
              alt=""
              className="w-10 lg:w-6 duration-200 ease-in hover:scale-130 cursor-pointer"
            />
          </a>

          <a
            href="https://www.linkedin.com/in/bukola-ajamolaya/"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center w-10 h-10 rounded-md p-2  ${
              theme === 'dark' ? ' bg-[#473f4e]' : 'bg-[#cbc6d9]'
            }  transition-all duration-200`}
          >
            <img
              src={theme === 'dark' ? linkedin : linkedinLight}
              alt=""
              className="w-10 lg:w-6 duration-200 ease-in hover:scale-130 cursor-pointer"
            />
          </a>
          <ArrowLeft />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactCard;
