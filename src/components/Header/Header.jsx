import React from "react";
import { BiCameraMovie, BiHomeAlt } from 'react-icons/bi';
import { NavContainer, NavLinkStyled, NavList } from './Header.styled';

const Header = () => {
  return (
    <NavContainer>
      <NavList>
        <NavLinkStyled to="/">
          <BiHomeAlt size={24} />
          Home
        </NavLinkStyled>
      </NavList>
      <NavList>
        <NavLinkStyled to="/movies">
          <BiCameraMovie size={24} />
          Movies
        </NavLinkStyled>
      </NavList>
    </NavContainer>
  );
};

export default Header;
