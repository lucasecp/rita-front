import { Route } from '../custom.routes'

import { NEW_REGISTER_PATIENT_CHOOSE_REGION } from '../constants/namedRoutes/routes'

import { ChooseRegion } from '@/pages/Register/newPatientRegister/ChooseRegion'

const registerRoutes = [
  {
    path: NEW_REGISTER_PATIENT_CHOOSE_REGION,
    component: ChooseRegion,
  },
]

export const newRegisterPatientRoutes = registerRoutes.map((props, key) => (
  <Route key={key} {...props} />
))
