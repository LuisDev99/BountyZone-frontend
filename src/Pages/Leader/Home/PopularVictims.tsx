import React, { useState } from "react";
import useAsyncEffect from "use-async-effect";
import { Leader } from "../../../Models/Leader";
import LeaderService from "../../../Services/LeaderService";

import {
  EmojiSpan,
  Text,
  AttackButton,
  VictimsContent,
  VictimCardContent,
  VictimCardsContent,
} from "./StyledComponents";

interface VictimCardProps {
  victim: Leader;
}
function VictimCard({ victim }: VictimCardProps) {
  return (
    <VictimCardContent>
      <Text>
        <EmojiSpan>⭐</EmojiSpan>
        {victim.Player.NickName}
      </Text>
      <Text>Reputation: {victim.Reputation}</Text>
      <AttackButton>Place Bounty!</AttackButton>
    </VictimCardContent>
  );
}

interface PopularVictimsProps {
  leader: Leader;
}

export default function PopularVictims({ leader }: PopularVictimsProps) {
  const [popularVictims, setPopularVictims] = useState<Leader[]>([]);

  useAsyncEffect(async () => {
    try {
      const response = await new LeaderService().getPopularVictims();
      setPopularVictims(response.data);
    } catch (e) {
      console.log("Error while getting popular victims");
      console.log({ e });
    }
  }, []);

  return (
    <VictimsContent>
      <h3>Not feeling happy about your performance? </h3>
      <Text>
        Here are the most popular leaders for you to take down and feel better
      </Text>

      {popularVictims.length === 0 ? (
        <h4>Loading your targets....</h4>
      ) : (
        <VictimCardsContent>
          {popularVictims.map((victim, idx) => (
            <VictimCard key={idx} victim={victim} />
          ))}
        </VictimCardsContent>
      )}
    </VictimsContent>
  );
}
