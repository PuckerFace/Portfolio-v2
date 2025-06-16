import React, { useContext } from 'react';
import { Download } from '../../svg/Download';
import { ThemeContext } from '../../context/ThemeContext';
import { Rocket } from '../../svg/Rocket';

const ConatctBtn = ({ buttonType, buttonStatus }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div>
      {buttonType === 'contact' ? (
        <button
          className={`flex   rounded-full w-full px-6 lg:px-4 lg:py-1 justify-between items-center border-2 ${
            buttonStatus === 'hero'
              ? 'bg-[#dbd8e3] text-[#2a2431]'
              : theme === 'dark'
              ? 'border-[#dbd8e3] text-[#dbd8e3] transparent'
              : 'border-[#2a2431] text-[#2a2431] transparent'
          }`}
        >
          <a
            href="#contact"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center text-sm lg:text-base"
          >
            <p className="sm:block hidden">Contact Me</p>
            <p className="sm:hidden block">Contact</p>
            <Rocket />
          </a>
        </button>
      ) : (
        <button
          className={`flex   rounded-full w-full px-6 lg:px-4 lg:py-1 justify-between items-center border-2    ${
            theme === 'dark'
              ? 'bg-[#dbd8e3] text-[#2a2431]'
              : 'bg-[#2a2431] text-[#dbd8e3]'
          }`}
        >
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center text-sm lg:text-base"
            download
          >
            {' '}
            <p className="sm:block hidden"> My Resume</p>
            <p className="sm:hidden block">Resume</p>
            <Download />
          </a>
        </button>
      )}
    </div>
  );
};

export default ConatctBtn;
