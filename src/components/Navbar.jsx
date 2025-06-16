// import { useEffect, useRef, useState } from 'react';
// import { motion } from 'framer-motion';
// import { FaBars, FaTimes } from 'react-icons/fa';
// import { Sun, Menu, Moon } from 'lucide-react';
// import { NAVIGATION_LINKS } from '../constants';
// import { ThemeContext } from '../context/ThemeContext';
// import { useContext } from 'react';

// const Navbar = () => {
//   const [activeLink, setActiveLink] = useState(null);
//   const [active, setActive] = useState(0);
//   const [isOpen, setIsOpen] = useState(true);
//   const { theme, toggleTheme } = useContext(ThemeContext);
//   const navRef = useRef(null);

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

//   const handleLink = (e, href) => {
//     e.preventDefault();
//     const targetElement = document.querySelector(href);
//     if (targetElement) {
//       const offset = -85;
//       const elementPosition = targetElement.getBoundingClientRect().top;
//       const offsetPosition = elementPosition + window.scrollY + offset;

//       window.scrollTo({
//         top: offsetPosition,
//         behavior: 'smooth',
//       });
//     }
//     setActiveLink(href);
//   };

//   return (
//     <nav
//       className={`transition-all duration-500 ${
//         theme === 'dark' ? ' text-[#dbd8e3]' : 'text-[#2a2431] '
//       }`}
//     >
//       <div className="fixed left-0 right-0 top-0 p-2 z-50 backdrop-blur-xl  shadow-xs  border-b border-[#473f4e]">
//         <div className="flex justify-around items-center p-3">
//           <div>
//             <a href="/" aria-label="Home" className="text-3xl">
//               Bukky
//               <span
//                 className={` ${
//                   theme === 'dark' ? ' text-[#473f4e]' : 'text-[#c3b1e1] '
//                 } `}
//               >
//                 .
//               </span>
//             </a>
//           </div>

//           <div className="flex gap-2 items-center justify-between">
//             <div>
//               <a
//                 href=""
//                 className="border-2 border-[#473f4e] rounded-full py-2 px-3"
//               >
//                 Let's Talk.
//               </a>
//             </div>
//             <motion.div
//               whileTap={{ scale: 0.95 }}
//               animate={{ rotate: theme === 'dark' ? 180 : 0 }}
//               transition={{ type: 'spring', stiffness: 150, damping: 15 }}
//               onClick={toggleTheme}
//             >
//               {theme === 'dark' ? <Sun /> : <Moon />}
//             </motion.div>
//           </div>
//         </div>
//       </div>

//       <div
//         className="fixed left-4 lg:left-0 right-4 lg:right-0 bottom-6 z-50 "
//         ref={navRef}
//       >
//         {!isOpen ? (
//           <div
//             className={`mx-auto flex  items-center w-[100px]   justify-center rounded-4xl backdrop-blur-3xl  py-2  animate-bounce   ease-linear transition-all duration-500  ${
//               theme === 'dark' ? ' bg-[#473f4e]' : 'bg-[#cbc6d9]'
//             }   `}
//           >
//             <div className="flex items-center justify-between ">
//               <div className="">
//                 <button onClick={toggleNav} className="p-2 text-xl ">
//                   <Menu />
//                 </button>
//               </div>
//             </div>
//           </div>
//         ) : (
//           <div
//             className={`mx-auto flex  items-center max-w-sm lg:max-w-lg   justify-center rounded-4xl  py-2 backdrop-blur-3xl transition-all duration-500 bg-transparent border-2 ${
//               theme === 'dark' ? ' border-[#473f4e]' : 'border-[#cbc6d9]'
//             }  `}
//           >
//             {/*  */}
//             <div className="flex items-center justify-between gap-4 lg:gap-6">
//               <div className="">
//                 <span
//                   className={`h-14 w-14 absolute  translate   -top-5 rounded-full ${
//                     theme === 'dark' ? 'bg-[#39323f] ' : 'bg-[#beb6d4]'
//                   }`}
//                 ></span>
//                 <ul className="flex items-center gap-2 lg:gap-6 relative">
//                   {NAVIGATION_LINKS.map((link, index) => (
//                     <li key={index}>
//                       <a
//                         href={link.href}
//                         className={`flex flex-col justify-center  cursor-pointer items-center p-2`}
//                         // className={`inline-flex flex-col  cursor-pointer items-center justify-center p-2 text-base  rounded-full  transition-all duration-500 ${
//                         //   theme === 'dark'
//                         //     ? ' text-[#dbd8e3]'
//                         //     : 'text-[#2a2431] '
//                         // } ${
//                         //   activeLink === link.href
//                         //     ? theme === 'dark'
//                         //       ? 'bg-[#39323f] '
//                         //       : 'bg-[#beb6d4]'
//                         //     : ''
//                         // }`}
//                         onClick={(e) => handleLink(e, link.href)}
//                       >
//                         <span
//                           className={`duration-500 ${
//                             activeLink === link.href && '-mt-6'
//                           }`}
//                         >
//                           {link.label}
//                         </span>
//                         <span
//                           className={`${
//                             activeLink === link.href
//                               ? 'translate-y-4 duration-700 block'
//                               : 'hidden translate-y-10'
//                           }`}
//                         >
//                           {link.title}
//                         </span>
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Sun, Menu, Moon } from 'lucide-react';
import { NAVIGATION_LINKS } from '../constants';
import { ThemeContext } from '../context/ThemeContext';
import { useContext } from 'react';

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
            <a href="/" aria-label="Home" className="text-3xl">
              Bukky
              <span
                className={` ${
                  theme === 'dark' ? ' text-[#473f4e]' : 'text-[#c3b1e1] '
                } `}
              >
                .
              </span>
            </a>
          </div>

          <div className="flex gap-2 items-center justify-between">
            <div>
              <a
                href=""
                className="border-2 border-[#473f4e] rounded-full py-2 px-3"
              >
                Let's Talk.
              </a>
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
            {/*  */}
            <div className="flex items-center justify-between gap-4 lg:gap-6">
              <div className="">
                <ul className="flex items-center gap-2 lg:gap-6 ">
                  {NAVIGATION_LINKS.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className={`inline-flex flex-col  cursor-pointer items-center justify-center p-2 text-base  rounded-full  transition-all duration-500 ${
                          theme === 'dark'
                            ? ' text-[#dbd8e3]'
                            : 'text-[#2a2431] '
                        } ${
                          activeLink === link.href
                            ? theme === 'dark'
                              ? 'bg-[#39323f] '
                              : 'bg-[#beb6d4]'
                            : ''
                        }`}
                        onClick={(e) => handleLink(e, link.href)}
                      >
                        {link.label}
                      </a>
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
