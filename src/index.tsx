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
import { ThemeProvider } from "styled-components";
import { CSS_THEME } from "./Helpers/Constants";

const hist = createBrowserHistory();
const uri = process.env.REACT_APP_AUTH0_CALLBACK_URL ?? "";
const domain = process.env.REACT_APP_AUTH0_DOMAIN ?? "";
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID ?? "";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={CSS_THEME}>
      <Auth0Provider domain={domain} clientId={clientId} redirectUri={uri}>
        <Router history={hist}>
          <Switch>
            <Route path='/' exact component={LandingPage} />
            <Route path='/login' exact component={LoginPage} />
            <ProtectedRoute path='/register' component={CreateRole} />
            <ProtectedRoute path='/leaders' component={LeaderPage} />
            <ProtectedRoute path='/hunters' component={HunterPage} />
            <Redirect from='*' to='/' />
          </Switch>
        </Router>
      </Auth0Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
