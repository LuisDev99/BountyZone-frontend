import React, { useState } from "react";
import useAsyncEffect from "use-async-effect";
import { Bounty } from "../../../Models/Bounty";
import { useHunterInfo } from "../../../Helpers/CharactersHooks";
import HunterService from "../../../Services/HunterService";

export default function Map() {
  const { player, hunter } = useHunterInfo();
  const [bounties, setBounties] = useState<Bounty[]>();

  useAsyncEffect(async () => {
    if (!hunter) return;

    try {
      const response = await new HunterService().getAvailableBounties();
      setBounties(response.data);
    } catch (e) {
      console.log("Failed fetching bounties", e);
    }
  }, [hunter]);

  if (!hunter || !player) return <h2>Loading your profile...........!</h2>;

  if (!bounties) {
    return <h2>Loading bounties.... You'll get em!</h2>;
  }
  console.log(bounties);
  return (
    <div>
      {bounties.length !== 0 &&
        bounties.map((bounty, idx) => (
          <div key={idx}>
            {bounty.ID} - {bounty.Price} - {bounty.Time}
          </div>
        ))}
    </div>
  );
}
