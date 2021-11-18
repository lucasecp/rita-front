import React from 'react'
import { Switch } from 'react-router-dom'

import Route from './custom.routes'

import MasterPage from '@/pages/MasterPage'
import Login from '@/pages/Login'
import NotFound from '@/pages/404'

import { operatorRoutes, validatorRoutes } from './modules'

import registerRoutesComponent from './grouping/register.routes'
import passwordRoutesComponent from './grouping/password.routes'

import { LOGIN, MASTERPAGE, NOT_FOUND } from './constants/namedRoutes/routes'

function Routes() {
  return (
    <Switch>
      {registerRoutesComponent}

      {passwordRoutesComponent}

      {validatorRoutes}

      {operatorRoutes}

      <Route path={MASTERPAGE} isPrivate component={MasterPage} />

      <Route path={LOGIN} exact component={Login} />

      <Route path={NOT_FOUND} component={NotFound} />
    </Switch>
  )
}

export default Routes
