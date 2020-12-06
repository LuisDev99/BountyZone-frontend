import { Hunter } from "./Hunter";
import { Leader } from "./Leader";

export interface Bounty {
  ID: number;
  Time: Date;
  Price: number;
  Bribed: boolean;
  IsConfirmed: boolean;
  Leader: Leader;
  Victim: Leader;
  Hunter?: Hunter;
  LeaderID: number;
  VictimID: number;
  HunterID?: number;
}

export interface AddBounty {
  Price: number;
  LeaderID: number;
  Time: Date;
  VictimID: number;
}

export interface BountyInfo {
  price: number;
  time: Date;
}