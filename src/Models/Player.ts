interface Player {
  ID: number;
  Email: string;
  NickName: string;
  PlayerRole: PlayerRole;
}

export interface PlayerRole {
  ID: number;
  Type: "Leader" | "Hunter";
}


export default Player;