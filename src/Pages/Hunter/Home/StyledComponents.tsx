import { Link } from "react-router-dom";
import styled from "styled-components";

export const ButtonLink = styled(Link)`
  width: 200px;
  height: 60px;
  color: white;
  margin: 0 auto;
  text-align: center;
  cursor: pointer;
  font-size: 1.1rem;
  border-radius: 8px;
  border-color: transparent;
  text-decoration: none;
  background-color: ${props => props.theme.color};
`;

export const Card = styled.div`
  width: 40%;
  height: 500px;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  text-align: center;
  align-content: center;
  justify-content: center;
  color: white;
  background: linear-gradient(to bottom right, #0e1f35 83%, #01118e 100%);

  transition: 0.3s;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;
