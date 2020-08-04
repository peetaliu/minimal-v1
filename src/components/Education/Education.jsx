import React, { useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioContext from '../../context/context';

const Education = () => {
  const { edu } = useContext(PortfolioContext);

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
              <Col className={i < edu.length - 1 ? 'eduEntry' : 'lastEntry'}>
                <span className="eduDate">{e.certDate}</span>
                <h3>{e.cert}</h3>
                <h3>{e.school}</h3>
                <p>{e.program}</p>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Education;
