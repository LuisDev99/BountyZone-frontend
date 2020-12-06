import { Player } from "./Player";

export interface Hunter {
  ID: number;
  Guns: number;
  Bribes: number;
  PlayerID: number;
  Player: Player;
}
