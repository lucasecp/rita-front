import React from 'react'

import { ReactComponent as HomeIcon } from '@/assets/icons/home.svg'
import { ReactComponent as AuthorizationIcon } from '@/assets/icons/authorization-menu.svg'
import { ReactComponent as PatientIcon } from '@/assets/icons/patient-menu.svg'
import { ReactComponent as GroupUserIcon } from '@/assets/icons/people.svg'
import { ReactComponent as UserIcon } from '@/assets/icons/user.svg'
import { ReactComponent as PadLock } from '@/assets/icons/padlock.svg'

import {
  CHANGE_PASSWORD,
  DEPENDENTS,
  MASTERPAGE,
  OPERATOR_ANALYZE_PATIENT,
  PATIENT_START,
  PROFILE,
  VALIDATOR_ANALYZE_PATIENTS,
} from '@/routes/constants/namedRoutes/routes'

import { permissionList } from '@/components/Layout/DefaultLayout/Menu/_menuItems/permissionList'

export const menuItens = [
  {
    path: MASTERPAGE,
    icon: <HomeIcon />,
    name: 'Início',
    // permission: permissionList.
  },
  {
    path: PATIENT_START,
    icon: <HomeIcon />,
    name: 'Início',
    // permission: permissionList.
  },
  {
    path: PROFILE,
    icon: <UserIcon />,
    name: 'Perfil',
    permission: permissionList.VER_MEUS_DADOS_PACIENTE,
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
    path: DEPENDENTS,
    icon: <GroupUserIcon />,
    name: 'Dependentes',
    permission: permissionList.VER_MEUS_DEPENDENTES,
  },
  {
    path: CHANGE_PASSWORD,
    icon: <PadLock />,
    name: 'Trocar senha',
    permission: permissionList.TROCAR_MINHA_SENHA,
  },
]
