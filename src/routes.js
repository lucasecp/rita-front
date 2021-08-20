import React from 'react'

import { Switch, Route } from 'react-router-dom'

import CardSabin from './pages/Login/CardSabin'
import RegisterCustomerSabinHealthCard from './pages/CustomerSabinHealthCard/Register'
import Header from './components/Header'
import DefinePassword from './pages/Login/DefinePassword'
import Teste from './pages/Teste'

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Header} />

      <Route
        path="/cadastro-cliente-cartao-sabin-saude"
        component={RegisterCustomerSabinHealthCard}
      />
      <Route path="/cartao-sabin" component={CardSabin} />
      <Route path="/definir-senha" component={DefinePassword} />

      <Route path="/teste" component={Teste} />
    </Switch>
  )
}

export default Routes
