import React from 'react';
import styled from 'styled-components';

import rem from '../utils/rem';

// Grid
const Grid = styled.div`
  margin: 0;
  padding: 0;
`;

const Col = styled.div`
  float: left;
  margin: 0;
  width: 50%;
`;

const Row = styled.div`
  margin: 0;
  &:after {
    content: '';
    display: table;
    clear: both;
  }
`;

const GitHubLink = styled.a`
  color: #4a4a4a;
  font-family: 'Lora';
  font-size: ${rem(30)};
  ${'' /* hover magic */} background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
  background-repeat: no-repeat;
  background-size: 100% 0.2em;
  background-position: 0 88%;
  transition: background-size 0.25s ease-in;
  &:hover {
    background-size: 100% 88%;
  }
  text-decoration: none;
`;

const Heading = styled.p`
  font-family: 'Playfair Display';
  font-size: ${rem(90)};
  font-weight: 700;
  margin: 0;
`;

const GradientBG = styled.div`
  background-image: linear-gradient(60deg, #64b3f4 0%, #c2e59c 100%);
  height: 100vh;
  width: 100%;
`;

const Tagline = styled.p`
  color: #4a4a4a;
  font-family: 'Karla';
  font-size: ${rem(27)};
`;

const Wrapper = styled.div`
  margin: ${rem(150)} 0 0 0;
  padding: ${rem(50)};
`;

const Landing = () => {
  return (
    <Grid>
      <Row>
        <Col>
          <Wrapper>
            <Heading>Talos</Heading>
            <Tagline>
              A configurable platform for developing and deploying blockchains.
            </Tagline>
            <GitHubLink
              href="https://github.com/talos-org"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </GitHubLink>
          </Wrapper>
        </Col>
        <Col>
          <GradientBG />
        </Col>
      </Row>
    </Grid>
  );
};

export default Landing;
