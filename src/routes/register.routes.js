import RegisterCardSabin from '@/pages/Register/InitialRegister/CardSabin'
import DefaultRegister from '@/pages/Register/InitialRegister/Default'
import PreRegister from '@/pages/Register/PreRegister/PreRegister'
import React from 'react'
import { Route, Switch } from 'react-router-dom'

function RegisterRoutes() {
  return (
    <>
      <Switch>
        <Route path="/pre-cadastro" component={PreRegister} />
        <Route path="/cadastro-inicial" component={DefaultRegister} />

        <Route path="/cadastro-cartao-sabin" component={RegisterCardSabin} />
      </Switch>
    </>
  )
}

export default RegisterRoutes
