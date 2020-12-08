import React, { useState } from "react";

import BountyItem from "./BountyItem";
import HunterService from "../../../Services/HunterService";
import useAsyncEffect from "use-async-effect";

import { Bounty } from "../../../Models/Bounty";
import { BountyGrid } from "./StyledComponents";
import { useHunterInfo } from "../../../Helpers/CharactersHooks";

import bg from "../../../Assets/hunter_bg5.jpg";

const imageBGDivStyle: React.CSSProperties = {
  backgroundImage: `url(${bg})`,
  backgroundSize: "100% 100%",
  backgroundRepeat: "no-repeat",
  width: "100%",
  height: "100vh",
  textAlign: "center",
  justifyContent: "center",
};

function compareBountiesPriceDesc(a: Bounty, b: Bounty) {
  return b.Price - a.Price;
}

export default function Map() {
  const { player, hunter } = useHunterInfo();
  const [bounties, setBounties] = useState<Bounty[]>();
  const [sortByPrice, setSortByPrice] = useState(true);

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

  async function handleBountyConfirm(bounty: Bounty) {
    try {
      await new HunterService().confirmBounty(hunter!.ID, bounty);
      alert("Bounty is yours!");
    } catch (e) {
      console.log("Error confirming bounty: ", e);
    }
  }

  return (
    <div style={imageBGDivStyle}>
      <h3>List of available bounties. Quick, Grab some!!</h3>
      <p>
        Sort bounties by price:
        <input
          type='checkbox'
          checked={sortByPrice}
          onChange={() => setSortByPrice(!sortByPrice)}
        />
      </p>
      <BountyGrid>
        {bounties.length !== 0 && sortByPrice
          ? bounties
              .sort(compareBountiesPriceDesc)
              .map((bounty, idx) => (
                <BountyItem
                  key={idx}
                  bounty={bounty}
                  onBountyConfirm={handleBountyConfirm}
                />
              ))
          : bounties.map((bounty, idx) => (
              <BountyItem
                key={idx}
                bounty={bounty}
                onBountyConfirm={handleBountyConfirm}
              />
            ))}
      </BountyGrid>
    </div>
  );
}
