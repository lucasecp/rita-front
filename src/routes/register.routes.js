import React from 'react'
import { Route } from 'react-router-dom'

import RegisterCardSabin from '@/pages/Register/InitialRegister/CardSabin'
import DefaultRegister from '@/pages/Register/InitialRegister/Default'
import PreRegister from '@/pages/Register/PreRegister/PreRegister'
import RegisterPatient from '@/pages/Register/RegisterPatient'

const registerRoutes = [
  <Route path="/pre-cadastro" component={PreRegister} key="precadastro" />,
  <Route
    path="/cadastro-inicial"
    component={DefaultRegister}
    key="cadastroinicial"
  />,
  <Route
    path="/cadastro/paciente"
    component={RegisterPatient}
    key="cadastropaciente"
  />,
  <Route
    path="/cadastro-cartao-sabin"
    component={RegisterCardSabin}
    key="cadastrocartaosabin"
  />,
]

export default registerRoutes
