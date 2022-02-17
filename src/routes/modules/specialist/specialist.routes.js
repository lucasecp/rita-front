import React from 'react'
import Route from '../../custom.routes'

import SpecialistProfile from '@/pages/modules/specialist/Profile'
import { SPECIALIST_PROFILE } from '@/routes/constants/namedRoutes/routes'

const specialistRoutes = [
  {
    path: SPECIALIST_PROFILE,
    component: SpecialistProfile,
  },
]

const patientRoutesRoutes = specialistRoutes.map((props, index) => (
  <Route {...props} exact isPrivate key={index} />
))

export default patientRoutesRoutes
