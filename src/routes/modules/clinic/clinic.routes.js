import React from 'react'
import { Route } from '../../custom.routes'
import SeeAllSpecialists from '@/pages/modules/clinic/SeeAllSpecialists'
import SeeOneSpecialists from '@/pages/modules/clinic/SeeOneSpecialist'
import ClinicProfile from '@/pages/modules/clinic/Profile'
import SeeSchedule from '@/pages/modules/clinic/SeeSchedule'
import SeeAllUsers from '@/pages/modules/clinic/UsersClinic/SeeAllUsers'
import CreateUsersClinic from '@/pages/modules/clinic/UsersClinic/CreateUsersClinic'
import EditUsersClinic from '@/pages/modules/clinic/UsersClinic/EditUsersClinic'

import {
  CLINIC_SEE_ALL_SPECIALIST,
  CLINIC_SEE_ONE_SPECIALIST,
  CLINIC_PROFILE,
  CLINIC_SEE_SPECIALIST_SCHEDULE,
  CLINIC_SEE_ALL_USERS,
  CLINIC_CREATE_USERS,
  CLINIC_EDIT_USERS,
  CLINIC_APPOINTMENT_TABLE,
} from '../../constants/namedRoutes/routes'
import AppointmentTable from '@/pages/modules/clinic/AppointmentTable'

const clinicRoutes = [
  {
    path: CLINIC_SEE_ALL_SPECIALIST,
    component: SeeAllSpecialists,
  },
  {
    path: CLINIC_SEE_ONE_SPECIALIST,
    component: SeeOneSpecialists,
  },
  {
    path: CLINIC_PROFILE,
    component: ClinicProfile,
  },
  {
    path: CLINIC_SEE_SPECIALIST_SCHEDULE,
    component: SeeSchedule,
  },
  {
    path: CLINIC_APPOINTMENT_TABLE,
    component: AppointmentTable,
  },
  {
    path: CLINIC_SEE_ALL_USERS,
    component: SeeAllUsers,
  },
  {
    path: CLINIC_CREATE_USERS,
    component: CreateUsersClinic,
  },
  {
    path: CLINIC_EDIT_USERS,
    component: EditUsersClinic,
  },
]

const clinicRoutesComponents = clinicRoutes.map((props, index) => (
  // <Route {...props} exact key={index} />
  <Route {...props} exact isPrivate key={index} />
))

export default clinicRoutesComponents
