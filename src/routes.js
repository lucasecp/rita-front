import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Header from '@/components/HeaderTest'
import DefinePassword from '@/pages/Login/DefinePassword'
import Teste from '@/pages/Teste'
import Dashboard from '@/pages/Dashboard'
import Profile from '@/pages/Profile'

import RegisterCardSabin from '@/pages/Register/InitialRegister/CardSabin'

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Header} />

      {/* <Route path="/cadastro" component={Register} /> */}

      <Route path="/cadastro-cartao-sabin" component={RegisterCardSabin} />
      <Route path="/definir-senha" component={DefinePassword} />

      <Route path="/teste" component={Teste} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/perfil" component={Profile} />
    </Switch>
  )
}

export default Routes
