import { Route } from '../custom.routes'

import {
  NEW_REGISTER_PATIENT_CHOOSE_REGION,
  NEW_REGISTER_PATIENT_DOCUMENTS,
} from '../constants/namedRoutes/routes'

import { ChooseRegion } from '@/pages/Register/newPatientRegister/ChooseRegion'
import { Documents } from '@/pages/Register/newPatientRegister/Documents'

const registerRoutes = [
  {
    path: NEW_REGISTER_PATIENT_CHOOSE_REGION,
    component: ChooseRegion,
  },
  {
    path: NEW_REGISTER_PATIENT_DOCUMENTS,
    component: Documents,
  },
]

export const newRegisterPatientRoutes = registerRoutes.map((props, key) => (
  <Route key={key} {...props} />
))
