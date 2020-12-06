import { GetAPIURL } from "../Helpers/Constants";

class BaseService {
  protected URL: string = "";

  constructor(serviceEndpoint: string) {
    this.URL = GetAPIURL() + serviceEndpoint;
  }
}

export default BaseService;