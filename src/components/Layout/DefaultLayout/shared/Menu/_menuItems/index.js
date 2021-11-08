import React from 'react'

import { ReactComponent as HomeIcon } from '@/assets/icons/home.svg'
import { ReactComponent as AuthorizationIcon } from '@/assets/icons/to-do.svg'
import { ReactComponent as PatientIcon } from '@/assets/icons/patients.svg'
import { ReactComponent as ReportsIcon } from '@/assets/icons/report.svg'
import { ReactComponent as EligibilityIcon } from '@/assets/icons/choose-person.svg'
// import { ReactComponent as GroupUserIcon } from '@/assets/icons/people.svg'
// import { ReactComponent as UserIcon } from '@/assets/icons/user.svg'
// import { ReactComponent as PadLock } from '@/assets/icons/pad-lock.svg'

import {
  MASTERPAGE,
  OPERATOR_ANALYZE_PATIENT,
  OPERATOR_CONSULT_ELIGIBILITY,
  OPERATOR_REPORTS,
  // CHANGE_PASSWORD,
  // DEPENDENTS,
  // PATIENT_START,
  // PROFILE,
  VALIDATOR_ANALYZE_PATIENTS,
} from '@/routes/constants/namedRoutes/routes'

import { permissionList } from './permissionList'

export const menuItens = [
  {
    path: MASTERPAGE,
    icon: <HomeIcon />,
    name: 'Início',
    // permission: permissionList.
  },
  // {
  //   path: PATIENT_START,
  //   icon: <HomeIcon />,
  //   name: 'Início',
  //   // permission: permissionList.
  // },
  // {
  //   path: PROFILE,
  //   icon: <UserIcon />,
  //   name: 'Perfil',
  //   permission: permissionList.VER_MEUS_DADOS_PACIENTE,
  // },
  {
    path: VALIDATOR_ANALYZE_PATIENTS,
    icon: <AuthorizationIcon />,
    name: 'Autorizações',
    permission: permissionList.LISTAR_PACIENTES_VALIDACAO,
  },
  {
    path: OPERATOR_ANALYZE_PATIENT,
    icon: <PatientIcon />,
    name: 'Pacientes',
    permission: permissionList.PERMITIR_TODOS_STATUS_PACIENTE,
  },
  {
    path: OPERATOR_REPORTS,
    icon: <ReportsIcon />,
    name: 'Relatórios',
    permission: permissionList.LISTAR_LOG_VALIDACOES,
  },
  {
    path: OPERATOR_CONSULT_ELIGIBILITY,
    icon: <EligibilityIcon />,
    name: 'Elegibilidade',
    permission: permissionList.PERMITIR_TODOS_STATUS_PACIENTE,
    // permission: permissionList.VER_ELEGIBILIDADE_PACIENTE,
  },
  // {
  //   path: DEPENDENTS,
  //   icon: <GroupUserIcon />,
  //   name: 'Dependentes',
  //   permission: permissionList.VER_MEUS_DEPENDENTES,
  // },
  // {
  //   path: CHANGE_PASSWORD,
  //   icon: <PadLock />,
  //   name: 'Trocar senha',
  //   permission: permissionList.TROCAR_MINHA_SENHA,
  // },
]
