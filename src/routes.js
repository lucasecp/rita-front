import React from 'react'
import { Switch, Route } from 'react-router-dom'

<<<<<<< HEAD
import Header from './components/HeaderTest'
import DefinePassword from './pages/Login/DefinePassword'
import Teste from './pages/Teste'
import Initial from './pages/RegisterOld/CardSabin/Initial'
import ConfirmData from './pages/RegisterOld/CardSabin/ConfirmData'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import ConfDados from './pages/ConfDados'
=======
import Header from '@/components/HeaderTest'
import Teste from '@/pages/Teste'
import Profile from '@/pages/Profile'
>>>>>>> fc4cffd9aec41606e8e85507c7d951477b03449d

import RegisterCardSabin from '@/pages/Register/InitialRegister/CardSabin'
import InitialRegister from '@/pages/Register/InitialRegister/Default'
import PreRegister from '@/pages/Register/PreRegister'

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Header} />

<<<<<<< HEAD
      {/* Rota Evelyn */}
      <Route path="/confDados" component={ConfDados} />

      <Route path="/cadastro" component={Register} />
      {/* <Route path="/cadastro" component={Register} /> */}
=======
      <Route path="/cadastro-pre" component={PreRegister} />
      <Route path="/cadastro-inicial" component={InitialRegister} />
      <Route path="/cadastro-cartao-sabin" component={RegisterCardSabin} />
>>>>>>> fc4cffd9aec41606e8e85507c7d951477b03449d

      <Route path="/master-page" component={Profile} />

      <Route path="/teste" component={Teste} />
    </Switch>
  )
}

export default Routes
