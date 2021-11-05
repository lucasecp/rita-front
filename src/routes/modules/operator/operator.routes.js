import React from 'react'
import Route from '../../custom.routes'

import SeeOnePatient from '@/pages/modules/operator/Patients/SeeOnePatient'
import AnalyzePatients from '@/pages/modules/operator/Patients/AnalyzePatients'
import Reports from '@/pages/modules/operator/Reports'
import { ConsultEligibility } from '@/pages/modules/operator/ConsultEligibility'

import {
  OPERATOR_ANALYZE_PATIENT,
  OPERATOR_CONSULT_ELIGIBILITY,
  OPERATOR_SEE_ONE_PATIENT,
  OPERATOR_REPORTS,
  OPERATOR_REPORTS_AUTHORIZATION
} from '../../constants/namedRoutes/routes'
import Authorization from '@/pages/modules/operator/Reports/Authorization'

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
    path: OPERATOR_REPORTS,
    component: Reports,
    exact: true
  },
  {
    path: OPERATOR_REPORTS_AUTHORIZATION,
    component: Authorization,
    exact: true
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
