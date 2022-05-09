import { Route } from '../custom.routes'

import {
  NEW_REGISTER_PATIENT_CHOOSE_REGION,
  PHYSICAL_PERSON_REGISTER_DEPENDENTS,
} from '../constants/namedRoutes/routes'

import { ChooseRegion } from '@/pages/Register/newPatientRegister/ChooseRegion'
import { Dependents } from '@/pages/Register/newPatientRegister/Dependents'

const registerRoutes = [
  {
    path: NEW_REGISTER_PATIENT_CHOOSE_REGION,
    component: ChooseRegion,
  },
  {
    path: PHYSICAL_PERSON_REGISTER_DEPENDENTS,
    component: Dependents,
  },
]

export const newRegisterPatientRoutes = registerRoutes.map((props, key) => (
  <Route key={key} {...props} />
))
