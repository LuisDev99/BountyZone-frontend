import React from "react";

import { EmojiSpan } from "../../Leader/Home/StyledComponents";
import { useHunterInfo } from "../../../Helpers/CharactersHooks";
import { Card, ButtonLink } from "./StyledComponents";

import bg from "../../../Assets/hunter_bg2.jpg";

const imageBGDivStyle: React.CSSProperties = {
  backgroundImage: `url(${bg})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  width: "100vw",
  height: "87vh",
};

export default function Home() {
  const { player, hunter } = useHunterInfo();

  if (!player || !hunter)
    return <h3>Loading your profile..... Patience is a virtue</h3>;

  return (
    <div style={imageBGDivStyle}>
      <Card>
        <h2>
          <EmojiSpan>🔱</EmojiSpan>Welcome back, {player.NickName}
          <EmojiSpan>🔱</EmojiSpan>
        </h2>

        <h3>Here are your profile stats: </h3>

        <p>Your total amount of guns: {hunter.Guns}</p>
        <p>Times you've been bribed: {hunter.Bribes}</p>

        <h2>Not happy?</h2>
        <h2>Thirst for blood?</h2>

        <ButtonLink to='/hunters/map'>
          Go to Map to pick up bounties!
        </ButtonLink>
      </Card>
    </div>
  );
}
