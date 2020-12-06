import axios from "axios";
import { Bounty } from "../Models/Bounty";
import BaseService from "./BaseService";

class HunterService extends BaseService {

  constructor() {
    super("hunters");
  }

  getAvailableBounties() {
    return axios.get<Bounty[]>(`${this.URL}/bounties`)
  }
}

export default HunterService;