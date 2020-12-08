import React from "react";
import LeaderService from "../../../Services/LeaderService";

import { Bounty } from "../../../Models/Bounty";
import { Card, DefendButton } from "./StyledComponents";
import { EmojiSpan } from "../Home/StyledComponents";

interface Props {
  bounty: Bounty;
}

export function FriendlyBountyCard({ bounty }: Props) {
  const bountyDate = new Date(bounty.Time);
  return (
    <Card>
      <EmojiSpan>🎯</EmojiSpan>
      <h4>You paid: {bounty.Price}$</h4>
      <h5>
        Is confirmed:
        {bounty.IsConfirmed ? (
          <EmojiSpan>✔️</EmojiSpan>
        ) : (
          <EmojiSpan>❌</EmojiSpan>
        )}
      </h5>

      <h5>Bounty set for: {bountyDate.toLocaleDateString()}</h5>
      <h5>At: {bountyDate.toTimeString()}</h5>

      {bounty.Bribed && (
        <p>
          <EmojiSpan>⚠️</EmojiSpan>Your victim bribed the hunter! Your attack
          was defused<EmojiSpan>⚠️</EmojiSpan>
        </p>
      )}
    </Card>
  );
}

export function HostileBountyCard({ bounty }: Props) {
  const bountyDate = new Date(bounty.Time);

  async function handleDefend() {
    try {
      await new LeaderService().defendFromBounty(bounty);

      // Refresh the page so the new changes reflects. This can be improved
      window.location.reload();
    } catch (e) {
      console.log("Error while bribing. E: ", e);
    }
  }

  return (
    <Card>
      <p>
        <EmojiSpan>💣</EmojiSpan>
      </p>
      <h4>Bounty price: {bounty.Price}$</h4>

      <h5>Bounty set for: {bountyDate.toLocaleDateString()}</h5>
      <h5>At: {bountyDate.toTimeString()}</h5>

      {bounty.Bribed && (
        <p>
          <EmojiSpan>⚠️</EmojiSpan>Your victim bribed the hunter! Your attack
          was defused<EmojiSpan>⚠️</EmojiSpan>
        </p>
      )}

      <DefendButton onClick={handleDefend}>Bribe|Defend</DefendButton>
    </Card>
  );
}
