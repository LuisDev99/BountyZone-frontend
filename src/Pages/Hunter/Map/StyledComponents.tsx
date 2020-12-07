import styled from "styled-components";

export const CenteredDiv = styled.div`
  text-align: center;
  justify-content: center;
`;

export const BountyGrid = styled.div`
  display: grid;
  grid-gap: 50px;
  margin-top: 30px;
  justify-content: center;
  grid-template-columns: auto auto auto;
`;

export const BountyCardItem = styled.div`
  width: 200px;
  height: 250px;
  text-align: center;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

export const Button = styled.button`
  color: ${props => props.theme.color};
  background-color: transparent;
  border-color: transparent;
  font-size: 1.01rem;
  margin: 0 auto;
  display: block;
`;
