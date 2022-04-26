import React from 'react'
import { Route } from '../../custom.routes'

import SpecialistProfile from '@/pages/modules/specialist/Profile'
import SeeScheduleSpecialist from '@/pages/modules/specialist/SeeSchedule'
import {
  SPECIALIST_PROFILE,
  SPECIALIST_SEE_SCHEDULE,
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
]

const patientRoutesRoutes = specialistRoutes.map((props, index) => (
  <Route {...props} exact isPrivate key={index} />
))

export default patientRoutesRoutes
