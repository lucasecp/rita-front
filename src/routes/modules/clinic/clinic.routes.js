import React from 'react'
import Route from '../../custom.routes'
import SeeAllSpecialists from '@/pages/modules/clinic/SeeAllSpecialists'
import SeeOneSpecialists from '@/pages/modules/clinic/SeeOneSpecialist'
import ClinicProfile from '@/pages/modules/clinic/Profile'

import {
  CLINIC_SEE_ALL_SPECIALIST,
  CLINIC_SEE_ONE_SPECIALIST,
  CLINIC_PROFILE
} from '../../constants/namedRoutes/routes'

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
    component: ClinicProfile
  }
]

const clinicRoutesComponents = clinicRoutes.map((props, index) => (
  // <Route {...props} exact key={index} />
  <Route {...props} exact isPrivate key={index} />
))

export default clinicRoutesComponents
