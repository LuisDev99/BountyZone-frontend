import axios from "axios";
import BaseService from "./BaseService";

import { Bounty } from "../Models/Bounty";

class HunterService extends BaseService {

  constructor() {
    super("hunters");
  }

  confirmBounty(hunterID: number, bounty: Bounty) {
    return axios.patch(`${this.URL}/${hunterID}/confirm-bounty`, {
      ...bounty
    });
  }

  getAvailableBounties() {
    return axios.get<Bounty[]>(`${this.URL}/bounties`)
  }
}

export default HunterService;