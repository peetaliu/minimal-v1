import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';

const Footer = () => {
  const { footer } = useContext(PortfolioContext);
  const { networks } = footer;

  return (
    <footer className="footer navbar-static-bottom">
      <Container>
        <span className="back-to-top">
          <Link to="hero" smooth duration={1000}>
            <i className="fa fa-angle-up fa-2x" aria-hidden="true" />
          </Link>
        </span>
        <div className="social-links">
          {networks &&
            networks.map((network) => {
              const { id, name, url } = network;
              return (
                <a key={id} href={url} rel="noopener noreferrer" target="_blank" aria-label={name}>
                  <i className={`fa fa-${name} fa-inverse`} />
                </a>
              );
            })}
        </div>
        <hr />
        <p>
          Made with <i className="fa fa-heart" /> using&nbsp;
          <a href="https://www.gatsbyjs.org/">GatsbyJS</a>
        </p>
        <p>&copy; Peter Liu 2020</p>
      </Container>
    </footer>
  );
};

export default Footer;
