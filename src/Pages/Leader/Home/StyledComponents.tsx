import styled from "styled-components";

export const EmojiSpan = styled.span`
  font-size: 1.5rem;
`;

export const Text = styled.p`
  font-size: 1.4rem;
`;

export const VictimsContent = styled.div`
  display: flex;
  margin: 20px auto;
  flex-direction: column;
  text-align: center;
  align-content: center;
  justify-content: center;
`;

export const VictimCardsContent = styled.div`
  display: grid;
  grid-gap: 50px;
  justify-content: center;
  grid-template-columns: auto auto auto;
`;

export const VictimCardContent = styled.div`
  width: 200px;
  cursor: pointer;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

export const AttackButton = styled.button`
  color: ${props => props.theme.color};
  background-color: transparent;
  border-color: transparent;
  width: 80px;
`;

export const ConfirmButton = styled.button`
  color: ${props => props.theme.color};
  background-color: transparent;
  border-color: transparent;
  width: 200px;
  height: 80px;
  font-size: 1.3rem;
  margin: 0 auto;
  display: block;
`;

export const Card = styled.div`
  width: 40%;
  height: 30%;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  text-align: center;
  align-content: center;
  justify-content: center;
  transition: 0.3s;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;
