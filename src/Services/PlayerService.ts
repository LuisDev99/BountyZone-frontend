import axios from "axios";
import { GetAPIURL } from "../Helpers/Constants";
import Player, { AddPlayer, PlayerRole } from "../Models/Player";

class PlayerService {
  private URL: string = "";

  constructor() {
    this.URL = GetAPIURL() + "players";
  }

  getPlayerRoles() {
    return axios.get<PlayerRole[]>(`${this.URL}/roles`)
  }

  getPlayerByID(email: string) {
    return axios.get<Player>(`${this.URL}`, {
      params: { email }
    })
  }

  createAccount(playerInfo: AddPlayer) {
    console.log(playerInfo);
    return axios.post<Player>(`${this.URL}`, {
      ...playerInfo,
    })
  }
}

export default PlayerService;