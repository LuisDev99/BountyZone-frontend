export interface Player {
  ID: number;
  Email: string;
  NickName: string;
  PlayerRole: PlayerRole;
}

export interface AddPlayer {
  Email: string;
  NickName: string;
  PlayerRoleID: number;
}

export interface PlayerRole {
  ID: number;
  Type: string;
  ImageURL: string;
  Description: string;
}
