import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div>
      <footer
        className={` ${
          theme === 'dark'
            ? 'bg-[#dbd8e3] text-[#2c2732]'
            : ' bg-[#2c2732] text-[#dbd8e3]'
        } `}
      >
        <div className="container mx-auto text-center p-4">
          <p className="text-sm">
            © {new Date().getFullYear()} Bukola A. All rights reserved.
          </p>
          <p className="text-xs mt-2">Built with ❤️ </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
