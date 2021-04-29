import React from 'react';
import {Route, Redirect} from 'react-router-dom';

const RouteGuard = ({
  component: Component,
  redPath,
  isAuthenticated,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) => (
      <>
        {isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: redPath,
              
              state: {from: props.location}
            }}
          />
        )}
      </>
    )}
  />
);

export default RouteGuard;