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

  if (!isAuthorization() && isPrivate) return <Redirect to="login" />

  return <Route {...rest} component={Component} />
}
