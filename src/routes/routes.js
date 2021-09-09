import React from 'react'
import { Switch, Route, Router } from 'react-router-dom'
import Header from '@/components/HeaderTest'
import Teste from '@/pages/Teste'
import Profile from '@/pages/Profile'
import RegisterRoutes from './register.routes'

import ConfDados from '@/pages/ConfDados'
function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Header} />

      <RegisterRoutes />

      <Route path="/master-page" component={Profile} />
      <Route path="/confdados" component={ConfDados} />
      <Route path="/teste" component={Teste} />
    </Switch>
  )
}

export default Routes
