import { RiReactjsLine } from 'react-icons/ri';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiMongodb } from 'react-icons/si';
import { DiRedis } from 'react-icons/di';
import { FaNodeJs } from 'react-icons/fa';
import { BiLogoPostgresql } from 'react-icons/bi';
import { SiTypescript } from 'react-icons/si';
import { SiJavascript } from 'react-icons/si';
import { SiTailwindcss } from 'react-icons/si';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
const iconVariant = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: 'linear',
      repeat: Infinity,
      repeatType: 'reverse',
    },
  },
});
const Skills = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`transition-all py-6 duration-500  flex-col items-center justify-center h-full lg:h-screen flex gap-4 relative ${
        theme === 'dark' ? ' text-[#dbd8e3]' : 'text-[#3a3440] '
      }`}
      id="skills"
    >
      <div className="flex flex-col items-center">
        <motion.h1
          whileInView={{ opacity: 0.2, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
          className={`tracking-[0.7rem]  opacity-20  z-1  text-7xl ${
            theme === 'dark' ? '  text-[#c3b1e1]' : ' text-[#473f4e]'
          }`}
        >
          Skills
        </motion.h1>
        <h2 className=" absolute lg:top-48 top-14 z-2 text-4xl"> My Skills</h2>
      </div>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="mt-5  flex-wrap  flex items-center justify-center gap-4 p-7"
      >
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariant(2.5)}
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariant(3)}
        >
          <SiJavascript className="text-7xl text-amber-400" />
        </motion.div>
        {/* <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariant(3)}
        >
          <TbBrandNextjs className="text-7xl text-white " />
        </motion.div> */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariant(5)}
        >
          <SiTailwindcss className="text-7xl fill-cyan-500  " />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariant(2)}
        >
          <SiTypescript className="text-7xl fill-sky-600  " />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariant(6)}
        >
          <SiMongodb className="text-7xl text-green-600 " />
        </motion.div>
        {/* <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariant(6)}
        >
          <DiRedis className="text-7xl text-red-900 " />
        </motion.div> */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariant(5)}
        >
          <FaNodeJs className="text-7xl text-yellow-600 " />
        </motion.div>
        {/* <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariant(5)}
        >
          <BiLogoPostgresql className="text-7xl text-sky-600 " />
        </motion.div> */}
      </motion.div>
    </div>
  );
};

export default Skills;
