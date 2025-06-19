import React, { Suspense, useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Loader from './components/Loader';
import LazySection from './LazySection';

// const Hero = React.lazy(() => import('./components/Hero'));
const About = React.lazy(() => import('./components/About'));
// const Navbar = React.lazy(() => import('./components/Navbar'));
const Journey = React.lazy(() => import('./components/Journey'));
const Projects = React.lazy(() => import('./components/Projects'));
const Contact = React.lazy(() => import('./components/Contact'));
const Footer = React.lazy(() => import('./components/Footer'));
const Skills = React.lazy(() => import('./components/Skills'));
const SmoothFollower = React.lazy(() =>
  import('./components/cursor/CustomCursor')
);

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <div
        className={`antialiased overflow-x-hidden  w-full min-h-screen transition-colors duration-500 font-poppins ${
          theme === 'dark' ? 'bg-[#2c2732]' : 'bg-[#dbd8e3]'
        } `}
      >
        <Navbar />
        <Hero />

        <Suspense fallback={<Loader />}>
          <SmoothFollower />
        </Suspense>
        <Suspense fallback={<Loader />}>
          <LazySection>
            <About />
          </LazySection>
        </Suspense>
        <Suspense fallback={<Loader />}>
          <LazySection>
            <Skills />
          </LazySection>
        </Suspense>
        <Suspense fallback={<Loader />}>
          <LazySection>
            <Journey />
          </LazySection>
        </Suspense>
        <Suspense fallback={<Loader />}>
          <LazySection>
            <Projects />
          </LazySection>
        </Suspense>
        <Suspense fallback={<Loader />}>
          <LazySection>
            <Contact />
          </LazySection>
        </Suspense>
        <Suspense fallback={<Loader />}>
          <Footer />
        </Suspense>
      </div>
    </>
  );
}

export default App;

// import React, { Suspense, useContext, useEffect } from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   useLocation,
// } from 'react-router-dom';
// import { ThemeContext } from './context/ThemeContext';
// import Navbar from './components/Navbar';
// import Hero from './components/Hero'; // ✅ direct import (not lazy)

// const About = React.lazy(() => import('./components/About'));
// const Skills = React.lazy(() => import('./components/Skills'));
// const Journey = React.lazy(() => import('./components/Journey'));
// const Projects = React.lazy(() => import('./components/Projects'));
// const Contact = React.lazy(() => import('./components/Contact'));
// const Footer = React.lazy(() => import('./components/Footer'));
// const SmoothFollower = React.lazy(() =>
//   import('./components/cursor/CustomCursor')
// );

// // ✅ useLocation must be inside Router
// function ScrollToSection() {
//   const location = useLocation();

//   useEffect(() => {
//     const sectionId = location.pathname.replace('/', '') || 'home';
//     const section = document.getElementById(sectionId);
//     if (section) {
//       section.scrollIntoView({ behavior: 'smooth' });
//     }
//   }, [location.pathname]);

//   return null;
// }

// function AppContent() {
//   return (
//     <>
//       <ScrollToSection />
//       <Navbar />
//       <Hero /> {/* ✅ Not lazy-loaded */}
//       <Suspense fallback={<div className="text-center p-4">Loading...</div>}>
//         <Routes>
//           <Route path="/about" element={<About />} />
//           <Route path="/skills" element={<Skills />} />
//           <Route path="/journey" element={<Journey />} />
//           <Route path="/work" element={<Projects />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//       </Suspense>
//       <Suspense fallback={null}>
//         <Footer />
//       </Suspense>
//     </>
//   );
// }

// function App() {
//   const { theme } = useContext(ThemeContext);

//   return (
//     <div
//       className={`antialiased overflow-x-hidden w-full min-h-screen transition-colors duration-500 font-poppins ${
//         theme === 'dark' ? 'bg-[#2c2732]' : 'bg-[#dbd8e3]'
//       }`}
//     >
//       <Suspense fallback={null}>
//         <SmoothFollower />
//       </Suspense>

//       <Router>
//         <AppContent />
//       </Router>
//     </div>
//   );
// }

// export default App;
