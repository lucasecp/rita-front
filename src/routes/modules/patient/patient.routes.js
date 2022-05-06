import React from 'react'
import { Route } from '../../custom.routes'
import {
  PATIENT_CLINIC_INFORMATION,
  PATIENT_SEE_DEPENDENT,
  PATIENT_DOCTOR_INFORMATION,
  PATIENT_SCHEDULE_APPOINTMENT,
  PATIENT_DEPENDENTS,
  PATIENT_ADD_DOCUMENT_DEPENDENT,
  PATIENT_EDIT_DEPENDENT,
  PATIENT_ADD_DEPENDENT,
  PATIENT_WALLET_DASHBOARD,
  PATIENT_WALLET_BUY_COIN,
  PATIENT_WALLET_PAYMENTS,
  PATIENT_WALLET_STATEMENTS,
  PATIENT_WALLET_SETTINGS,
} from '../../constants/namedRoutes/routes'
import ScheduleAppointment from '@/pages/modules/patient/ScheduleAppointment'
import ClinicInformation from '@/pages/modules/patient/ClinicInformation'
import DoctorInformation from '@/pages/modules/patient/DoctorInformation'
import { SeeOneDependent } from '@/pages/modules/patient/dependents/SeeOneDependent'
import { SeeAllDependents } from '@/pages/modules/patient/dependents/SeeAllDependents'
import { EditDependent } from '@/pages/modules/patient/dependents/EditDependent'
import { CreateDependent } from '@/pages/modules/patient/dependents/CreateDependent'
import { AddDependentDocument } from '@/pages/modules/patient/dependents/AddDependentDocument'
import { WalletPatientDashboard } from '@/pages/Wallet/PatientDashboard'
import { WalletPatientBuyCoin } from '@/pages/Wallet/PatientBuyCoin'
import { WalletPatientPayments } from '@/pages/Wallet/PatientPayments'
import { WalletPatientStatements } from '@/pages/Wallet/PatientStatements'
import { WalletPatientSettings } from '@/pages/Wallet/PatientSettings'

const patientRoutes = [
  {
    path: PATIENT_SCHEDULE_APPOINTMENT,
    component: ScheduleAppointment,
  },
  {
    path: PATIENT_CLINIC_INFORMATION,
    component: ClinicInformation,
  },
  {
    path: PATIENT_DOCTOR_INFORMATION,
    component: DoctorInformation,
  },
  {
    path: PATIENT_SEE_DEPENDENT,
    component: SeeOneDependent,
  },
  {
    path: PATIENT_EDIT_DEPENDENT,
    component: EditDependent,
  },
  {
    path: PATIENT_ADD_DEPENDENT,
    component: CreateDependent,
  },
  {
    path: PATIENT_ADD_DOCUMENT_DEPENDENT,
    component: AddDependentDocument,
  },
  {
    path: PATIENT_DEPENDENTS,
    component: SeeAllDependents,
  },
  {
    path: PATIENT_WALLET_DASHBOARD,
    component: WalletPatientDashboard,
  },
  {
    path: PATIENT_WALLET_BUY_COIN,
    component: WalletPatientBuyCoin,
  },
  {
    path: PATIENT_WALLET_PAYMENTS,
    component: WalletPatientPayments,
  },
  {
    path: PATIENT_WALLET_STATEMENTS,
    component: WalletPatientStatements,
  },
  {
    path: PATIENT_WALLET_SETTINGS,
    component: WalletPatientSettings,
  },
]

const patientRoutesRoutes = patientRoutes.map((props, index) => (
  <Route {...props} exact isPrivate key={index} />
))

export default patientRoutesRoutes
