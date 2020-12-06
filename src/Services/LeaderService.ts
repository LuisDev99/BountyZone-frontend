import axios from "axios";
import { GetAPIURL } from "../Helpers/Constants";
import { Bounty } from "../Models/Bounty";
import { Leader } from "../Models/Leader";

class LeaderService {
  private URL: string = "";

  constructor() {
    this.URL = GetAPIURL() + "leaders";
  }

  placeBountyOnVictim(bounty: Bounty) {
    return axios.post(`${this.URL}/place-bounty`, {
      ...bounty
    })
  }

  getPopularVictims() {
    return axios.get<Leader[]>(`${this.URL}/popular-victims`)
  }
}

export default LeaderService;