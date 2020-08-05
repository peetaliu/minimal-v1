import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col, Card } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import ProjectImg from '../Image/ProjectImg';

const Projects = () => {
  const { projects } = useContext(PortfolioContext);

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
    <section id="projects">
      <Container>
        <div className="project-wrapper">
          <h1 className="h-title">PROJECTS</h1>
          <Row lg={4} md={2} sm={1} xs={1}>
            {projects.map((project, i) => {
              const { title, info, info2, url, repo, img, id } = project;
              const delay = i * 100 + 200;
              return (
                <Fade
                  left={isDesktop}
                  bottom={isMobile}
                  duration={750}
                  delay={isMobile ? 300 : delay}
                  distance="30px"
                  key={id}
                >
                  <Col className="cardCon">
                    <Card className="project-wrapper__text">
                      <ProjectImg alt={title} filename={img} />
                      <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{info}</Card.Subtitle>
                        <Card.Text>{info2}</Card.Text>
                        {url && <Card.Link href={url}>Live Demo</Card.Link>}
                        <Card.Link href={repo}>Source Code</Card.Link>
                      </Card.Body>
                    </Card>
                  </Col>
                </Fade>
              );
            })}
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Projects;
