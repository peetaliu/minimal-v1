import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import styled from 'styled-components';

import BackgroundImage from 'gatsby-background-image';

const BackgroundSection = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "bg.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={(data) => {
      // Set ImageData.
      const imageData = data.desktop.childImageSharp.fluid;
      return (
        <BackgroundImage
          className={className}
          fluid={imageData}
          backgroundColor={`#040e18`}
        ></BackgroundImage>
      );
    }}
  />
);

// const StyledBackgroundSection = styled(BackgroundSection)`
//   width: 100vw;
//   height: 100vh;
//   position: absolute;
//   background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4));
//   background-position: bottom center;
//   background-repeat: repeat-y;
//   background-size: cover;
// `;

export default BackgroundSection;
