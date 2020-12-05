import React from "react";
import { Leader } from "../../../Models/Leader";

import { EmojiSpan, Card, Text } from "./StyledComponents";

interface Props {
  title: string;
  leader: Leader;
}
export function LeaderProfileCard({ leader, title }: Props) {
  return (
    <Card>
      <h2>{title}</h2>
      <Text>
        <EmojiSpan>Money 💸</EmojiSpan>: {leader.Money}$
      </Text>
      <Text>Reputation: {leader.Reputation}</Text>
      <Text>Successful Attacks: {leader.SuccessfulAttacks}</Text>
      <Text>Successful Defends: {leader.SuccessfulDefends}</Text>
    </Card>
  );
}
