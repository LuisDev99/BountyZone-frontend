import { Player } from "./Player";

export interface Leader {
  ID: number;
  Money: number;
  Reputation: number;
  SuccessfulAttacks: number;
  SuccessfulDefends: number;
  PlayerID: number;
  Player: Player;
}