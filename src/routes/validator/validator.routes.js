import React from 'react'
import Route from '../custom.routes'
import SeeOnePatient from '@/pages/validator/SeeOnePatient'
import AnalyzePatients from '@/pages/validator/AnalyzePatients'

const validatorRoutes = [
  {
    path: '/autorizacoes/analisar-pacientes',
    component: AnalyzePatients,
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
