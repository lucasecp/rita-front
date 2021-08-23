import React from 'react'

import { Switch, Route } from 'react-router-dom'

import Header from './components/Header'
import DefinePassword from './pages/Login/DefinePassword'
import Teste from './pages/Teste'
import Register from './pages/Register/Default'
import Initial from './pages/Register/CardSabin/Initial'
import ConfirmData from './pages/Register/CardSabin/ConfirmData'

function Routes() {
  return (

    <Switch>
      <Route exact path="/"  component={Header} />

      <Route path="/cadastro" component={Register} />

      <Route path="/cadastro-cartao-sabin" component={Initial} />
      <Route path="/definir-senha" component={DefinePassword} />

      <Route path="/teste" component={Teste} />
      <Route path="/confirmar-dados" component={ConfirmData} />
    </Switch>

  )
}

export default Routes
