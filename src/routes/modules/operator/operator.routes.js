import React from 'react'
import Route from '../../custom.routes'

import SeeOnePatient from '@/pages/modules/operator/SeeOnePatient'
import AnalyzePatients from '@/pages/modules/operator/AnalyzePatients'
import Reports from '@/pages/modules/operator/Reports'

import {
  OPERATOR_ANALYZE_PATIENT,
  OPERATOR_REPORTS,
  OPERATOR_REPORTS_AUTHORIZATION,
  OPERATOR_SEE_ONE_PATIENT,
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
]

const operatorRoutesComponent = operatorRoutes.map((props, index) => (
  <Route {...props} isPrivate key={index} />
))

export default operatorRoutesComponent
