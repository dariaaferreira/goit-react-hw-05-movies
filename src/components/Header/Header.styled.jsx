import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavContainer = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: #3f51b5;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const NavList = styled.ul`
  display: flex;
  gap: 30px;
`;

export const NavLinkStyled = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  gap: 5px;
  
  font-weight: 500;
  color: white; 

  :hover,
  :focus {
    transform: scale(1.1);
  }

  &.active {
    font-weight: bold;
    color: black;
  }

`;