import React from 'react'
import Route from '../custom.routes'

import SeeOnePatient from '@/pages/modules/operator/SeeOnePatient2'
import AnalyzePatients from '@/pages/modules/operator/AnalyzePatients2'
import AnalyzePatientsTemporary from '@/pages/modules/operator/AnalyzePatientsTemporary2'

const operatorRoutes = [
  {
    path: '/pacientes/analisar-pacientes',
    component: AnalyzePatients,
  },
  {
    path: '/pacientes/analisar-pacientes2',
    component: AnalyzePatientsTemporary,
  },
  {
    path: '/pacientes/ver-paciente',
    component: SeeOnePatient,
  },
]

const operatorRoutesComponent = operatorRoutes.map((props, index) => (
  <Route {...props} key={index} />
))

export default operatorRoutesComponent
