import React from 'react'
import { Route,Redirect } from 'react-router-dom'
export const PrivateRoute = ({
  component: Component,
  userModule,
  ...rest
}) => {


 isPatient && user ?
  <Route exact path="/" component={Component} {...rest}/>
  : <Redirect to='/login'/>
}
