import axios from "axios";
import { GetAPIURL } from "../Helpers/Constants";
import { Leader } from "../Models/Leader";
import Player from "../Models/Player";

class PlayerService {
  private URL: string = "";

  constructor() {
    this.URL = GetAPIURL() + "players";
  }

  getLeaderByPlayerID(id: number) {
    return axios.get<Leader>(`${this.URL}/${id}/leader`)
  }

  getHunterByPlayerID(id: number) {
    return axios.get<Leader>(`${this.URL}/${id}/hunter`)
  }

  getPlayerByID(id: number) {
    return axios.get<Player>(`${this.URL}/${id}`)
  }
}

export default PlayerService;