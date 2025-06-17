import React, { useContext } from 'react';
import { EDUCATION } from '../constants';
import { ThemeContext } from '../context/ThemeContext';

const Education = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="flex  w-full ">
      {EDUCATION.map((edu, index) => (
        <div
          key={index}
          className={`w-full   md:w-[350px] bg-transparent  backdrop-blur-sm   shadow-xl p-6 rounded-xl border-b-3 ${
            theme === 'dark'
              ? 'border-[#c3b1e1] text-[#dbd8e3]'
              : 'border-[#473f4e] text-[#3a3440]'
          }`}
        >
          <span
            className={`inline-block  bg-gradient-to-r px-3 py-1 text-sm font-semibold rounded-full mb-2 ${
              theme === 'dark'
                ? 'from-[#c3b1e1]/30 to-[#c3b1e1] text-[#2a2431]'
                : 'from-[#2a2431]/50 to-[#2a2431] text-[#dbd8e3]'
            }`}
          >
            {edu.date}
          </span>
          <h1 className="text-xl font-bold mb-2">{edu.title}</h1>
          <div className="mb-4">
            <p>{edu.school}</p>

            <p>{edu.location}</p>
          </div>
          {edu.skills.map((skill, skillIndex) => (
            <span
              key={skillIndex}
              className={` text-xs px-4  py-1 mr-2 mb-2  rounded-full ${
                theme === 'dark'
                  ? 'bg-[#c3b1e1] text-[#2a2431]'
                  : 'bg-[#2a2431] text-[#dbd8e3]'
              }`}
            >
              {skill}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Education;
