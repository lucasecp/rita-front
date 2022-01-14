import React from 'react'
import Route from '../../custom.routes'
import { SeeOnePatient } from '@/pages/modules/validator/SeeOnePatient'
import AnalyzePatients from '@/pages/modules/validator/AnalyzePatients'

import {
  VALIDATOR_ANALYZE_PATIENTS,
  VALIDATOR_SEE_ONE_PATIENT,
} from '../../constants/namedRoutes/routes'

const validatorRoutes = [
  {
    path: VALIDATOR_ANALYZE_PATIENTS,
    component: AnalyzePatients,
  },
  {
    path: VALIDATOR_SEE_ONE_PATIENT,
    component: SeeOnePatient,
  },
]

const validatorRoutesComponent = validatorRoutes.map((props, index) => (
  <Route {...props} exact isPrivate key={index} />
))

export default validatorRoutesComponent
