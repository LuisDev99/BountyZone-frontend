import React, { useState } from "react";
import { BountyInfo } from "../../../Models/Bounty";
import { Leader } from "../../../Models/Leader";
import { ConfirmButton, EmojiSpan } from "./StyledComponents";

interface Props {
  victim: Leader;
  onConfirm: (victim: Leader, bountyInfo: BountyInfo) => void;
}

export default function BountyCard({ victim, onConfirm }: Props) {
  const [price, setPrice] = useState(0);
  const [time, setTime] = useState<Date>();

  function handleChangePrice(event: React.ChangeEvent<HTMLInputElement>) {
    setPrice(+event.target.value);
  }

  function handleChangeTime(event: React.ChangeEvent<HTMLInputElement>) {
    setTime(new Date(event.target.value));
  }

  function handleConfirm() {
    let defaultAttackDate = new Date();
    defaultAttackDate.setDate(defaultAttackDate.getDate() + 2);

    onConfirm(victim, {
      price,
      time: time ?? defaultAttackDate,
    });
  }

  return (
    <div>
      <h3>How much are you willing to pay?</h3>
      <div>
        <p>
          Bounty price: <input type='number' onChange={handleChangePrice} />{" "}
          [Bounties can be free!]
        </p>
      </div>
      <h3>When do you need to attack him?</h3>
      <p style={{ color: "red", fontSize: "0.8rem" }}>
        *Remember that someone needs to accept this bounty, so you might want to
        to choose a reasonable time window in order to succefully complete the
        attack. You won't get your money back if no one takes the bounty!
      </p>
      <div>
        <p>
          Time: <input type='datetime-local' onChange={handleChangeTime} />{" "}
          [Attack will default to 2 days from now if no time is provided]
        </p>
      </div>
      <ConfirmButton onClick={handleConfirm}>
        <EmojiSpan>⚔️</EmojiSpan> Confirm Bounty
      </ConfirmButton>
    </div>
  );
}
