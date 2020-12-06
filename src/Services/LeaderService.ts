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

  getLeaderBounties(leaderID: number) {
    return axios.get<Bounty[]>(`${this.URL}/${leaderID}/bounties`)
  }

  getBountiesAgainstLeader(leaderID: number) {
    return axios.get<Bounty[]>(`${this.URL}/${leaderID}/opposing-bounties`)
  }

  defendFromBounty(bounty: Bounty) {
    console.log(bounty)
    return axios.patch(`${this.URL}/defend-bounty`, {
      ...bounty
    });
  }
}

export default LeaderService;