import React from "react";

import hunter from "../../Assets/hunter.jpg";
import leader from "../../Assets/leader1.jpg";

import { Image, Content } from "./StyledComponents";

interface CharacterDisplayProps {
  Text: string;
  Title: string;
  ImageURL: string;
}

function CharacterDisplay({ ImageURL, Text, Title }: CharacterDisplayProps) {
  return (
    <div>
      <h3>{Title}</h3>
      <Image src={ImageURL} />
      <p>{Text}</p>
    </div>
  );
}

export default function InfoSection() {
  return (
    <Content>
      <h1>Two types of characters</h1>
      <CharacterDisplay
        Title='Leaders'
        ImageURL={leader}
        Text='Attack other leaders to destroy their reputations! There can only be one'
      />

      <CharacterDisplay
        Title='Hunters'
        ImageURL={hunter}
        Text='Enjoy causing chaos? Accept bounties and help leaders take down their targets to earn some guns'
      />
    </Content>
  );
}
