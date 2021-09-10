import React from 'react'
import { Route } from 'react-router-dom'

import RegisterCardSabin from '@/pages/Register/InitialRegister/CardSabin'
import DefaultRegister from '@/pages/Register/InitialRegister/Default'
import PreRegister from '@/pages/Register/PreRegister/PreRegister'
<<<<<<< HEAD
import RegisterPatient from '@/pages/Register/RegisterPatient'
import React from 'react'
import { Route, Switch } from 'react-router-dom'

function RegisterRoutes() {
  return (
    <>
      <Switch>
        <Route path="/pre-cadastro" component={PreRegister} />
        <Route path="/cadastro-inicial" component={DefaultRegister} />
        <Route path="/paciente/cadastro" component={RegisterPatient} />

=======
>>>>>>> 3ad95335344176d5aa5575b6efd28347eebc26b9

const registerRoutes = [
  <Route path="/pre-cadastro" component={PreRegister} key="precadastro" />,
  <Route
    path="/cadastro-inicial"
    component={DefaultRegister}
    key="cadastroinicial"
  />,
  <Route
    path="/cadastro-cartao-sabin"
    component={RegisterCardSabin}
    key="cadastrocartaosabin"
  />,
]

export default registerRoutes
