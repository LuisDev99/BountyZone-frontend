const Constants = {
  DEV_API_URL: "https://localhost:44369/api/",
  PROD_API_URL: "",
}

export function GetAPIURL() {
  if (process.env.NODE_ENV === 'development')
    return Constants.DEV_API_URL;

  return Constants.PROD_API_URL;
}

export default Constants;