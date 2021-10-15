import { useAuth } from '@/context/login'
import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { LOGIN } from './constants/namedRoutes/routes'

export default function CustomRoute({
  component: Component,
  isPrivate,
  path,
  ...rest
}) {
  const { isAuthorization } = useAuth()

  if (!isAuthorization() && isPrivate)
    return <Redirect to={{ pathname: LOGIN, state: { from: path } }} />

  return <Route {...rest} component={Component} />
}
