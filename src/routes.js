import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from '@/components/HeaderTest'
import Teste from '@/pages/Teste'
import Profile from '@/pages/Profile'
import RegisterCardSabin from '@/pages/Register/InitialRegister/CardSabin'
import InitialRegister from '@/pages/Register/InitialRegister/Default'
import PreRegister from '@/pages/Register/PreRegister'
import ConfDados from './pages/ConfDados'

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Header} />

      <Route path="/confDados" component={ConfDados} />

      <Route path="/cadastro-pre" component={PreRegister} />
      <Route path="/cadastro-inicial" component={InitialRegister} />
      <Route path="/cadastro-cartao-sabin" component={RegisterCardSabin} />

      <Route path="/master-page" component={Profile} />

      <Route path="/teste" component={Teste} />
    </Switch>
  )
}

export default Routes
