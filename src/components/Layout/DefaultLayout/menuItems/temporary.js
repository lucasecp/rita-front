import React from 'react'

import { ReactComponent as HomeIcon } from '@/assets/icons/home.svg'
import { ReactComponent as AuthorizationIcon } from '@/assets/icons/authorization-menu.svg'
import { ReactComponent as PatientIcon } from '@/assets/icons/patient-menu.svg'
import { MASTERPAGE, OPERATOR_ANALYZE_PATIENT, VALIDATOR_ANALYZE_PATIENTS } from '@/routes/constants/namedRoutes/routes'


const TemporaryMenu = [
  {
    path: MASTERPAGE,
    icon: <HomeIcon />,
    name: 'Inicio',
  },
  {
    path: VALIDATOR_ANALYZE_PATIENTS,
    icon: <AuthorizationIcon />,
    name: 'Autorizações',
  },
  {
    path: OPERATOR_ANALYZE_PATIENT,
    icon: <PatientIcon />,
    name: 'Pacientes',
  },

]

export default TemporaryMenu
