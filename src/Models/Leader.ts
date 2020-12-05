import { Player } from "./Player";

export interface Leader {
  Money: number;
  Reputation: number;
  SuccessfulAttacks: number;
  SuccessfulDefends: number;
  PlayerID: number;
  Player: Player;
}