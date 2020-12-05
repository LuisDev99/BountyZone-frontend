import React from "react";
import { useHistory } from "react-router";
import { useAuth0 } from "@auth0/auth0-react";
import { useAsyncEffect } from "use-async-effect";

import StyledComponents from "./StyledComponents";
import PlayerService from "../../Services/PlayerService";
import { GetRouteBasedOnRole } from "../../Helpers/Constants";
import { useGameContext } from "../../GameContext";

const { Button } = StyledComponents;

function LoginPage() {
  const history = useHistory();
  const { setPlayerContext } = useGameContext();
  const { loginWithRedirect, user, isAuthenticated } = useAuth0();

  useAsyncEffect(async () => {
    if (isAuthenticated && user) {
      try {
        // Check if the player exists
        const response = await new PlayerService().getPlayerByEmail(user.email);

        setPlayerContext(response.data);

        // Redirect base on the player's role
        history.push(GetRouteBasedOnRole(response.data.PlayerRole));
      } catch (e) {
        // Backend will return 404 if the player does not have an account yet
        // If no account was found for this user, take him to register page for him to choose a character
        history.push("/register");
      }
    }
  }, [isAuthenticated, user]);

  return (
    <div>
      <Button
        onClick={() => {
          loginWithRedirect();
        }}
      >
        Log Me In
      </Button>
    </div>
  );
}

export default LoginPage;
