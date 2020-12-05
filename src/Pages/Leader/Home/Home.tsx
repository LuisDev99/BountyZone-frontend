import React from "react";
import useAsyncEffect from "use-async-effect";
import { useGameContext } from "../../../GameContext";
import PlayerService from "../../../Services/LeaderService";
import { LeaderProfileCard } from "./LeaderProfileCard";

export default function Home() {
  const { player, leader, setLeaderContext } = useGameContext();

  useAsyncEffect(async () => {
    // If component did mount and there is no leader in the context,
    // fetch the leader by the player ID
    if (!leader) {
      try {
        const response = await new PlayerService().getLeaderByPlayerID(
          player!.ID
        );

        setLeaderContext(response.data);
      } catch (e) {
        console.log("Error while loading the hunter by its player ID.");
        console.log({ e });
      }
    }
  }, []);

  if (!leader) {
    return <h3>Loading your profile.... You will be out there soon</h3>;
  }

  return (
    <div>
      <LeaderProfileCard leader={leader} />
    </div>
  );
}
