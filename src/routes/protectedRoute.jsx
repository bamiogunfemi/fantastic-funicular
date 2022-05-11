import React, { useContext } from 'react';
import { Route, Redirect } from "react-router-dom";
import { UsernameContext } from '../context';


export const ProtectedRoute = ({ component: Component, ...rest }) => {
  const [_, __, activeUser] = useContext(UsernameContext)

  return (
    <Route
      {...rest}
      render={(props) =>
        activeUser !== '' ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  )
}


