import React from 'react'
import { Route } from '../../custom.routes'

import {
  DIRECTOR_EDIT_PLAN,
  DIRECTOR_PLAN_MANAGMENT,
  DIRECTOR_SEE_PLAN_MANAGMENT,
  DIRECTOR_EDIT_PLAN_CONFIRM,
  DIRECTOR_CREATE_PLAN_MANAGMENT,
  DIRECTOR_ACTIVATE_PLAN,
  DIRECTOR_SUSPEND_PLAN,
  DIRECTOR_INACTIVATE_PLAN,
  DIRECTOR_IMPORT,
  DIRECTOR_IMPORT_REPORT,
  FILTER_USERS,
  SEE_ONE_USER,
  EDIT_USER,
  CREATE_USER,
  DIRECTOR_WALLET_SETTINGS,
} from '../../constants/namedRoutes/routes'

import { EditPlan } from '@/pages/modules/Director/PlanManagment/EditPlan'
import DirectorGetPlan from '@/pages/modules/Director/PlanManagment/GetPlan'
import SeePlan from '@/pages/modules/Director/PlanManagment/SeePlan'
import { EditPlanConfirm } from '@/pages/modules/Director/PlanManagment/EditPlan/containers/EditPlanConfirm'
import { CreatePlan } from '@/pages/modules/Director/PlanManagment/CreatePlan'
import { SuspendPlanConfirm } from '@/pages/modules/Director/PlanManagment/GetPlan/Table/Content/Actions/Suspend/containers/SuspendPlanConfirm'
import { ActivatePlanConfirm } from '@/pages/modules/Director/PlanManagment/GetPlan/Table/Content/Actions/Activate/ActivatePlanConfirm'
import { InactivatePlanConfirm } from '@/pages/modules/Director/PlanManagment/GetPlan/Table/Content/Actions/Inactivate/containers/InactivatePlanConfirm'
import { Import } from '@/pages/modules/Director/Imports'
import { Report as ImportReport } from '@/pages/modules/Director/Imports/containers/Report'
import { FilterUsers } from '@/pages/modules/Director/Users/FilterUsers'
import { SeeOneUser } from '@/pages/modules/Director/Users/SeeOneUser'
import { EditUser } from '@/pages/modules/Director/Users/EditUser'
import { CreateUser } from '@/pages/modules/Director/Users/CreateUser'
import WalletSettings from '@/pages/modules/operator/WalletSettings'

const directorRoutes = [
  {
    path: DIRECTOR_EDIT_PLAN,
    component: EditPlan,
  },
  {
    path: DIRECTOR_EDIT_PLAN_CONFIRM,
    component: EditPlanConfirm,
  },

  {
    path: DIRECTOR_ACTIVATE_PLAN,
    component: ActivatePlanConfirm,
  },
  {
    path: DIRECTOR_SUSPEND_PLAN,
    component: SuspendPlanConfirm,
  },
  {
    path: DIRECTOR_INACTIVATE_PLAN,
    component: InactivatePlanConfirm,
  },
  {
    path: DIRECTOR_SEE_PLAN_MANAGMENT,
    component: SeePlan,
  },
  {
    path: DIRECTOR_CREATE_PLAN_MANAGMENT,
    component: CreatePlan,
  },
  {
    path: DIRECTOR_PLAN_MANAGMENT,
    component: DirectorGetPlan,
  },
  {
    path: DIRECTOR_IMPORT_REPORT,
    component: ImportReport,
  },
  {
    path: DIRECTOR_IMPORT,
    component: Import,
  },
  {
    path: FILTER_USERS,
    component: FilterUsers,
  },
  {
    path: SEE_ONE_USER,
    component: SeeOneUser,
  },
  {
    path: EDIT_USER,
    component: EditUser,
  },
  {
    path: CREATE_USER,
    component: CreateUser,
  },
  {
    path: DIRECTOR_WALLET_SETTINGS,
    component: WalletSettings,
  },
]

const directorRoutesComponents = directorRoutes.map((props, index) => (
  <Route key={index} isPrivate {...props} />
))

export default directorRoutesComponents
