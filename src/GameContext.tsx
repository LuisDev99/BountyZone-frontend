import React, { useState, useContext } from "react";
import { Hunter } from "./Models/Hunter";
import { Leader } from "./Models/Leader";
import { Player } from "./Models/Player";

export interface GameContext {
  player?: Player;
  leader?: Leader;
  hunter?: Hunter;
  setPlayer?: (player: Player) => void;
  setLeader?: (leader: Leader) => void;
  setHunter?: (hunter: Hunter) => void;
}

const GameAppContext = React.createContext<GameContext>({});

export function useGameContext() {
  return useContext(GameAppContext);
}

export function GameProvider({ children }: any) {
  const [player, setPlayer] = useState<Player | undefined>(undefined);
  const [leader, setLeader] = useState<Leader | undefined>(undefined);
  const [hunter, setHunter] = useState<Hunter | undefined>(undefined);

  return (
    <GameAppContext.Provider
      value={{
        hunter,
        leader,
        player,
        setPlayer,
        setHunter,
        setLeader,
      }}
    >
      {children}
    </GameAppContext.Provider>
  );
}
