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
        <h3 className="techTitle">{tech.title}</h3>
        <Row lg={3} xs={2}>
          {logoArr &&
            logoArr.map((t) => {
              const { img, alt } = t;
              return (
                <Col className="selfCen">
                  <div className="imgWrap">
                    <TechImg alt={alt} filename={img} key={alt} />
                  </div>
                </Col>
              );
            })}
        </Row>
      </Container>
    </section>
  );
};

export default Tech;
