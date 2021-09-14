import React from 'react'
import { Switch, Route, Router } from 'react-router-dom'
import Header from '@/components/HeaderTest'
import Teste from '@/pages/Teste'
import MasterPage from '@/pages/MasterPage'

import registerRoutes from './register.routes'
import ConfDados from '@/pages/ConfDados'

function Routes() {
  return (
    <Switch>
      {registerRoutes}

      <Route exact path="/" component={Header} />

      <Route path="/master-page" component={MasterPage} />
      {/* <Route path="/confdados" component={ConfDados} /> */}
      <Route path="/teste" component={Teste} />
    </Switch>
  )
}

export default Routes
