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
import { ReactComponent as WalletIcon } from '@/assets/icons/wallet.svg'
import { ReactComponent as SellableItemsIcon } from '@/assets/icons/salable-items.svg'
import { ReactComponent as ProfilesIcon } from '@/assets/icons/profiles.svg'
import { ReactComponent as ClinicsIcon } from '@/assets/icons/clinic.svg'
import { ReactComponent as ImportIcon } from '@/assets/icons/import.svg'
import { ReactComponent as StethoscopeIcon } from '@/assets/icons/stethoscope.svg'
import { ReactComponent as UsersIcon } from '@/assets/icons/users.svg'
import { ReactComponent as UsersGroupIcon } from '@/assets/icons/users-group.svg'
import { ReactComponent as SpecialtysTypesIcon } from '@/assets/icons/specialtys-types.svg'
import { ReactComponent as Calendar } from '@/assets/icons/calendar.svg'
import { ReactComponent as AppointmentTableIcon } from '@/assets/icons/appointment-table.svg'

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
  PATIENT_WALLET_DASHBOARD,
  PATIENT_WALLET_BUY_COIN,
  PATIENT_WALLET_PURCHASES,
  PATIENT_WALLET_PAYMENTS,
  PATIENT_WALLET_STATEMENTS,
  PATIENT_WALLET_SETTINGS,
  OPERATOR_WALLET_DASHBOARD,
  OPERATOR_WALLET_PAYMENTS,
  OPERATOR_WALLET_STATEMENTS,
  OPERATOR_WALLET_SETTINGS,
  OPERATOR_WALLET_TABLE_IMPORT_LIST,
  FILTER_SELLABLE_ITEMS,
  OPERATOR_SEE_ALL_CLINICS,
  OPERATOR_SEE_ALL_SPECIALTYS,
  OPERATOR_SEE_ALL_SPECIALISTS,
  DIRECTOR_SEE_ALL_PROFILES,
  OPERATOR_DEPENDENT_MANAGMENT,
  DIRECTOR_IMPORT,
  SPECIALIST_PROFILE,
  SPECIALIST_SEE_SCHEDULE,
  FILTER_USERS,
  OPERATOR_SEE_ALL_ISSUING_AGENCY,
  CLINIC_SEE_ALL_SPECIALIST,
  CLINIC_PROFILE,
  CLINIC_SEE_ALL_USERS,
  CLINIC_APPOINTMENT_TABLE,
} from '@/routes/constants/namedRoutes/routes'

import { permissions } from '@/constants/permissions'

export const menuItens = [
  {
    path: INITIAL_PAGE,
    icon: <HomeIcon />,
    name: 'Início',
    // permissions: permissions.
  },
  // {
  //   path: PATIENT_START,
  //   icon: <HomeIcon />,
  //   name: 'Início',
  //   // permissions: permissions.
  // },
  {
    path: PROFILE,
    icon: <UserIcon />,
    name: 'Perfil',
    permissions: [permissions.VER_MEUS_DADOS_PACIENTE],
  },
  {
    path: CHANGE_PASSWORD,
    icon: <PadLockIcon />,
    name: 'Trocar Senha',
    permissions: [permissions.TROCAR_MINHA_SENHA],
  },
  {
    path: VALIDATOR_ANALYZE_PATIENTS,
    icon: <AuthorizationIcon />,
    name: 'Autorizações',
    permissions: [permissions.LISTAR_PACIENTES_VALIDACAO],
  },
  {
    path: OPERATOR_ANALYZE_PATIENT,
    icon: <PatientIcon />,
    name: 'Pacientes',
    permissions: [permissions.PERMITIR_TODOS_STATUS_PACIENTE],
  },
  {
    path: OPERATOR_REPORTS,
    icon: <ReportsIcon />,
    name: 'Relatórios',
    permissions: [
      permissions.LISTAR_LOG_VALIDACOES,
      permissions.LISTAR_LOG_FATURAMENTO,
      permissions.LISTAR_BENEFICIARIOS,
    ],
  },
  {
    path: OPERATOR_CONSULT_ELIGIBILITY,
    icon: <EligibilityIcon />,
    name: 'Elegibilidade',
    permissions: [permissions.VER_ELEGIBILIDADE_PACIENTE],
  },
  {
    path: PATIENT_DEPENDENTS,
    icon: <GroupUserIcon />,
    name: 'Dependentes',
    permissions: [permissions.VER_MEUS_DEPENDENTES],
  },
  {
    path: PATIENT_WALLET_DASHBOARD,
    icon: <WalletIcon />,
    name: 'Carteira Digital',
    permissions: [permissions.VER_CARTEIRA_DIGITAL_PACIENTE],
    children: [
      {
        path: PATIENT_WALLET_BUY_COIN,
        name: 'Comprar Moeda',
      },
      {
        path: PATIENT_WALLET_PURCHASES,
        name: 'Compras',
      },
      {
        path: PATIENT_WALLET_PAYMENTS,
        name: 'Pagamentos',
      },
      {
        path: PATIENT_WALLET_STATEMENTS,
        name: 'Extrato',
      },
      {
        path: PATIENT_WALLET_SETTINGS,
        name: 'Configurações',
      },
    ],
  },
  {
    path: OPERATOR_WALLET_DASHBOARD,
    icon: <WalletIcon />,
    name: 'Carteira Digital',
    permissions: [permissions.VER_CARTEIRA_DIGITAL_OPERADOR],
    children: [
      {
        path: OPERATOR_WALLET_PAYMENTS,
        name: 'Pagamentos',
      },
      {
        path: OPERATOR_WALLET_STATEMENTS,
        name: 'Extrato',
      },
      {
        path: OPERATOR_WALLET_SETTINGS,
        name: 'Configurações',
      },
      {
        path: OPERATOR_WALLET_TABLE_IMPORT_LIST,
        name: 'Importação de Tabelas',
      },
    ],
  },
  {
    path: DIRECTOR_PLAN_MANAGMENT,
    icon: <ManagmentIcon />,
    name: 'Gestão de Planos',
    permissions: [permissions.LISTAR_PLANO_DIRETOR],
  },
  {
    path: FILTER_SELLABLE_ITEMS,
    icon: <SellableItemsIcon />,
    name: 'Itens Vendáveis',
    permissions: [permissions.LISTAR_ITENS_VENDAVEIS],
  },
  {
    path: DIRECTOR_SEE_ALL_PROFILES,
    icon: <ProfilesIcon />,
    name: 'Perfis',
    permissions: [permissions.LISTAR_PERFIS],
  },
  {
    path: OPERATOR_SEE_ALL_CLINICS,
    icon: <ClinicsIcon />,
    name: 'Clínicas',
    permissions: [permissions.LISTAR_CLINICAS],
  },
  {
    path: OPERATOR_SEE_ALL_SPECIALTYS,
    icon: <AuthorizationIcon />,
    name: 'Especialidades',
    permissions: [permissions.LISTAR_ESPECIALIDADES],
  },
  {
    path: OPERATOR_DEPENDENT_MANAGMENT,
    icon: <GroupUserIcon />,
    name: 'Gestão de Dependentes',
    permissions: [permissions.ALTERAR_DADOS_PACIENTE],
  },
  {
    path: DIRECTOR_IMPORT,
    icon: <ImportIcon />,
    name: 'Importação',
    permissions: [permissions.IMPORTAR_PACIENTES],
  },
  {
    path: OPERATOR_SEE_ALL_SPECIALISTS,
    icon: <StethoscopeIcon />,
    name: 'Especialistas',
    permissions: [permissions.LISTAR_MEDICOS],
  },
  {
    path: SPECIALIST_PROFILE,
    icon: <UserIcon />,
    name: 'Perfil',
    permissions: [permissions.ALTERAR_MEUS_DADOS_ESPECIALISTA],
  },
  {
    path: SPECIALIST_SEE_SCHEDULE,
    icon: <Calendar />,
    name: 'Agenda Profissional',
    permissions: [permissions.GERENCIAR_MINHA_AGENDA_ESPECIALISTA],
  },
  {
    path: FILTER_USERS,
    icon: <UsersIcon />,
    name: 'Gestão de Usuários',
    permissions: [permissions.LISTAR_USUARIOS],
  },
  {
    path: OPERATOR_SEE_ALL_ISSUING_AGENCY,
    icon: <SpecialtysTypesIcon />,
    name: 'Gestão de Órgão Emissor',
    permissions: [permissions.GERENCIAR_ORGAO_EMISSOR],
  },
  {
    path: CLINIC_SEE_ALL_SPECIALIST,
    icon: <StethoscopeIcon />,
    name: 'Especialistas',
    permissions: [permissions.VER_DADOS_CLINICA],
  },
  {
    path: CLINIC_SEE_ALL_USERS,
    icon: <UsersGroupIcon />,
    name: 'Usuários',
    permissions: [permissions.LISTAR_USUARIO_CLINICA],
  },
  {
    path: CLINIC_PROFILE,
    icon: <UserIcon />,
    name: 'Perfil',
    permissions: [permissions.VER_DADOS_CLINICA],
  },
  {
    path: CLINIC_APPOINTMENT_TABLE,
    icon: <AppointmentTableIcon />,
    name: 'Tabela de consulta',
    permissions: [permissions.GERENCIAR_TABELA_PRECOS_CLINICA],
  },
]
