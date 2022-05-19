import React from 'react'
import { Route } from '../../custom.routes'

import SpecialistProfile from '@/pages/modules/specialist/Profile'
import SeeScheduleSpecialist from '@/pages/modules/specialist/SeeSchedule'
import SeeAllAppointmentSchedules from '@/pages/modules/specialist/SeeAllAppointmentSchedules'
import {
  SPECIALIST_PROFILE,
  SPECIALIST_SEE_SCHEDULE,
  SPECIALIST_SEE_ALL_APPOINTMENT_SCHEDULES,
} from '@/routes/constants/namedRoutes/routes'

const specialistRoutes = [
  {
    path: SPECIALIST_PROFILE,
    component: SpecialistProfile,
  },
  {
    path: SPECIALIST_SEE_SCHEDULE,
    component: SeeScheduleSpecialist,
  },
  {
    path: SPECIALIST_SEE_ALL_APPOINTMENT_SCHEDULES,
    component: SeeAllAppointmentSchedules,
  },
]

const patientRoutesRoutes = specialistRoutes.map((props, index) => (
  <Route {...props} exact isPrivate key={index} />
))

export default patientRoutesRoutes
