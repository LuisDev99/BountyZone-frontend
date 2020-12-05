import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Route } from "../Models/Route";

const Navbar = styled.nav`
  background-color: #ffffff;
  height: 80px;
  display: flex;
  align-items: center;
`;

const Sidebar = styled.nav`
  background-color: #000000;
  width: 160px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: -100%;
  transition: 850ms;

  &.active {
    left: 0;
    transition: 350ms;
  }
`;

const MenuItems = styled.li`
  width: 100%;
`;

const Item = styled.li`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 8px 0px 8px 8px;
  list-style: none;
  height: 60px;

  & a {
    text-decoration: none;
    color: #f5f5f5;
    font-size: 18px;
    width: 95%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 16px;
    border-radius: 4px;
  }
`;

const MenuIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  background: none;
  color: #000000;
`;

const CloseIcon = styled(Link)`
  color: #fff;
  margin-left: 2rem;
  font-size: 2rem;
`;

const CloseMenu = styled.li`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: start;
  align-items: center;
`;

const Button = styled.button`
  background-color: transparent;
  border-color: transparent;
  text-transform: uppercase;
  font-size: 1rem;
  padding-right: 20px;
  cursor: pointer;
  margin-left: auto;
  color: ${props => props.theme.color};
`;

interface Props {
  routes: Route[];
  onLogout: Function;
}

function NavigationBar(props: Props) {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div>
        <Navbar>
          <MenuIcon to='#'>
            <FaIcons.FaBars onClick={showSidebar} />
          </MenuIcon>
          <Button onClick={() => props.onLogout()}>Sign out</Button>
        </Navbar>
      </div>

      <Sidebar className={sidebar ? "active" : ""}>
        <MenuItems onClick={showSidebar}>
          <CloseMenu>
            <CloseIcon to='#'>
              <AiIcons.AiOutlineClose />
            </CloseIcon>
          </CloseMenu>
          {props.routes.map((item, index) => {
            return (
              <Item key={index}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </Item>
            );
          })}
        </MenuItems>
      </Sidebar>
    </>
  );
}

export default NavigationBar;
