import { useAuth } from '@/hooks/login'
import React, { ComponentType } from 'react'
import { Route as ReactRoute, Redirect } from 'react-router-dom'
import { LOGIN } from './constants/namedRoutes/routes'

interface CustomRouteProps {
  component: ComponentType
  isPrivate?: boolean
  path: string
}

export const Route: React.FC<CustomRouteProps> = ({
  component: Component,
  isPrivate = false,
  path,
  ...rest
}) => {
  const { isAuthorization, logout } = useAuth()

  if (!isAuthorization() && isPrivate) {
    logout()
    return <Redirect to={{ pathname: LOGIN, state: { from: path } }} />
  }

  return <ReactRoute component={Component} {...rest} exact />
}
