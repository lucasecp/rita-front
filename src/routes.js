import React from 'react'

import { Switch, Route } from 'react-router-dom'

import Header from './components/Header'
import DefinePassword from './pages/Login/DefinePassword'
import Teste from './pages/Teste'
import CardSabin from './pages/Register/CardSabin'
import Register from './pages/Register/Default'
import Initial from './pages/Register/CardSabin/Initial'

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Header} />

      <Route path="/cadastro" component={Register} />

      <Route path="/cadastro-cartao-sabin" component={Initial} />
      <Route path="/cartao-sabin" component={CardSabin} />
      <Route path="/definir-senha" component={DefinePassword} />

      <Route path="/teste" component={Teste} />
    </Switch>
  )
}

export default Routes
