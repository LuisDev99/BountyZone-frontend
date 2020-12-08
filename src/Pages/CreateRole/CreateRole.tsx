import React, { useState } from "react";
import useAsyncEffect from "use-async-effect";

import { useAuth0 } from "@auth0/auth0-react";
import PlayerService from "../../Services/PlayerService";
import { PlayerRole } from "../../Models/Player";
import { GetRouteBasedOnRole } from "../../Helpers/Constants";
import { useHistory } from "react-router";
import { useGameContext } from "../../GameContext";

import {
  Content,
  Title,
  Image,
  CharacterOptions,
  StyledLink,
} from "./StyledComponents";

interface CharacterProps {
  Title: string;
  RoleID: number;
  ImageURL: string;
  Description: string;
  onSelect: (selectedRoleID: number) => void;
}

function Character(props: CharacterProps) {
  return (
    <div onClick={() => props.onSelect(props.RoleID)}>
      <h4>{props.Title}</h4>
      <Image src={props.ImageURL} />
      <p>{props.Description}</p>
    </div>
  );
}

export default function CreateRole() {
  const history = useHistory();
  const { setPlayerContext } = useGameContext();
  const { user, isAuthenticated } = useAuth0();
  const [playerRoles, setPlayerRoles] = useState<PlayerRole[]>([]);

  useAsyncEffect(async () => {
    const response = await new PlayerService().getPlayerRoles();
    setPlayerRoles(response.data);
  }, []);

  async function handleCharacterSelect(selectedRoleID: number) {
    if (isAuthenticated) {
      try {
        const response = await new PlayerService().createAccount({
          Email: user.email,
          NickName: user.nickname,
          PlayerRoleID: selectedRoleID,
        });

        // Save the new player in the global context
        setPlayerContext(response.data);

        // Redirect base on the new player's role
        history.push(GetRouteBasedOnRole(response.data.PlayerRole));
      } catch (e) {
        console.log("Error while creating player character. Reason: ");
        console.log({ e });
      }
    }
  }

  return (
    <Content>
      <Title>
        Looks like you are new here! Click the character which you would like to
        be
      </Title>
      <CharacterOptions>
        {playerRoles.map((role, idx) => (
          <Character
            key={idx}
            RoleID={role.ID}
            Title={role.Type}
            ImageURL={role.ImageURL}
            onSelect={handleCharacterSelect}
            Description={role.Description}
          />
        ))}
      </CharacterOptions>

      <StyledLink to='/'>Return to main page</StyledLink>
    </Content>
  );
}
