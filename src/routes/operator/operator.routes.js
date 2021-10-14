import React from 'react'
import Route from '../custom.routes'

import SeeOnePatient from '@/pages/modules/operator/SeeOnePatient'
import AnalyzePatients from '@/pages/modules/operator/AnalyzePatients'
import AnalyzePatientsTemporary from '@/pages/modules/operator/AnalyzePatientsTemporary'
import { OPERATOR_ANALYZE_PATIENT, OPERATOR_ANALYZE_PATIENT2, OPERATOR_SEE_ONE_PATIENT } from '../constants/namedRoutes/routes'

const operatorRoutes = [
  {
    path: OPERATOR_ANALYZE_PATIENT,
    component: AnalyzePatients,
  },
  {
    path: OPERATOR_ANALYZE_PATIENT2,
    component: AnalyzePatientsTemporary,
  },
  {
    path: OPERATOR_SEE_ONE_PATIENT,
    component: SeeOnePatient,
  },
]

const operatorRoutesComponent = operatorRoutes.map((props, index) => (
  <Route {...props} key={index} />
))

export default operatorRoutesComponent
