import React from 'react'
import Route from '../../custom.routes'

import { DIRECTOR_EDIT_PLAN, DIRECTOR_PLAN_MANAGMENT } from '../../constants/namedRoutes/routes'
import { EditPlan } from '@/pages/modules/Director/PlanManagment/EditPlan'
import Director from '@/pages/modules/Director/PlanManagment/GetPlan'

const directorRoutes = [
  {
    path: DIRECTOR_EDIT_PLAN,
    component: EditPlan,
  },
  {
    path: DIRECTOR_PLAN_MANAGMENT,
    component: Director,
  },
]

const directorRoutesComponents = directorRoutes.map((props, index) => (
  <Route {...props} exact isPrivate key={index} />
))

export default directorRoutesComponents
