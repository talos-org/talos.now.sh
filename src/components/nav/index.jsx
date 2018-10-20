import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

import rem from '../../utils/rem';

const NavItem = styled.div`
  font-family: 'Karla';
  font-size: ${rem(15)};
  margin-bottom ${rem(120)};
  text-align: left;
  transform: rotate(90deg);
  a,
  a:active,
  a:link,
  a:visited {
    color: #000;
    text-decoration: none;
  }
  &:nth-child(even) {
    pointer-events: none;
    text-decoration: line-through;
  }
`;

const VerticalNav = styled.nav`
  position fixed;
  top 27%;
  right 40px;
  transform translateY(-50%);
  z-index 2;
  color white;
  width 20px;
  height 100px;
`;

export default () => {
  return (
    <VerticalNav>
      <NavItem>
        <Link to="/">Home</Link>
      </NavItem>
      <NavItem>
        <Link to="/about">About</Link>
      </NavItem>
      <NavItem>
        <Link to="/upcoming">Upcoming</Link>
      </NavItem>
      <NavItem>
        <Link to="/members">Members</Link>
      </NavItem>
    </VerticalNav>
  );
};
