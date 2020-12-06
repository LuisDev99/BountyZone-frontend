import React, { useState } from "react";
import { BountyInfo } from "../../../Models/Bounty";
import { ConfirmButton, EmojiSpan } from "./StyledComponents";

interface Props {
  onConfirm: (bountyInfo: BountyInfo) => void;
}

export default function BountyCard({ onConfirm }: Props) {
  const [price, setPrice] = useState(0);
  const [time, setTime] = useState(new Date());

  function handleChangePrice(event: React.ChangeEvent<HTMLInputElement>) {
    setPrice(+event.target.value);
  }

  function handleChangeTime(event: React.ChangeEvent<HTMLInputElement>) {
    setTime(new Date(event.target.value));
  }

  function handleConfirm() {
    onConfirm({
      price,
      time,
    });
  }

  return (
    <div>
      <h3>How much are you willing to pay?</h3>
      <div>
        <p>
          Bounty price: <input type='number' onChange={handleChangePrice} />
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
          Time: <input type='datetime-local' onChange={handleChangeTime} />
        </p>
      </div>
      <ConfirmButton onClick={handleConfirm}>
        <EmojiSpan>⚔️</EmojiSpan> Confirm Bounty
      </ConfirmButton>
    </div>
  );
}
