import React from 'react'
import { Route } from '../custom.routes'
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
  REGISTER_CLINIC
} from '../constants/namedRoutes/routes'
import RegisterClinic from '@/pages/Register/Clinic'

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
  {
    path: REGISTER_CLINIC,
    component: RegisterClinic,
  },
]

const registerRoutesComponent = registerRoutes.map((props, key) => (
  <Route key={key} {...props} />
))

export default registerRoutesComponent
