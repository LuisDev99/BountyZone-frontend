import { Link } from "react-router-dom";
import styled from "styled-components";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 5px;
  margin-bottom: 20px;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 2.3rem;
  font-family: Arial, Helvetica, sans-serif;
`;

const Image = styled.img`
  width: 75vw;
  height: 85vh;
  border-radius: 8px;
`;

const StyledLink = styled(Link)`
  color: #0ef052;
  font-size: 1.2rem;
  text-decoration: none;
`;

export default { Content, Body, Title, Image, StyledLink };
