import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';

const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { cta, ctasub, btn, email } = contact;

  return (
    <section id="contact">
      <Container>
        <h1>CONTACT</h1>
        <Fade bottom duration={750} delay={200} distance="30px">
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">
              {cta}
              <br />
              {ctasub}
            </p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--contact"
              href={`mailto:${email}`}
            >
              {btn}
            </a>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
