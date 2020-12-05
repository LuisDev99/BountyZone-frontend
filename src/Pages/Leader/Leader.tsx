import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Redirect, Route, Switch } from "react-router";

import NavigationBar from "../../Components/Navbar";
import Attacks from "./Attacks/Attacks";
import Home from "./Home/Home";
import { routes } from "./Leader.routes";

function LeaderPage() {
  const { logout } = useAuth0();

  return (
    <div>
      <NavigationBar routes={routes} onLogout={logout} />

      <Switch>
        <Route path='/leaders/home' component={Home} />
        <Route path='/leaders/attacks' component={Attacks} />
        <Redirect from='/leaders' to='/leaders/home' />
      </Switch>
    </div>
  );
}

export default LeaderPage;
