import React from "react";
import { useLeaderInfo } from "../../../Helpers/CharactersHooks";
import { LeaderProfileCard } from "./LeaderProfileCard";
import PopularVictims from "./PopularVictims";

import bg from "../../../Assets/bounty_map_bg1.jpg";

const imageBGDivStyle: React.CSSProperties = {
  backgroundImage: `url(${bg})`,
  backgroundSize: "cover",
  backgroundRepeat: "space",
  color: "white",
  width: "100%",
  height: "170vh",
};

export default function Home() {
  const { leader } = useLeaderInfo();

  if (!leader) {
    return <h3>Loading your profile.... You will be out there soon</h3>;
  }

  return (
    <div style={imageBGDivStyle}>
      <LeaderProfileCard title='Your stats so far' leader={leader} />
      <PopularVictims leader={leader} />
    </div>
  );
}
