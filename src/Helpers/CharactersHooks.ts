import useAsyncEffect from "use-async-effect";
import { useGameContext } from "../GameContext";
import PlayerService from "../Services/PlayerService";

export const useLeaderInfo = () => {
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

  return { leader, player };
}

export const useHunterInfo = () => {
  // TODO: Do the same but for the hunter

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

  return { leader, player };
}