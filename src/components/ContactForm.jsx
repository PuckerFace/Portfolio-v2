import React, { useContext, useRef, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { motion } from 'framer-motion';
// import emailjs from '@emailjs/browser';
import { SquareCheck, SquareX } from 'lucide-react';

const ContactForm = () => {
  const [status, setStatus] = useState(null);
  const form = useRef();
  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      const emailjs = await import('@emailjs/browser');

      const result = await emailjs.sendForm(
        'service_imgynnd',
        'template_3fe0p04',
        form.current,
        'Z53pvjnuli2VyDJmV'
      );

      console.log(result.text);
      setStatus(
        <span className="flex items-center gap-2 text-emerald-800">
          <SquareCheck className="w-6 h-6 fill-emerald-800 stroke-white" />
          Message sent successfully!
        </span>
      );

      setTimeout(() => {
        setStatus(null);
      }, 3000);
    } catch (error) {
      console.error(error.text || error);

      setStatus(
        <span className="flex items-center gap-2 text-red-800">
          <SquareX className="w-6 h-6 fill-red-800 stroke-white" />
          Failed to send message.
        </span>
      );
    }

    form.current.reset();
  };

  const { theme } = useContext(ThemeContext);
  return (
    <motion.div
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: -100 }}
      transition={{ duration: 1.2 }}
      viewport={{ once: true }}
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
      <form action="" className="lg:p-6 p-2 " ref={form} onSubmit={sendEmail}>
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
  );
};

export default ContactForm;
