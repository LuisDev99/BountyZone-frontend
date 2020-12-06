import React from "react";
import { Leader } from "../../../Models/Leader";

import {
  EmojiSpan,
  Text,
  AttackButton,
  VictimCardContent,
} from "./StyledComponents";

interface VictimCardProps {
  victim: Leader;
  onViewVictim: (victim: Leader) => void;
  onPlaceBounty: (victim: Leader) => void;
}

export default function VictimCard(props: VictimCardProps) {
  const { victim, onViewVictim, onPlaceBounty } = props;

  function handlePlaceBounty(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    event.stopPropagation();
    onPlaceBounty(victim);
  }

  return (
    <VictimCardContent onClick={() => onViewVictim(victim)}>
      <Text>
        <EmojiSpan>⭐</EmojiSpan>
        {victim.Player.NickName}
      </Text>
      <Text>Reputation: {victim.Reputation}</Text>
      <AttackButton onClick={handlePlaceBounty}>Place Bounty!</AttackButton>
    </VictimCardContent>
  );
}
