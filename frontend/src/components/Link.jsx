import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavLinkStyle = styled(NavLink)`
  display: block;
  background-color: #fff;
  text-decoration: none;
  padding: 0.5rem 2rem;
  margin-bottom: 20px;
  align-self: flex-end;
  color: #000;
  border-radius: 4px;
  transition: 0.3s all;
  opacity: 0.8;
  &:hover {
    opacity: 1;
  }
`;

const Link = () => {
  return (
    <>
      <NavLinkStyle to="formulario">Adicionar</NavLinkStyle>
    </>
  );
};

export default Link;
