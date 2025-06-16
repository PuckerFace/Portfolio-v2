import { motion, useAnimation } from 'motion/react';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const defaultTransition = {
  type: 'spring',
  stiffness: 250,
  damping: 25,
};

const ChevronFirst = ({
  width = 28,
  height = 28,
  strokeWidth = 2,

  ...props
}) => {
  const controls = useAnimation();
  const { theme } = useContext(ThemeContext);

  return (
    <div
      style={{
        cursor: 'pointer',
        userSelect: 'none',
        padding: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onMouseEnter={() => controls.start('animate')}
      onMouseLeave={() => controls.start('normal')}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        stroke={` ${theme === 'dark' ? '#dbd8e3' : ' #2a2431'}`}
        strokeWidth={strokeWidth}
        viewBox="0 0 24 24"
        fill="none"
        width={width}
        height={height}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <motion.path
          variants={{
            normal: { translateX: '0%' },
            animate: { translateX: '2px' },
          }}
          transition={defaultTransition}
          animate={controls}
          initial="normal"
          d="m17 18-6-6 6-6"
        />
        <motion.path
          variants={{
            normal: { translateX: '0%' },
            animate: { translateX: '-2px' },
          }}
          transition={defaultTransition}
          animate={controls}
          initial="normal"
          d="M7 6v12"
        />
      </svg>
    </div>
  );
};

export { ChevronFirst };
