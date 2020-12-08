import styled from "styled-components";
import { Link } from "react-router-dom";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 5px;
  margin-bottom: 20px;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 2.3rem;
  font-family: Arial, Helvetica, sans-serif;
`;

export const Image = styled.img`
  width: 75vw;
  height: 85vh;
  border-radius: 8px;
`;

export const StyledLink = styled(Link)`
  color: ${props => props.theme.color};
  font-size: 1.2rem;
  text-decoration: none;
`;
