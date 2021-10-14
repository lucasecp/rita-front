import React from 'react'

import { ReactComponent as HomeIcon } from '@/assets/icons/home.svg'
import { ReactComponent as AuthorizationIcon } from '@/assets/icons/authorization-menu.svg'
import { ReactComponent as PatientIcon } from '@/assets/icons/patient-menu.svg'


const TemporaryMenu = [
  {
    path: '/master-page',
    icon: <HomeIcon />,
    name: 'Inicio',
  },
  {
    path: '/autorizacoes/analisar-pacientes',
    icon: <AuthorizationIcon />,
    name: 'Autorizações',
  },
  {
    path: '/pacientes/analisar-pacientes',
    icon: <PatientIcon />,
    name: 'Pacientes',
  },

]

export default TemporaryMenu
