import React from 'react'
import CustomRoutes from '../custom.routes'
import RegisterCardSabin from '@/pages/Register/InitialRegister/CardSabin'
import DefaultRegister from '@/pages/Register/InitialRegister/Default'
import PreRegister from '@/pages/Register/PreRegister/PreRegister'
import RegisterPatient from '@/pages/Register/RegisterPatient'

import {
  DEFAULT_REGISTER,
  PRE_REGISTER,
  REGISTER_CARD_SABIN,
  RESGISTE_PATIENT,
} from '../constants/namedRoutes/routes'

const registerRoutes = [
  {
    path: PRE_REGISTER,
    component: PreRegister,
  },
  {
    path: DEFAULT_REGISTER,
    component: DefaultRegister,
  },

  {
    path: REGISTER_CARD_SABIN,
    component: RegisterCardSabin,
  },
  {
    path: RESGISTE_PATIENT,
    component: RegisterPatient,
  },
]

const registerRoutesComponent = registerRoutes.map(
  ({ path, component }, key) => (
    <CustomRoutes path={path} component={component} key={key} />
  )
)

export default registerRoutesComponent
