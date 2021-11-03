import React from 'react'
import Route from '../../custom.routes'

import SeeOnePatient from '@/pages/modules/operator/Patients/SeeOnePatient'
import AnalyzePatients from '@/pages/modules/operator/Patients/AnalyzePatients'
import { ConsultEligibility } from '@/pages/modules/operator/ConsultEligibility'

import {
  OPERATOR_ANALYZE_PATIENT,
  OPERATOR_CONSULT_ELIGIBILITY,
  OPERATOR_SEE_ONE_PATIENT,
} from '../../constants/namedRoutes/routes'

const operatorRoutes = [
  {
    path: OPERATOR_ANALYZE_PATIENT,
    component: AnalyzePatients,
  },
  {
    path: OPERATOR_SEE_ONE_PATIENT,
    component: SeeOnePatient,
  },
  {
    path: OPERATOR_CONSULT_ELIGIBILITY,
    component: ConsultEligibility,
  },
]

const operatorRoutesComponent = operatorRoutes.map((props, index) => (
  <Route {...props} isPrivate key={index} />
))

export default operatorRoutesComponent
