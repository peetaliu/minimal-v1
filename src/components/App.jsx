import React, { useState, useEffect } from 'react';
import Menu from './Menu/Menu';
import Hero from './Hero/Hero';
import About from './About/About';
import Projects from './Projects/Projects';
import Tech from './Tech/Tech';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

import { PortfolioProvider } from '../context/context';

import {
  menuData,
  heroData,
  aboutData,
  projectsData,
  techData,
  contactData,
  footerData,
} from '../mock/data';

function App() {
  const [menu, setMenu] = useState({});
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [tech, setTech] = useState({});
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setMenu({ ...menuData });
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
    setTech({ ...techData });
    setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);

  return (
    <PortfolioProvider value={{ menu, hero, about, projects, tech, contact, footer }}>
      <Menu />
      <Hero />
      <About />
      <Projects />
      <Tech />
      <Contact />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
