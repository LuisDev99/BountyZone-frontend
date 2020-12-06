import { Hunter } from "./Hunter";
import { Leader } from "./Leader";

export interface Bounty {
  Time: Date;
  Price: number;
  Bribed?: boolean;
  IsConfirmed?: boolean;
  Leader?: Leader;
  Victim?: Leader;
  Hunter?: Hunter;
  LeaderID: number;
  VictimID: number;
  HunterID?: number;
}

export interface BountyInfo {
  price: number;
  time: Date;
}