import { PlayerRole } from "../Models/Player";

const Constants = {
  DEV_API_URL: "https://localhost:44369/api/",
  PROD_API_URL: "",
}

export function GetAPIURL() {
  if (process.env.NODE_ENV === 'development')
    return Constants.DEV_API_URL;

  return Constants.PROD_API_URL;
}

export function GetRouteBasedOnRole(role: PlayerRole): string {
  if (role.Type === "Leader")
    return "/leaders";

  if (role.Type === "Hunter")
    return "/hunters";

  return "/";
}

export const CSS_THEME = {
  color: "#0ef052"
}

export default Constants;