import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({
  component: Component,
  isAuthenticated,
  redirectIfNotAuth,
  ...rest
}: any) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (isAuthenticated) {
          return <Component {...rest} {...props} />;
        } else {
          alert("Not authenticated :( Taking you back to login");
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};

export default ProtectedRoute;
