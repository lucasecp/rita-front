import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from '@/components/HeaderTest'
import Teste from '@/pages/Teste'
import Profile from '@/pages/Profile'

import registerRoutes from './register.routes'

function Routes() {
  return (
    <Switch>
      {registerRoutes}

      <Route exact path="/" component={Header} />

      <Route path="/master-page" component={Profile} />

      <Route path="/teste" component={Teste} />
    </Switch>
  )
}

export default Routes
