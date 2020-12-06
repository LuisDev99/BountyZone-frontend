import React from "react";
import { useLeaderInfo } from "../../../Helpers/CharactersHooks";
import { LeaderProfileCard } from "./LeaderProfileCard";
import PopularVictims from "./PopularVictims";

export default function Home() {
  const { leader } = useLeaderInfo();

  if (!leader) {
    return <h3>Loading your profile.... You will be out there soon</h3>;
  }

  return (
    <div>
      <LeaderProfileCard title='Your stats so far' leader={leader} />
      <PopularVictims leader={leader} />
    </div>
  );
}
