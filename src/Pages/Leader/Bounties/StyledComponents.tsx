import styled from "styled-components";

export const Title = styled.h2`
  text-align: center;
`;

export const Text = styled.p`
  text-align: center;
`;

export const DefendButton = styled.button`
  color: ${props => props.theme.color};
  background-color: transparent;
  border-color: transparent;
  font-size: 1.1rem;
  cursor: pointer;
  width: 100px;
`;

export const BountiesSection = styled.div`
  display: grid;
  grid-gap: 50px;
  margin-top: 30px;
  justify-content: center;
  grid-template-columns: auto auto auto;
`;

export const Card = styled.div`
  width: 200px;
  text-align: center;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;
