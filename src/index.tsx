import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import LoginPage from "./Pages/Login/Login";
import RegisterPage from "./Pages/Register/Register";
import LeaderPage from "./Pages/Leader/Leader";
import HunterPage from "./Pages/Hunter/Hunter";
import ProtectedRoute from "./Components/ProtectedRoute";

import "./index.css";
import LandingPage from "./Pages/LandingPage/LandingPage";

const hist = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <Router history={hist}>
      <Switch>
        <Route path='/' exact component={LandingPage} />
        <Route path='/login' exact component={LoginPage} />
        <Route path='/register' component={RegisterPage} />
        <ProtectedRoute
          path='/leaders'
          component={LeaderPage}
          isAuthenticated={false}
        />
        <ProtectedRoute
          path='/hunters'
          component={HunterPage}
          isAuthenticated={false}
        />
        <Redirect from='*' to='/' />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
