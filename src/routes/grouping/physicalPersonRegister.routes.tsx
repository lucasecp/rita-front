import { Route } from '../custom.routes'

import {
  PHYSICAL_PERSON_REGISTER_CHOOSE_REGION,
  PHYSICAL_PERSON_REGISTER_DOCUMENTS,
  PHYSICAL_PERSON_REGISTER_DEPENDENTS,
  PHYSICAL_PERSON_REGISTER_PAYMENT,
  PHYSICAL_PERSON_REGISTER_CHOOSE_PLAN,
  PHYSICAL_PERSON_REGISTER_CHOOSE_PLAN_DETAILS,
} from '../constants/namedRoutes/routes'

import { ChooseRegion } from '@/pages/Register/physicalPersonRegister/ChooseRegion'
import { Documents } from '@/pages/Register/physicalPersonRegister/Documents'
import { Dependents } from '@/pages/Register/physicalPersonRegister/Dependents'
import { Payment } from '@/pages/Register/physicalPersonRegister/Payment'
import { ChoosePlans } from '@/pages/Register/physicalPersonRegister/ChoosePlan'
import { PlanDetails } from '@/pages/Register/physicalPersonRegister/PlanDetails'

const registerRoutes = [
  {
    path: PHYSICAL_PERSON_REGISTER_CHOOSE_REGION,
    component: ChooseRegion,
  },
  {
    path: PHYSICAL_PERSON_REGISTER_CHOOSE_PLAN,
    component: ChoosePlans,
  },
  {
    path: PHYSICAL_PERSON_REGISTER_CHOOSE_PLAN_DETAILS,
    component: PlanDetails,
  },
  {
    path: PHYSICAL_PERSON_REGISTER_DOCUMENTS,
    component: Documents,
  },
  {
    path: PHYSICAL_PERSON_REGISTER_DEPENDENTS,
    component: Dependents,
  },
  {
    path: PHYSICAL_PERSON_REGISTER_PAYMENT,
    component: Payment,
  },
]

export const newRegisterPatientRoutes = registerRoutes.map((props, key) => (
  <Route key={key} {...props} exact />
))
