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

const CharacterOptions = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 30px;
  gap: 20px;
`;

const StyledLink = styled(Link)`
  font-size: 1.4rem;
  margin-top: 40px;
  text-decoration: none;
  background-color: transparent;
  color: ${props => props.theme.color};
`;

const Title = styled.h3`
  font-size: 1.3rem;
  font-family: Arial, Helvetica, sans-serif;
`;

const Image = styled.img`
  width: 400px;
  height: 300px;
  border-radius: 18px;
  cursor: pointer;
  margin-top: 20px;

  transition: all 300ms ease-in;

  &:hover {
    margin-top: 0px;
  }
`;

const StyledComponents = {
  CharacterOptions,
  StyledLink,
  Content,
  Title,
  Image,
};

export default StyledComponents;
