import { useState } from "react";
import useAsyncEffect from "use-async-effect";
import { useGameContext } from "../GameContext";
import { Hunter } from "../Models/Hunter";
import { Leader } from "../Models/Leader";
import PlayerService from "../Services/PlayerService";

export const useLeaderInfo = () => {
  const { player } = useGameContext();
  const [leader, setLeader] = useState<Leader>();

  useAsyncEffect(async () => {
    // If component did mount, fetch the leader by the player ID
    if (!leader) {
      try {
        const response = await new PlayerService().getLeaderByPlayerID(
          player!.ID
        );

        setLeader(response.data);
      } catch (e) {
        console.log("Error while loading the leader by its player ID.");
        console.log({ e });
      }
    }
  }, []);

  return { leader, player };
}

export const useHunterInfo = () => {
  const { player } = useGameContext();
  const [hunter, setHunter] = useState<Hunter>();

  useAsyncEffect(async () => {
    // If component did mount, fetch the Hunter by the player ID
    if (!hunter) {
      try {
        const response = await new PlayerService().getHunterByPlayerID(
          player!.ID
        );

        setHunter(response.data);
      } catch (e) {
        console.log("Error while loading the hunter by its player ID.");
        console.log({ e });
      }
    }
  }, []);

  return { hunter, player };
}