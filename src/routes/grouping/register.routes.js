import React from 'react'
import CustomRoutes from '../custom.routes'
import RegisterCardSabin from '@/pages/Register/InitialRegister/CardSabin'
import DefaultRegister from '@/pages/Register/InitialRegister/Default'
import PreRegister from '@/pages/Register/PreRegister/'
import { RegisterPatient } from '@/pages/Register/RegisterPatient'
import RegisterSpecialist from '@/pages/Register/Specialist'

import {
  DEFAULT_REGISTER,
  PRE_REGISTER,
  REGISTER_CARD_SABIN,
  REGISTER_PATIENT,
  REGISTER_SPECIALIST,
  REGISTER_PATIENT_WITH_TOKEN,
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
    path: REGISTER_PATIENT,
    component: RegisterPatient,
  },
  {
    path: REGISTER_PATIENT_WITH_TOKEN,
    component: RegisterPatient,
  },
  {
    path: REGISTER_SPECIALIST,
    component: RegisterSpecialist,
  },
]

const registerRoutesComponent = registerRoutes.map(
  ({ path, component }, key) => (
    <CustomRoutes path={path} exact component={component} key={key} />
  ),
)

export default registerRoutesComponent
