import React from 'react'
import PatientData from '@/pages/validator/PatientData'
import CustomRoutes from '../custom.routes'

const validatorRoutes = [
  {
    path: '/autorizacoes/ver-paciente',
    component: PatientData,
  },
]

const validatorRoutesComponent = validatorRoutes.map((props, index) => (
  <CustomRoutes {...props} key={index} />
))

export default validatorRoutesComponent
