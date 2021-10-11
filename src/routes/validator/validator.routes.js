import React from 'react'
import Route from '../custom.routes'
import SeeOnePatient from '@/pages/validator/SeeOnePatient'
import AnalyzePatients from '@/pages/validator/AnalyzePatients'
import AnalyzePatientsTemporary from '@/pages/validator/AnalyzePatientsTemporary'

const validatorRoutes = [
  {
    path: '/autorizacoes/analisar-pacientes',
    component: AnalyzePatients,
  },
  {
    path: '/autorizacoes/analisar-pacientes2',
    component: AnalyzePatientsTemporary,
  },
  {
    path: '/autorizacoes/ver-paciente',
    component: SeeOnePatient,
  },
]

const validatorRoutesComponent = validatorRoutes.map((props, index) => (
  <Route {...props} key={index} />
))

export default validatorRoutesComponent
