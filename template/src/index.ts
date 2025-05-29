import { R2Explorer } from "r2-explorer";

// Read all available configurations here: https://r2explorer.com/getting-started/configuration/
export default R2Explorer({
  readonly: false,
  cfAccessTeamName: "1trust",
  basicAuth: {
    username: "dan",
    password: "lara",
  },
});
