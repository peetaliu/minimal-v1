import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle, tech, cta, loc, contact, ref } = hero;

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
    <section id="hero" className="jumbotron">
      <Container>
        <div className="hero-block">
          <Fade left={isDesktop} bottom={isMobile} duration={750} delay={350} distance="30px">
            <h1 className="hero-title">
              {title}
              <span className="text-color-main">{name}</span>
              <br />
              {subtitle}
              <p>{tech}</p>
            </h1>
            <Fade right={isDesktop} bottom={isMobile} duration={750} delay={450} distance="30px">
              <h1 className="hero-info">
                {loc}
                <br />
                <span>{contact}</span>
                <br />
                <a href={ref} rel="noopener noreferrer" target="_blank">
                  Contact
                </a>
              </h1>
            </Fade>
          </Fade>
        </div>

        <Fade left={isDesktop} bottom={isMobile} duration={750} delay={750} distance="30px">
          <p className="hero-cta">
            <span className="cta-btn cta-btn--hero">
              <Link to="about" smooth duration={750}>
                {cta}
              </Link>
            </span>
          </p>
        </Fade>
      </Container>
    </section>
  );
};

export default Header;
