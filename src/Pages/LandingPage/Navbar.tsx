import React from "react";
import styled from "styled-components";
import StyledComponents from "./StyledComponents";

const { StyledLink } = StyledComponents;

const Nav = styled.nav`
  display: flex;
  position: fixed;
  overflow: hidden;
  right: 0;
  margin-top: 20px;
  margin-right: 50px;
`;

function Navbar() {
  return (
    <Nav>
      <StyledLink to='/login'>Join Free!</StyledLink>
    </Nav>
  );
}

export default Navbar;
