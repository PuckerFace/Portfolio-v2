import { useContext } from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import { ThemeContext } from './context/ThemeContext';
import About from './components/About';
import Journey from './components/Journey';
import { AnimatedTooltip } from './components/UI/AnimatedTooltip';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Skills from './components/Skills';
import SmoothFollower from './components/cursor/CustomCursor';

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      {/* #2a2431 */}
      {/* #3d1e1a */}
      {/* #2c2732 */}
      {/* #292331*/}
      <div
        className={`antialiased overflow-x-hidden  w-full min-h-screen transition-colors duration-500 font-poppins ${
          theme === 'dark' ? 'bg-[#2c2732]' : 'bg-[#dbd8e3]'
        } `}
      >
        <SmoothFollower />
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Journey />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
