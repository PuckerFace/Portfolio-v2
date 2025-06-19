import Hero from '../components/Hero';

import React, { Suspense, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import LazySection from '../LazySection';

const About = React.lazy(() => import('../components/About'));
const Skills = React.lazy(() => import('../components/Skills'));
const Journey = React.lazy(() => import('../components/Journey'));
const Projects = React.lazy(() => import('../components/Projects'));
const Contact = React.lazy(() => import('../components/Contact'));
const Footer = React.lazy(() => import('../components/Footer'));

const MainPage = () => {
  const location = useLocation();

  useEffect(() => {
    const sectionId = location.pathname.replace('/', '') || 'home';
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location.pathname]);

  return (
    <>
      <div id="home">
        <Hero />
      </div>

      <Suspense
        fallback={<div className="text-center py-4">Loading section...</div>}
      >
        <div id="about">
          <LazySection>
            <About />
          </LazySection>
        </div>
        <div id="skills">
          <LazySection>
            <Skills />
          </LazySection>
        </div>
        <div id="journey">
          <LazySection>
            <Journey />
          </LazySection>
        </div>
        <div id="projects">
          <LazySection>
            <Projects />
          </LazySection>
        </div>
        <div id="contact">
          <LazySection>
            <Contact />
          </LazySection>
        </div>
        <LazySection>
          <Footer />
        </LazySection>
      </Suspense>
    </>
  );
};

export default MainPage;
