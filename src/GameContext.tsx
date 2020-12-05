import React, { useState, useContext } from "react";
import { Hunter } from "./Models/Hunter";
import { Leader } from "./Models/Leader";
import { Player } from "./Models/Player";

export interface GameContext {
  player?: Player;
  leader?: Leader;
  hunter?: Hunter;
  resetContext: () => void;
  setPlayerContext: (player: Player) => void;
  setLeaderContext: (leader: Leader) => void;
  setHunterContext: (hunter: Hunter) => void;
}

const GameAppContext = React.createContext<GameContext>({
  resetContext: () => {},
  setPlayerContext: (player: Player) => {},
  setLeaderContext: (leader: Leader) => {},
  setHunterContext: (hunter: Hunter) => {},
});

export function useGameContext() {
  return useContext(GameAppContext);
}

export function GameProvider({ children }: any) {
  const [player, setPlayerContext] = useState<Player | undefined>(undefined);
  const [leader, setLeaderContext] = useState<Leader | undefined>(undefined);
  const [hunter, setHunterContext] = useState<Hunter | undefined>(undefined);

  function resetContext() {
    setPlayerContext(undefined);
    setLeaderContext(undefined);
    setHunterContext(undefined);
  }

  return (
    <GameAppContext.Provider
      value={{
        hunter,
        leader,
        player,
        resetContext,
        setPlayerContext,
        setHunterContext,
        setLeaderContext,
      }}
    >
      {children}
    </GameAppContext.Provider>
  );
}
