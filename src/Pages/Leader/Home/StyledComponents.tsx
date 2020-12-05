import styled from "styled-components";

export const EmojiSpan = styled.span`
  font-size: 1.5rem;
`;

export const Text = styled.p`
  font-size: 1.4rem;
`;

export const Card = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  text-align: center;
  align-content: center;
  justify-content: center;
  height: 30%;
  width: 40%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;
