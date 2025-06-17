import React, { useContext, useRef, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Mail, Phone, SquareCheck, SquareX } from 'lucide-react';
import github from '../assets/github.svg';
import githubLight from '../assets/github-light.svg';
import xLight from '../assets/xlight.svg';
import x from '../assets/x.svg';
import linkedin from '../assets/linkedin.svg';
import linkedinLight from '../assets/linkedin-light.svg';
import ArrowLeft from '../svg/ArrowLeft';

const Contact = () => {
  const { theme } = useContext(ThemeContext);
  const [status, setStatus] = useState(null);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_imgynnd',
        'template_3fe0p04',
        form.current,
        'Z53pvjnuli2VyDJmV'
      )
      .then(
        (result) => {
          console.log(result.text);
          //   setStatus('Message sent successfully!');
          setStatus(
            <span className="flex items-center gap-2 text-emerald-800">
              <SquareCheck className="w-6 h-6 fill-emerald-800 stroke-white" />
              Message sent successfully!
            </span>
          );
          setTimeout(() => {
            setStatus(null); // Clear status after 3 seconds\
          }, 3000);
        },
        (error) => {
          console.log(error.text);

          setStatus(
            <span className="flex items-center gap-2 text-red-800">
              <SquareX className="w-6 h-6 fill-red-800 stroke-white" />
              Failed to send message.
            </span>
          );
        }
      );

    form.current.reset();
  };
  return (
    <div
      className={`transition-all duration-500 my-20 flex-col items-center justify-center min-w-screen  h-full     gap-4 relative ${
        theme === 'dark' ? ' text-[#dbd8e3]' : 'text-[#3a3440] '
      }`}
      id="contact"
    >
      <div className="flex flex-col items-center">
        <motion.h1
          whileInView={{ opacity: 0.2, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
          className={`tracking-[0.7rem]  opacity-20  z-1 text-6xl  lg:text-7xl ${
            theme === 'dark' ? '  text-[#c3b1e1]' : ' text-[#473f4e]'
          }`}
        >
          Conatact
        </motion.h1>
        <h2 className=" absolute top-8 z-2 text-4xl">Contact Me</h2>
      </div>
      <div className="relative  mt-20 flex lg:flex-col flex-col-reverse  items-center justify-center    lg:p-12 p-2 ">
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
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.2 }}
          className={`flex flex-col p-4 gap-2 lg:p-10 rounded-t-lg  lg:rounded-lg shadow-lg w-full lg:w-[600px] ${
            theme === 'dark'
              ? '  text-[#3a3440] bg-[#c3b1e1]/40'
              : 'text-[#dbd8e3]  bg-[#3a3440]/70'
          }`}
        >
          <h3
            className={`font-semibold flex gap-1.5 ${
              theme === 'dark' ? '  text-[#dbd8e3]' : 'text-[#473f4e]  '
            } text-lg lg:text-2xl `}
          >
            Send me a
            <span
              className={` ${
                theme === 'dark' ? 'text-[#c3b1e1]' : 'text-[#3a3440] '
              }  `}
            >
              Message
            </span>
          </h3>
          <form
            action=""
            className="lg:p-6 p-2 "
            ref={form}
            onSubmit={sendEmail}
          >
            <div className="flex items-center flex-col gap-4">
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                className={`lg:w-[90%] w-full outline-0 p-2 rounded-md border-2 ${
                  theme === 'dark'
                    ? 'border-[#dbd8e3]   hover:bg-[#c3b1e1]/50'
                    : ' hover:bg-[#473f4e]/50 border-[#3a3440]'
                } `}
              />
              <input
                type="email"
                placeholder="Your Email"
                name="email"
                className={`lg:w-[90%] w-full outline-0 p-2 rounded-md border-2 ${
                  theme === 'dark'
                    ? 'border-[#dbd8e3]   hover:bg-[#c3b1e1]/50'
                    : ' hover:bg-[#473f4e]/50 border-[#3a3440]'
                } `}
              />
              <input
                type="text"
                placeholder="Your Subject"
                name="subject"
                className={`lg:w-[90%] w-full outline-0 p-2 rounded-md border-2 ${
                  theme === 'dark'
                    ? 'border-[#dbd8e3]   hover:bg-[#c3b1e1]/50'
                    : ' hover:bg-[#473f4e]/50 border-[#3a3440]'
                } `}
              />
              <textarea
                placeholder="Your Message"
                name="message"
                className={`lg:w-[90%] w-full h-36 outline-0 p-2 rounded-md border-2  ${
                  theme === 'dark'
                    ? 'border-[#dbd8e3] text-[#3a3440]   hover:bg-[#c3b1e1]/50'
                    : ' hover:bg-[#473f4e]/50 border-[#3a3440] text-[#dbd8e3]'
                } `}
              ></textarea>

              <p>{status}</p>
              <button
                type="submit"
                className={`py-2 rounded-md px-6   duration-200 ${
                  theme === 'dark'
                    ? 'bg-[#c3b1e1] hover:bg-[#c3b1e1]/50 transition text-[#3a3440]'
                    : 'bg-[#473f4e] hover:bg-[#473f4e]/50 transition text-[#dbd8e3]'
                }`}
              >
                Send Message
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
