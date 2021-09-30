import React from 'react'
import CustomRoutes from './custom.routes'
import RegisterCardSabin from '@/pages/Register/InitialRegister/CardSabin'
import DefaultRegister from '@/pages/Register/InitialRegister/Default'
import PreRegister from '@/pages/Register/PreRegister/PreRegister'
import RegisterPatient from '@/pages/Register/RegisterPatient'

const registerRoutes = [
  {
    path: '/pre-cadastro',
    component: PreRegister,
  },
  {
    path: '/cadastro-inicial',
    component: DefaultRegister,
  },

  {
    path: '/cadastro-cartao-sabin',
    component: RegisterCardSabin,
  },
  {
    path: '/cadastro/paciente',
    component: RegisterPatient,
  },
]

const registerRoutesComponent = registerRoutes.map(
  ({ path, component }, key) => (
    <CustomRoutes path={path} component={component} key={key} />
  )
)

export default registerRoutesComponent
