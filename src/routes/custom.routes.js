import { useAuth } from '@/context/login'
import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export default function CustomRoute({
  component: Component,
  isPrivate,
  path,
  ...rest
}) {
  const { isAuthorization } = useAuth()
  // message:'EXPIRED_TOKEN'

  if (!isAuthorization() && isPrivate)
    return <Redirect to={{ pathname: '/login', state: { from: path } }} />

  return <Route {...rest} component={Component} />
}
