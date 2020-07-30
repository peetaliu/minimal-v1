import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { paragraphOne, paragraphTwo, paragraphThree, resume } = about;

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
    <section id="about">
      <Title title="About Me" />
      <Fade left={isDesktop} bottom={isMobile} duration={750} delay={500} distance="30px">
        <div className="about-wrapper__info">
          <p className="about-wrapper__info-text">{paragraphOne}</p>
          <p className="about-wrapper__info-text">{paragraphTwo}</p>
          <p className="about-wrapper__info-text">{paragraphThree}</p>
        </div>
        <span className="d-flex mt-3 phone-cen">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="cta-btn cta-btn--resume"
            href={resume}
          >
            Resume
          </a>
        </span>
      </Fade>
    </section>
  );
};

export default About;
