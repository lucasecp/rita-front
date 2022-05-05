import { useAuth } from '@/hooks/login'
import React, { useEffect } from 'react'
import { Route as ReactRoute, Redirect } from 'react-router-dom'
import { LOGIN } from './constants/namedRoutes/routes'

export const Route = ({
  component: Component,
  isPrivate = false,
  path,
  ...rest
}) => {
  const { isAuthorization, logout } = useAuth()

  useEffect(() => {
    if (!isPrivate) {
      console.log('no private')
      logout()
    }
  }, [])

  if (!isAuthorization() && isPrivate) {
    console.log(' private')
    logout()
    return <Redirect to={{ pathname: LOGIN, state: { from: path } }} />
  }

  return <ReactRoute component={Component} {...rest} />
}
