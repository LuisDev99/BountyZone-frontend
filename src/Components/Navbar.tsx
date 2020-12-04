import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const StyledLink = styled(Link)`
  background-color: #bb4343;
  color: white;
  padding: 1em 1.5em;
  text-decoration: none;
  text-transform: uppercase;
`;

interface Props {
  onLogout: Function;
}

function Navbar(props: Props) {
  return (
    <Nav>
      <StyledLink to='/login'>Login</StyledLink>
    </Nav>
  );
}

export default Navbar;
