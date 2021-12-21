import React from 'react'
import Route from '../../custom.routes'

import {
  DIRECTOR_EDIT_PLAN,
  DIRECTOR_PLAN_MANAGMENT,
  DIRECTOR_SEE_PLAN_MANAGMENT,
  DIRECTOR_EDIT_PLAN_CONFIRM,
  DIRECTOR_CREATE_PLAN_MANAGMENT,
} from '../../constants/namedRoutes/routes'

import { EditPlan } from '@/pages/modules/Director/PlanManagment/EditPlan'
import DirectorGetPlan from '@/pages/modules/Director/PlanManagment/GetPlan'
import SeePlan from '@/pages/modules/Director/PlanManagment/SeePlan'
import {EditPlanConfirm} from '@/pages/modules/Director/PlanManagment/EditPlanConfirm'
import { CreatePlan } from '@/pages/modules/Director/PlanManagment/CreatePlan'

const directorRoutes = [
  {
    path: DIRECTOR_EDIT_PLAN,
    component: EditPlan,
  },
  {
    path: DIRECTOR_EDIT_PLAN_CONFIRM,
    component: EditPlanConfirm
  },
  {
    path: DIRECTOR_PLAN_MANAGMENT,
    component: DirectorGetPlan,
  },
  {
    path: DIRECTOR_SEE_PLAN_MANAGMENT,
    component: SeePlan,
  },
  {
    path: DIRECTOR_CREATE_PLAN_MANAGMENT,
    component: CreatePlan,
  },
]

const directorRoutesComponents = directorRoutes.map((props, index) => (
  <Route {...props} exact key={index} />
  // <Route {...props} exact isPrivate key={index} />
))

export default directorRoutesComponents
