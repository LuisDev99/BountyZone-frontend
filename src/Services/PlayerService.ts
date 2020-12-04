import axios from "axios";
import { GetAPIURL } from "../Helpers/Constants";
import Player from "../Models/Player";

class PlayerService {
  private URL: string = "";

  constructor() {
    this.URL = GetAPIURL() + "players";
  }

  getPlayerByID(email: string) {
    return axios.get<Player>(`${this.URL}`, {
      params: { email }
    })
  }

  createAccount(email: string, nickName: string, playerRoleID: number) {
    return axios.post<Player>(`${this.URL}`, {
      data: {
        email,
        nickName,
        playerRoleID
      }
    })
  }
}

export default PlayerService;