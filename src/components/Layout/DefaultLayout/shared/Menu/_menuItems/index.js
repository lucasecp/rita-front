import React from 'react'

import { ReactComponent as HomeIcon } from '@/assets/icons/home.svg'
import { ReactComponent as AuthorizationIcon } from '@/assets/icons/to-do.svg'
import { ReactComponent as PatientIcon } from '@/assets/icons/patients.svg'
import { ReactComponent as ReportsIcon } from '@/assets/icons/report.svg'
import { ReactComponent as EligibilityIcon } from '@/assets/icons/choose-person.svg'
import { ReactComponent as PadLockIcon } from '@/assets/icons/pad-lock.svg'
import { ReactComponent as UserIcon } from '@/assets/icons/user.svg'
import { ReactComponent as ManagmentIcon } from '@/assets/icons/managment.svg'
import { ReactComponent as GroupUserIcon } from '@/assets/icons/people.svg'

import {
  MASTERPAGE,
  OPERATOR_ANALYZE_PATIENT,
  OPERATOR_CONSULT_ELIGIBILITY,
  OPERATOR_REPORTS,
  CHANGE_PASSWORD,
  PATIENT_SEE_DEPENDENT,
  // PATIENT_START,
  PROFILE,
  VALIDATOR_ANALYZE_PATIENTS,
  DIRECTOR_PLAN_MANAGMENT,
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
  {
    path: PROFILE,
    icon: <UserIcon />,
    name: 'Perfil',
    permission: permissionList.VER_MEUS_DADOS_PACIENTE,
  },
  {
    path: CHANGE_PASSWORD,
    icon: <PadLockIcon />,
    name: 'Trocar Senha',
    permission: permissionList.TROCAR_MINHA_SENHA,
  },
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
    permission: permissionList.VER_ELEGIBILIDADE_PACIENTE,
  },
  {
    path: PATIENT_SEE_DEPENDENT,
    icon: <GroupUserIcon />,
    name: 'Dependentes',
    permission: permissionList.VER_MEUS_DEPENDENTES,
  },
  {
    path: DIRECTOR_PLAN_MANAGMENT,
    icon: <ManagmentIcon />,
    name: 'Gestão de Planos',
    permission: permissionList.LISTAR_PLANO_DIRETOR,
  },
]
