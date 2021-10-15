import React from 'react'
import Route from '../custom.routes'
import SeeOnePatient from '@/pages/validator/SeeOnePatient'
import AnalyzePatients from '@/pages/validator/AnalyzePatients'
import AnalyzePatientsTemporary from '@/pages/validator/AnalyzePatientsTemporary'
import {
  VALIDATOR_ANALYZE_PATIENTS,
  VALIDATOR_ANALYZE_PATIENTS2,
  VALIDATOR_SEE_ONE_PATIENT,
} from '../constants/namedRoutes/routes'

const validatorRoutes = [
  {
    path: VALIDATOR_ANALYZE_PATIENTS,
    component: AnalyzePatients,
    isPrivate: true,
  },
  {
    path: VALIDATOR_ANALYZE_PATIENTS2,
    component: AnalyzePatientsTemporary,
  },
  {
    path: VALIDATOR_SEE_ONE_PATIENT,
    component: SeeOnePatient,
    isPrivate: true,
  },
]

const validatorRoutesComponent = validatorRoutes.map((props, index) => (
  <Route {...props} key={index} />
))

export default validatorRoutesComponent
