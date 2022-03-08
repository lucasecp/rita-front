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
import { ReactComponent as SellableItemsIcon } from '@/assets/icons/salable-items.svg'
import { ReactComponent as ProfilesIcon } from '@/assets/icons/profiles.svg'
import { ReactComponent as ClinicsIcon } from '@/assets/icons/clinic.svg'
import { ReactComponent as ImportIcon } from '@/assets/icons/import.svg'
import { ReactComponent as StethoscopeIcon } from '@/assets/icons/stethoscope.svg'
import { ReactComponent as UsersIcon } from '@/assets/icons/users.svg'
import { ReactComponent as SpecialtysTypesIcon } from '@/assets/icons/specialtys-types.svg'

import {
  INITIAL_PAGE,
  OPERATOR_ANALYZE_PATIENT,
  OPERATOR_CONSULT_ELIGIBILITY,
  OPERATOR_REPORTS,
  CHANGE_PASSWORD,
  // PATIENT_START,
  PROFILE,
  VALIDATOR_ANALYZE_PATIENTS,
  DIRECTOR_PLAN_MANAGMENT,
  PATIENT_DEPENDENTS,
  FILTER_SELLABLE_ITEMS,
  OPERATOR_SEE_ALL_CLINICS,
  OPERATOR_SEE_ALL_SPECIALTYS,
  OPERATOR_SEE_ALL_SPECIALISTS,
  DIRECTOR_SEE_ALL_PROFILES,
  OPERATOR_DEPENDENT_MANAGMENT,
  DIRECTOR_IMPORT,
  SPECIALIST_PROFILE,
  DIRECTOR_FILTER_USERS,
  OPERATOR_SEE_All_SPECIALTYS_TYPES
} from '@/routes/constants/namedRoutes/routes'

import { permissionList } from './permissionList'

export const menuItens = [
  {
    path: INITIAL_PAGE,
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
    path: PATIENT_DEPENDENTS,
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
  {
    path: FILTER_SELLABLE_ITEMS,
    icon: <SellableItemsIcon />,
    name: 'Itens Vendáveis',
    permission: permissionList.LISTAR_ITENS_VENDAVEIS,
  },
  {
    path: DIRECTOR_SEE_ALL_PROFILES,
    icon: <ProfilesIcon />,
    name: 'Perfis',
    permission: permissionList.LISTAR_PERFIS,
  },
  {
    path: OPERATOR_SEE_ALL_CLINICS,
    icon: <AuthorizationIcon />,
    name: 'Clínicas',
    permission: permissionList.LISTAR_CLINICAS,
  },
  {
    path: OPERATOR_SEE_ALL_SPECIALTYS,
    icon: <AuthorizationIcon />,
    name: 'Especialidades',
    permission: permissionList.LISTAR_ESPECIALIDADES,
  },
  {
    path: OPERATOR_DEPENDENT_MANAGMENT,
    icon: <GroupUserIcon />,
    name: 'Gestão de Dependentes',
    permission: permissionList.ALTERAR_DADOS_PACIENTE,
  },
  {
    path: DIRECTOR_IMPORT,
    icon: <ImportIcon />,
    name: 'Importação',
    permission: permissionList.IMPORTAR_PACIENTES,
  },
  {
    path: OPERATOR_SEE_ALL_SPECIALISTS,
    icon: <StethoscopeIcon />,
    name: 'Especialistas',
    permission: permissionList.LISTAR_MEDICOS,
  },
  {
    path: SPECIALIST_PROFILE,
    icon: <UserIcon />,
    name: 'Perfil',
    permission: permissionList.ALTERAR_MEUS_DADOS_ESPECIALISTA,
  },
  {
    path: DIRECTOR_FILTER_USERS,
    icon: <UsersIcon />,
    name: 'Gestão de Usuários',
    permission: permissionList.LISTAR_USUARIOS,
  },
  {
    path: OPERATOR_SEE_All_SPECIALTYS_TYPES,
    icon: <SpecialtysTypesIcon />,
    name: 'Tipos de Especialidade',
    permission: permissionList.LISTAR_TIPO_ESPECIALIDADE,
  },
]
