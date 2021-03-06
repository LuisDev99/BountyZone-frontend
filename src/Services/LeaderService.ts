import axios from "axios";
import BaseService from "./BaseService";

import { Leader } from "../Models/Leader";
import { AddBounty, Bounty } from "../Models/Bounty";

class LeaderService extends BaseService {

  constructor() {
    super("leaders");
  }

  placeBountyOnVictim(bounty: AddBounty) {
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
    return axios.patch(`${this.URL}/defend-bounty`, {
      ...bounty
    });
  }
}

export default LeaderService;