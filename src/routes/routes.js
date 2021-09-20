import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from '@/components/HeaderTest'
import Teste from '@/pages/Teste'
import MasterPage from '@/pages/MasterPage'

import registerRoutes from './register.routes'
import Password from '@/pages/Password'
import Login from '@/pages/Login'

function Routes() {
  return (
    <Switch>
      {registerRoutes}

      <Route exact path="/" component={Header} />

      <Route path="/master-page" component={MasterPage} />
      <Route path="/password" component={Password} />
      <Route path="/login" component={Login} />
      <Route path="/teste" component={Teste} />
      <Route path="/definir-senha" component={Password} />
    </Switch>
  )
}

export default Routes
