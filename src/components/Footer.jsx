import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div>
      <footer
        className={`bg-gradient-to-r  ${
          theme === 'dark'
            ? 'from-[#c3b1e1] to-[#2a2431]/50 text-[#2a2431]'
            : 'from-[#2a2431]/50 to-[#2a2431] text-[#dbd8e3]'
        }   `}
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
