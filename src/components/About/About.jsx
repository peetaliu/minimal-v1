import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col, Image } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import res from '../../images/PeterLiuResume.pdf';
import profile from '../../images/profile.jpg';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { paragraphOne, paragraphTwo, paragraphThree } = about;

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
      <h1 className="title">ABOUT ME</h1>
      <Container className="about-wrapper">
        <Row>
          <Col className="about-wrapper__profile">
            <Fade left={isDesktop} top={isMobile} duration={750} delay={300}>
              <Image src={profile} roundedCircle fluid id="profile" />
            </Fade>
          </Col>
          <Col className="about-wrapper__info">
            <Fade right={isDesktop} bottom={isMobile} duration={750} delay={500} distance="30px">
              <p>{paragraphOne}</p>
              <p>{paragraphTwo}</p>
              <p>{paragraphThree}</p>
            </Fade>
          </Col>
        </Row>
      </Container>
      <div>
        <a href={res} target="_blank" className="cta-btn cta-btn--resume" rel="noreferrer">
          Resume
        </a>
      </div>
    </section>
  );
};

export default About;
