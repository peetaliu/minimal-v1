import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import PortfolioContext from '../../context/context';
import TechImg from '../Image/TechImg';

const Tech = () => {
  const { tech } = useContext(PortfolioContext);
  const logoArr = tech.logos;
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="tech">
      <h1>Tech</h1>
      <h3>{tech.title}</h3>
      {logoArr &&
        logoArr.map((t) => {
          const { img, alt } = t;
          return (
            <div className="imgWrap">
              <TechImg alt={alt} filename={img} key={alt} />
            </div>
          );
        })}
    </section>
  );
};

export default Tech;
