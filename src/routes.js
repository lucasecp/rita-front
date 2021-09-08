import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Header from './components/HeaderTest'
import DefinePassword from './pages/Login/DefinePassword'
import Teste from './pages/Teste'
import Initial from './pages/RegisterOld/CardSabin/Initial'
import ConfirmData from './pages/RegisterOld/CardSabin/ConfirmData'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import ConfDados from './pages/ConfDados'

import Register from './pages/Register'

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Header} />

      {/* Rota Evelyn */}
      <Route path="/confDados" component={ConfDados} />

      <Route path="/cadastro" component={Register} />
      {/* <Route path="/cadastro" component={Register} /> */}

      <Route path="/cadastro-cartao-sabin" component={Initial} />
      <Route path="/definir-senha" component={DefinePassword} />

      <Route path="/teste" component={Teste} />
      <Route path="/confirmar-dados" component={ConfirmData} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/perfil" component={Profile} />
    </Switch>
  )
}

export default Routes
