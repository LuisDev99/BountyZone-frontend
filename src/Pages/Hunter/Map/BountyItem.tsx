import React from "react";
import { Bounty } from "../../../Models/Bounty";
import { EmojiSpan } from "../../Leader/Home/StyledComponents";
import { BountyCardItem, Button } from "./StyledComponents";

interface Props {
  bounty: Bounty;
  onBountyConfirm: (bounty: Bounty) => void;
}

export default function BountyItem({ bounty, onBountyConfirm }: Props) {
  return (
    <BountyCardItem>
      <div>
        <EmojiSpan>⭐</EmojiSpan>
      </div>

      <p>Bounty Reward 💰: {bounty.Price}$</p>

      <p>
        <b>This leader needs to be taken down by: </b>
        {new Date(bounty.Time).toDateString()}
      </p>

      <h3>Want to take it?</h3>

      <Button onClick={() => onBountyConfirm(bounty)}>Accept bounty!</Button>
    </BountyCardItem>
  );
}
