import React from "react";
import ReactDOM from "react-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import LoginPage from "./Pages/Login/Login";
import LeaderPage from "./Pages/Leader/Leader";
import HunterPage from "./Pages/Hunter/Hunter";
import ProtectedRoute from "./Components/ProtectedRoute";

import "./index.css";
import LandingPage from "./Pages/LandingPage/LandingPage";
import CreateRole from "./Pages/CreateRole/CreateRole";

const hist = createBrowserHistory();
const uri = process.env.REACT_APP_AUTH0_CALLBACK_URL ?? "";
const domain = process.env.REACT_APP_AUTH0_DOMAIN ?? "";
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID ?? "";

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider domain={domain} clientId={clientId} redirectUri={uri}>
      <Router history={hist}>
        <Switch>
          <Route path='/' exact component={LandingPage} />
          <Route path='/login' exact component={LoginPage} />
          <Route path='/register' component={CreateRole} />
          <ProtectedRoute
            path='/leaders'
            component={LeaderPage}
            isAuthenticated={false}
          />
          <ProtectedRoute path='/hunters' component={HunterPage} />
          <Redirect from='*' to='/' />
        </Switch>
      </Router>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
