import axios from "axios";
import React, { useState } from "react";

import LeaderService from "../../../Services/LeaderService";
import useAsyncEffect from "use-async-effect";

import { Bounty } from "../../../Models/Bounty";
import { useLeaderInfo } from "../../../Helpers/CharactersHooks";
import { BountiesSection, Title, Text } from "./StyledComponents";
import { FriendlyBountyCard, HostileBountyCard } from "./BountyCard";

interface BountiesState {
  leaderBounties: Bounty[];
  bountiesAgainstLeader: Bounty[];
}

// Create this object in order for the bounties state variable never be undefined
const defaultBounties: BountiesState = {
  leaderBounties: [],
  bountiesAgainstLeader: [],
};

export default function Bounties() {
  const { leader, player } = useLeaderInfo();
  const [bounties, setBounties] = useState<BountiesState>(defaultBounties);

  useAsyncEffect(async () => {
    // Load the leader's bounties only if leader exists
    if (!leader) return;

    // Fetch both leader's bounties and bounties that are against him
    axios
      .all([
        new LeaderService().getLeaderBounties(leader.ID),
        new LeaderService().getBountiesAgainstLeader(leader.ID),
      ])
      .then(
        axios.spread((...responses) => {
          setBounties({
            leaderBounties: responses[0].data,
            bountiesAgainstLeader: responses[1].data,
          });
        })
      )
      .catch(e => {
        console.log("Error while loading leader's bounties. E: ", e);
      });
  }, [leader]);

  if (!leader || !player) {
    return (
      <h3>Loading your bounties.... Take this time to rethink your strategy</h3>
    );
  }

  const { bountiesAgainstLeader, leaderBounties } = bounties;

  if (bountiesAgainstLeader?.length === 0 && leaderBounties?.length === 0) {
    return (
      <Title>
        Looks like you don't have any bounties going on. Return to the home page
        to create bounties and get rewards!
      </Title>
    );
  }

  return (
    <div>
      {bountiesAgainstLeader && bountiesAgainstLeader.length !== 0 && (
        <div>
          <Title>☠️ You're in danger! ☠️</Title>
          <Text>
            Someone placed a bounty on you and a Hunter accepted it. You can
            either bribe the hunter before the time passes and conserve your
            reputation or loose everything you've worked for!
          </Text>
          <BountiesSection>
            {bountiesAgainstLeader?.map((bounty, idx) => (
              <HostileBountyCard key={idx} bounty={bounty} />
            ))}
          </BountiesSection>
        </div>
      )}

      {leaderBounties && leaderBounties.length !== 0 && (
        <div>
          <Title>
            Here are all the bounties you've placed on other leaders,{" "}
            {player.NickName}
          </Title>
          <BountiesSection>
            {leaderBounties?.map((bounty, idx) => (
              <FriendlyBountyCard key={idx} bounty={bounty} />
            ))}
          </BountiesSection>
        </div>
      )}
    </div>
  );
}
