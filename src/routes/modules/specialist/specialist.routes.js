import React from 'react'
import { Route } from '../../custom.routes'

import SpecialistProfile from '@/pages/modules/specialist/Profile'
import SeeScheduleSpecialist from '@/pages/modules/specialist/SeeSchedule'
import SeeAllPendenciesCsd from '@/pages/modules/specialist/SeeAllPendenciesCsd'
import {
  SPECIALIST_PROFILE,
  SPECIALIST_SEE_SCHEDULE,
  SPECIALIST_SEE_ALL_PENDENCIES_CSD,
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
    path: SPECIALIST_SEE_ALL_PENDENCIES_CSD,
    component: SeeAllPendenciesCsd,
  },
]

const patientRoutesRoutes = specialistRoutes.map((props, index) => (
  <Route {...props} exact isPrivate key={index} />
))

export default patientRoutesRoutes
