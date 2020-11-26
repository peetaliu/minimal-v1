import React from 'react';
import { graphql, StaticQuery } from 'gatsby';


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

export default BackgroundSection;
