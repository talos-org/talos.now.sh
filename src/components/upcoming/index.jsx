import React from 'react';
import styled from 'styled-components';

import rem from '../../utils/rem';

const GitHubLink = styled.a`
  color: #4a4a4a;
  font-family: 'Lora';
  font-size: ${rem(30)};
  ${'' /* hover magic */} background-image: linear-gradient(-180deg, #FAD0C4 0%, #FFD1FF 100%);
  background-repeat: no-repeat;
  background-size: 100% 0.2em;
  background-position: 0 88%;
  transition: background-size 0.25s ease-in;
  &:hover {
    background-size: 100% 88%;
  }
  text-decoration: none;
`;

const GradientBG = styled.div`
  background-image: linear-gradient(-180deg, #fad0c4 0%, #ffd1ff 100%);
  height: 100vh;
  width: 100vw;
`;

const Heading = styled.p`
  color: #4a4a4a;
  font-family: 'Playfair Display';
  font-size: ${rem(72)};
  font-weight: bold;
  margin-top: ${rem(20)};
`;

const ListUpcoming = styled.ul`
  font-family: 'Karla';
  font-size: ${rem(25)};
  line-height: 1.5;
  list-style: none;
  padding: 0;
`;

const PeekBox = styled.div`
  background: #fff;
  bottom: 0;
  height: ${rem(475)};
  left: 0;
  margin: 0 auto;
  position: absolute;
  right: 0;
  width: ${rem(775)};
`;

const Upcoming = styled.li`
  border-left: 3px solid #4a4a4a;
  margin-bottom: ${rem(20)};
  &:before {
    content: '\\25CB';
    margin-left: -8px;
  }
`;

const Wrapper = styled.div`
  margin-left: ${rem(55)};
`;

export default () => {
  return (
    <GradientBG>
      <PeekBox>
        <Wrapper>
          <Heading>Upcoming</Heading>
          <ListUpcoming>
            <Upcoming>
              High-level design{' '}
              <span role="img" aria-label="hello">
                👉
              </span>{' '}
              Oct 30, 2018
            </Upcoming>
            <Upcoming>
              Detailed design{' '}
              <span role="img" aria-label="hello">
                👉
              </span>{' '}
              Nov 3, 2018
            </Upcoming>
            <Upcoming>
              Implementation & Prototype{' '}
              <span role="img" aria-label="hello">
                👉
              </span>{' '}
              Nov 30, 2018
            </Upcoming>
          </ListUpcoming>
          <GitHubLink
            href="https://github.com/talos-org"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </GitHubLink>
        </Wrapper>
      </PeekBox>
    </GradientBG>
  );
};
