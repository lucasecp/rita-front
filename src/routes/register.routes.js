import React from 'react'
import CustomRoutes from './custom.routes'
import RegisterCardSabin from '@/pages/Register/InitialRegister/CardSabin'
import DefaultRegister from '@/pages/Register/InitialRegister/Default'
import PreRegister from '@/pages/Register/PreRegister/PreRegister'
import RegisterPatient from '@/pages/Register/RegisterPatient'

const registerRoutes = [
  <CustomRoutes path="/pre-cadastro" component={PreRegister} key="precadastro" />,
  <CustomRoutes
    path="/cadastro-inicial"
    component={DefaultRegister}
    key="cadastroinicial"
  />,
  <CustomRoutes
    path="/cadastro/paciente"
    component={RegisterPatient}
    key="cadastropaciente"
  />,
  <CustomRoutes
    path="/cadastro-cartao-sabin"
    component={RegisterCardSabin}
    key="cadastrocartaosabin"
  />,
]

export default registerRoutes
