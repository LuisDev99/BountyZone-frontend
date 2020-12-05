import axios from "axios";
import { GetAPIURL } from "../Helpers/Constants";
import { Leader } from "../Models/Leader";

class LeaderService {
  private URL: string = "";

  constructor() {
    this.URL = GetAPIURL() + "leaders";
  }


}

export default LeaderService;