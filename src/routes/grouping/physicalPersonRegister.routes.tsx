import { Route } from '../custom.routes'

import {
  NEW_REGISTER_PATIENT_CHOOSE_REGION,
  NEW_REGISTER_PATIENT_DOCUMENTS,
  PHYSICAL_PERSON_REGISTER_PAYMENT,
} from '../constants/namedRoutes/routes'

import { ChooseRegion } from '@/pages/Register/physicalPersonRegister/ChooseRegion'
import { Documents } from '@/pages/Register/physicalPersonRegister/Documents'
import { Payment } from '@/pages/Register/physicalPersonRegister/Payment'

const registerRoutes = [
  {
    path: NEW_REGISTER_PATIENT_CHOOSE_REGION,
    component: ChooseRegion,
  },
  {
    path: NEW_REGISTER_PATIENT_DOCUMENTS,
    component: Documents,
  },
  {
    path: PHYSICAL_PERSON_REGISTER_PAYMENT,
    component: Payment,
  },
]

export const newRegisterPatientRoutes = registerRoutes.map((props, key) => (
  <Route key={key} {...props} />
))
