import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Sun, Menu, Moon } from 'lucide-react';
import { NAVIGATION_LINKS } from '../constants';
import { ThemeContext } from '../context/ThemeContext';
import { useContext } from 'react';
import { Button } from './UI/MovingBorder';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(null);

  const [isOpen, setIsOpen] = useState(true);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const navRef = useRef(null);

  const toggleNav = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    const handleScroll = () => {
      setIsOpen(false);
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLink = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = -85;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY + offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
    setActiveLink(href);
  };

  return (
    <nav
      className={`transition-all duration-500 ${
        theme === 'dark' ? ' text-[#dbd8e3]' : 'text-[#2a2431] '
      }`}
    >
      <div className="fixed left-0 right-0 top-0 p-2 z-50 backdrop-blur-xl  shadow-xs  border-b border-[#473f4e]">
        <div className="flex justify-around items-center p-3">
          <div>
            <a href="#home" aria-label="Home" className="text-3xl flex gap-1.5">
              Bukola
              <span
                className={` ${
                  theme === 'dark' ? ' text-[#473f4e]' : 'text-[#c3b1e1] '
                } `}
              >
                A.
              </span>
            </a>
          </div>

          <div className="flex gap-2 items-center justify-between">
            <div>
              <Button
                borderRadius="2rem"
                className={`border ${
                  theme === 'dark'
                    ? 'bg-[#2c2732] border-[#2a2431] '
                    : 'bg-[#dbd8e3] border-[#cac3d4]'
                }`}
              >
                <a
                  href="#contact"
                  className={`text-transparent  bg-gradient-to-r ${
                    theme === 'dark'
                      ? 'from-[#cac3d4] to-[#a08cbf]   '
                      : 'from-[#2a2431]/50 to-[#2a2431] '
                  } bg-clip-text`}
                >
                  Let's Talk.
                </a>
              </Button>
            </div>
            <motion.div
              whileTap={{ scale: 0.95 }}
              animate={{ rotate: theme === 'dark' ? 180 : 0 }}
              transition={{ type: 'spring', stiffness: 150, damping: 15 }}
              onClick={toggleTheme}
            >
              {theme === 'dark' ? <Sun /> : <Moon />}
            </motion.div>
          </div>
        </div>
      </div>

      {/*Bottom Navigation  */}

      <div
        className="fixed left-4 lg:left-0 right-4 lg:right-0 bottom-6 z-50 "
        ref={navRef}
      >
        {!isOpen ? (
          <div
            className={`mx-auto flex  items-center w-[100px]   justify-center rounded-4xl backdrop-blur-3xl  py-2  animate-bounce   ease-linear transition-all duration-500  ${
              theme === 'dark' ? ' bg-[#473f4e]' : 'bg-[#cbc6d9]'
            }   `}
          >
            <div className="flex items-center justify-between ">
              <div className="">
                <button onClick={toggleNav} className="p-2 text-xl ">
                  <Menu />
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div
            className={`mx-auto flex  items-center max-w-sm lg:max-w-lg   justify-center rounded-4xl  py-2 backdrop-blur-3xl transition-all duration-500 bg-transparent border-2 ${
              theme === 'dark' ? ' border-[#473f4e]' : 'border-[#cbc6d9]'
            }  `}
          >
            <div className="flex items-center justify-between gap-4 lg:gap-6">
              <div className="">
                <ul className="flex items-center gap-2 lg:gap-6 ">
                  {NAVIGATION_LINKS.map((link, index) => (
                    <li key={index} className="relative group">
                      <a
                        href={link.href}
                        onClick={(e) => handleLink(e, link.href)}
                        className={`inline-flex flex-col cursor-pointer items-center justify-center p-2 text-base rounded-full transition-all duration-500 ${
                          theme === 'dark' ? 'text-[#dbd8e3]' : 'text-[#2a2431]'
                        } ${
                          activeLink === link.href
                            ? theme === 'dark'
                              ? 'bg-[#39323f]'
                              : 'bg-[#beb6d4]'
                            : ''
                        }
                        `}
                      >
                        {link.label}
                      </a>

                      {/* Tooltip */}
                      <span
                        className={`absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md px-2 py-1 text-xs shadow-md transition-all duration-200 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 ${
                          theme === 'dark'
                            ? 'bg-[#39323f] text-[#beb6d4]'
                            : 'bg-[#beb6d4] text-[#2a2431]'
                        }
      `}
                      >
                        {link.title}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

// import { useEffect, useRef, useState, useContext } from 'react';
// import { motion } from 'framer-motion';
// import { Menu } from 'lucide-react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import { NAVIGATION_LINKS } from '../constants';
// import { ThemeContext } from '../context/ThemeContext';
// import { Button } from './UI/MovingBorder';

// const Navbar = () => {
//   const [activeLink, setActiveLink] = useState(null);
//   const [isOpen, setIsOpen] = useState(true);
//   const { theme, toggleTheme } = useContext(ThemeContext);
//   const navRef = useRef(null);
//   const navigate = useNavigate();
//   const location = useLocation();

//   const toggleNav = () => setIsOpen(!isOpen);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (navRef.current && !navRef.current.contains(event.target)) {
//         setIsOpen(false);
//       }
//     };
//     const handleScroll = () => {
//       setIsOpen(false);
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     document.addEventListener('scroll', handleScroll);

//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//       document.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   const handleLink = (e, path) => {
//     e.preventDefault();
//     navigate(path);
//     setActiveLink(path);
//   };

//   return (
//     <nav
//       className={`transition-all duration-500 ${
//         theme === 'dark' ? ' text-[#dbd8e3]' : 'text-[#2a2431]'
//       }`}
//     >
//       {/* Top Navbar */}
//       <div className="fixed left-0 right-0 top-0 p-2 z-50 backdrop-blur-xl shadow-xs border-b border-[#473f4e]">
//         <div className="flex justify-around items-center p-3">
//           <div>
//             <a href="/" aria-label="Home" className="text-3xl flex gap-1.5">
//               Bukola
//               <span
//                 className={`${
//                   theme === 'dark' ? ' text-[#473f4e]' : 'text-[#c3b1e1]'
//                 }`}
//               >
//                 A.
//               </span>
//             </a>
//           </div>

//           <div className="flex gap-2 items-center justify-between">
//             <Button
//               borderRadius="2rem"
//               className={`border ${
//                 theme === 'dark'
//                   ? 'bg-[#2c2732] border-[#2a2431]'
//                   : 'bg-[#dbd8e3] border-[#cac3d4]'
//               }`}
//             >
//               <a
//                 href="#contact"
//                 className={`text-transparent bg-gradient-to-r ${
//                   theme === 'dark'
//                     ? 'from-[#cac3d4] to-[#a08cbf]'
//                     : 'from-[#2a2431]/50 to-[#2a2431]'
//                 } bg-clip-text`}
//               >
//                 Let's Talk.
//               </a>
//             </Button>

//             <motion.div
//               whileTap={{ scale: 0.95 }}
//               animate={{ rotate: theme === 'dark' ? 180 : 0 }}
//               transition={{ type: 'spring', stiffness: 150, damping: 15 }}
//               onClick={toggleTheme}
//               className="cursor-pointer"
//             >
//               {theme === 'dark' ? <Menu /> : <Menu />}
//             </motion.div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Navigation */}
//       <div
//         className="fixed left-4 lg:left-0 right-4 lg:right-0 bottom-6 z-50"
//         ref={navRef}
//       >
//         {!isOpen ? (
//           <div
//             className={`mx-auto flex items-center w-[100px] justify-center rounded-4xl backdrop-blur-3xl py-2 animate-bounce transition-all duration-500 ${
//               theme === 'dark' ? 'bg-[#473f4e]' : 'bg-[#cbc6d9]'
//             }`}
//           >
//             <button onClick={toggleNav} className="p-2 text-xl">
//               <Menu />
//             </button>
//           </div>
//         ) : (
//           <div
//             className={`mx-auto flex items-center max-w-sm lg:max-w-lg justify-center rounded-4xl py-2 backdrop-blur-3xl transition-all duration-500 bg-transparent border-2 ${
//               theme === 'dark' ? 'border-[#473f4e]' : 'border-[#cbc6d9]'
//             }`}
//           >
//             <ul className="flex items-center gap-2 lg:gap-6">
//               {NAVIGATION_LINKS.map((link, index) => (
//                 <li key={index} className="relative group">
//                   <a
//                     href={link.to}
//                     onClick={(e) => handleLink(e, link.to)}
//                     className={`inline-flex flex-col cursor-pointer items-center justify-center p-2 text-base rounded-full transition-all duration-500 ${
//                       theme === 'dark' ? 'text-[#dbd8e3]' : 'text-[#2a2431]'
//                     } ${
//                       activeLink === link.to
//                         ? theme === 'dark'
//                           ? 'bg-[#39323f]'
//                           : 'bg-[#beb6d4]'
//                         : ''
//                     }`}
//                   >
//                     {link.label}
//                   </a>

//                   {/* Tooltip */}
//                   <span
//                     className={`absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md px-2 py-1 text-xs shadow-md transition-all duration-200 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 ${
//                       theme === 'dark'
//                         ? 'bg-[#39323f] text-[#beb6d4]'
//                         : 'bg-[#beb6d4] text-[#2a2431]'
//                     }`}
//                   >
//                     {link.title}
//                   </span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
