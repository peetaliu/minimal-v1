import React, { useState, useEffect, useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Fade from 'react-reveal/Fade';

const Education = () => {
  const { edu } = useContext(PortfolioContext);
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
    <div id="edu">
      <h1>EDUCATION</h1>
      <Container className="eduList imp-text">
        <p>
          <span className="grayOut">Education I've received</span>
        </p>
        <Row xs={1}>
          {edu.map((e, i) => {
            return (
              <Fade
                left={isDesktop}
                bottom={isMobile}
                duration={750}
                delay={300}
                distance="30px"
                key={e.cert}
              >
                <Col className={i < edu.length - 1 ? 'eduEntry' : 'lastEntry'}>
                  <span className="eduDate">{e.certDate}</span>
                  <h3>{e.cert}</h3>
                  <h3>{e.school}</h3>
                  <p>{e.program}</p>
                </Col>
              </Fade>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Education;
