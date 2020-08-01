import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
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
      <h1 className="techTitle">TECH</h1>
      <Container>
        <Fade left={isDesktop} bottom={isMobile} duration={750} delay={300} distance="30px">
          <h3 className="techTitle">{tech.title}</h3>
        </Fade>
        <Row lg={3} xs={2}>
          {logoArr &&
            logoArr.map((t, i) => {
              const { img, alt } = t;
              const delay = i * 100 + 200;
              return (
                <div className="selfCen" key={alt}>
                  <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={700}
                    delay={isMobile ? 300 : delay}
                    distance="30px"
                  >
                    <Col>
                      <div className="imgWrap">
                        <TechImg alt={alt} filename={img} />
                      </div>
                    </Col>
                  </Fade>
                </div>
              );
            })}
        </Row>
      </Container>
    </section>
  );
};

export default Tech;
