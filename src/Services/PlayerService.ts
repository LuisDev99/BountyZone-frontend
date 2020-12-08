import axios from "axios";
import BaseService from "./BaseService";

import { Hunter } from "../Models/Hunter";
import { Leader } from "../Models/Leader";
import { Player, AddPlayer, PlayerRole } from "../Models/Player";

class PlayerService extends BaseService {

  constructor() {
    super("players");
  }

  createAccount(playerInfo: AddPlayer) {
    console.log(playerInfo);
    return axios.post<Player>(`${this.URL}`, {
      ...playerInfo,
    })
  }

  getPlayerRoles() {
    return axios.get<PlayerRole[]>(`${this.URL}/roles`)
  }

  getPlayerByID(id: number) {
    return axios.get<Player>(`${this.URL}/${id}`)
  }

  getPlayerByEmail(email: string) {
    return axios.get<Player>(`${this.URL}`, {
      params: { email }
    })
  }

  getHunterByPlayerID(id: number) {
    return axios.get<Hunter>(`${this.URL}/${id}/hunter`)
  }

  getLeaderByPlayerID(id: number) {
    return axios.get<Leader>(`${this.URL}/${id}/leader`)
  }

}

export default PlayerService;