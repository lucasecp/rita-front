import React from 'react'
import { Switch } from 'react-router-dom'

import Route from './custom.routes'

import MasterPage from '@/pages/MasterPage'
import Login from '@/pages/Login'
import { Profile } from '@/pages/Profile'
import NotFound from '@/pages/404'

import {
  directorRoutes,
  operatorRoutes,
  validatorRoutes,
  patientRoutes,
} from './modules'

import registerRoutesComponent from './grouping/register.routes'
import passwordRoutesComponent from './grouping/password.routes'

import {
  LOGIN,
  MASTERPAGE,
  NOT_FOUND,
  PROFILE,
} from './constants/namedRoutes/routes'

function Routes() {
  return (
    <Switch>
      {registerRoutesComponent}

      {passwordRoutesComponent}

      {validatorRoutes}

      {operatorRoutes}

      {directorRoutes}

      {patientRoutes}

      <Route path={PROFILE} isPrivate component={Profile} />

      <Route path={MASTERPAGE} isPrivate component={MasterPage} />

      <Route path={LOGIN} exact component={Login} />

      {/* <Route
        path="/gestao/planos/editar"
        exact
        component={() => (<DefaultLayout title="teste">teste</DefaultLayout>)}
      /> */}

      <Route path={NOT_FOUND} component={NotFound} />
    </Switch>
  )
}

export default Routes
