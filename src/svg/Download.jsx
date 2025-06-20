import { motion, useAnimation } from 'motion/react';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const defaultTransition = {
  type: 'spring',
  stiffness: 250,
  damping: 25,
};

const Download = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  //   #2a2431
  //   stroke = ` `,
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
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={`${theme === 'dark' ? '#2a2431' : ' #dbd8e3'}`}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <motion.path
          variants={{
            normal: { pathLength: 1, opacity: 1 },
            animate: { pathLength: 1, opacity: 1 },
          }}
          animate={controls}
          initial="normal"
          d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
        />
        <motion.g
          variants={{
            normal: { y: 0 },
            animate: { y: [0, 3, 0], transition: { repeat: Infinity } },
          }}
          animate={controls}
          initial="normal"
        >
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" x2="12" y1="15" y2="3" />
        </motion.g>
      </svg>
    </div>
  );
};

export { Download };
