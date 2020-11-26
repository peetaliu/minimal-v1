import React, { useState, useEffect } from 'react';
import Menu from './Menu/Menu';
import Hero from './Hero/Hero';
import About from './About/About';
import Projects from './Projects/Projects';
import Education from './Education/Education';
import Tech from './Tech/Tech';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

import { PortfolioProvider } from '../context/context';

import {
  menuData,
  heroData,
  aboutData,
  projectsData,
  eduData,
  techData,
  contactData,
  footerData,
} from '../mock/data';

function App() {
  const [menu, setMenu] = useState({});
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [edu, setEdu] = useState([]);
  const [tech, setTech] = useState({});
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setMenu({ ...menuData });
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
    setEdu([...eduData]);
    setTech({ ...techData });
    setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);

  return (
    <PortfolioProvider value={{ menu, hero, about, projects, edu, tech, contact, footer }}>
      <Hero />
      <About />
      <Projects />
      <Education />
      <Tech />
      <Contact />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
