import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import userHook from './hooks/Login/Authorization'
export default function CustomRoutes ({
  component: Component,
  isPrivate,
  ...rest
}){
  const {  isAuthorization } = userHook()
  // message:'EXPIRED_TOKEN'
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuthorization() || !isPrivate) return <Component {...rest} />
          return <Redirect to={{ pathname: `/login`, state: { from: props.location } }} />
      }}
    />
  )
}
