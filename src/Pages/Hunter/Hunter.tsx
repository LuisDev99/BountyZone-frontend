import React from "react";
import NavigationBar from "../../Components/Navbar";

import { routes } from "./Hunter.routes";
import { useAuth0 } from "@auth0/auth0-react";
import { Redirect, Route, Switch } from "react-router";

function LeaderPage() {
  const { logout } = useAuth0();

  return (
    <div>
      <NavigationBar routes={routes} onLogout={logout} />

      <Switch>
        {routes.map((route, idx) => (
          <Route key={idx} path={route.path} component={route.component} />
        ))}
        <Redirect from='/hunters' to='/hunters/home' />
      </Switch>
    </div>
  );
}

export default LeaderPage;
