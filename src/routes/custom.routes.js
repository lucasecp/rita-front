import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import userHook from './hooks/Login/Authorization'
export default function CustomRoutes({
  component: Component,
  isPrivate,
  ...rest
}) {
  const { isAuthorization } = userHook()
  // message:'EXPIRED_TOKEN'
  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (!isAuthorization() && isPrivate)
          return (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: location },
              }}
            />
          )
        return <Component />
      }}
    />
  )
}
