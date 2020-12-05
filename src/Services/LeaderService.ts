import axios from "axios";
import { GetAPIURL } from "../Helpers/Constants";
import { Leader } from "../Models/Leader";

class LeaderService {
  private URL: string = "";

  constructor() {
    this.URL = GetAPIURL() + "leaders";
  }

  getPopularVictims() {
    return axios.get<Leader[]>(`${this.URL}/popular-victims`)
  }
}

export default LeaderService;