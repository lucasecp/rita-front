import React from 'react'
import { Switch, Route, Router } from 'react-router-dom'
import Header from '@/components/HeaderTest'
import Teste from '@/pages/Teste'
import MasterPage from '@/pages/MasterPage'

import registerRoutes from './register.routes'
import Password from '@/pages/Password'

function Routes() {
  return (
    <Switch>
      {registerRoutes}

      <Route exact path="/" component={Header} />

      <Route path="/master-page" component={MasterPage} />
      <Route path="/password" component={Password} />
      <Route path="/teste" component={Teste} />
    </Switch>
  )
}

export default Routes
