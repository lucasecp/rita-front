import React from 'react'
import Route from '../../custom.routes'

import {
  OPERATOR_ANALYZE_PATIENT,
  OPERATOR_CONSULT_ELIGIBILITY,
  OPERATOR_SEE_ONE_PATIENT,
  OPERATOR_REPORTS,
  OPERATOR_REPORTS_AUTHORIZATION,
  OPERATOR_REPORTS_BILLING_STATEMENT,
  OPERATOR_SEE_ALL_CLINICS,
  OPERATOR_SEE_ONE_CLINIC,
  OPERATOR_SEE_ALL_SPECIALTYS,
  OPERATOR_DEPENDENT_MANAGMENT,
  OPERATOR_ADD_DEPENDENT,
  OPERATOR_CREATE_SPRECIALTY,
  OPERATOR_EDIT_SPRECIALTY,
  OPERATOR_SEE_ALL_SPECIALISTS,
  OPERATOR_SEE_ONE_SPECIALIST,
  OPERATOR_SEE_ALL_ISSUING_AGENCY,
  OPERATOR_EDIT_ISSUING_AGENCY,
  OPERATOR_CREATE_ISSUING_AGENCY,
  OPERATOR_WALLET_SETTINGS,
} from '../../constants/namedRoutes/routes'

import { SeeOnePatient } from '@/pages/modules/operator/Patients/SeeOnePatient'
import AnalyzePatients from '@/pages/modules/operator/Patients/AnalyzePatients'
import { ConsultEligibility } from '@/pages/modules/operator/ConsultEligibility'

import { Reports } from '@/pages/modules/operator/Reports'
import Authorization from '@/pages/modules/operator/Reports/containers/Authorization'
import { BillingStatement } from '@/pages/modules/operator/Reports/containers/BillingStatement'

import SeeAllClinics from '@/pages/modules/operator/clinic/SeeAllClinics'
import SeeOneClinic from '@/pages/modules/operator/clinic/SeeOneClinic'

import SeeAllSpecialtys from '@/pages/modules/operator/Specialtys/SeeAllSpecialtys'
import Managment from '@/pages/modules/operator/dependent/Managment'
import AddDependent from '@/pages/modules/operator/dependent/AddDependent'
import CreateSpecialty from '@/pages/modules/operator/Specialtys/CreateSpecialty'
import EditSpecialty from '@/pages/modules/operator/Specialtys/EditSpecialty'
import SeeAllSpecialists from '@/pages/modules/operator/specialists/SeeAllSpecialists'
import SeeOneSpecialist from '@/pages/modules/operator/specialists/SeeOneSpecialist'
import EditIssuingAgency from '@/pages/modules/operator/IssuingAgency/EditIssuingAgency'
import SeeAllIssuingAgency from '@/pages/modules/operator/IssuingAgency/SeeAllIssuingAgency'
import CreateIssuingAgency from '@/pages/modules/operator/IssuingAgency/CreateIssuingAgency'
import WalletSettings from '@/pages/modules/operator/WalletSettings'

const operatorRoutes = [
  {
    path: OPERATOR_ANALYZE_PATIENT,
    component: AnalyzePatients,
  },
  {
    path: OPERATOR_SEE_ONE_PATIENT,
    component: SeeOnePatient,
  },
  {
    path: OPERATOR_REPORTS,
    component: Reports,
  },
  {
    path: OPERATOR_REPORTS_AUTHORIZATION,
    component: Authorization,
  },
  {
    path: OPERATOR_REPORTS_BILLING_STATEMENT,
    component: BillingStatement,
  },

  {
    path: OPERATOR_CONSULT_ELIGIBILITY,
    component: ConsultEligibility,
  },
  {
    path: OPERATOR_SEE_ALL_CLINICS,
    component: SeeAllClinics,
  },
  {
    path: OPERATOR_SEE_ONE_CLINIC,
    component: SeeOneClinic,
  },
  {
    path: OPERATOR_SEE_ALL_SPECIALTYS,
    component: SeeAllSpecialtys,
  },
  {
    path: OPERATOR_DEPENDENT_MANAGMENT,
    component: Managment,
  },
  {
    path: OPERATOR_ADD_DEPENDENT,
    component: AddDependent,
  },
  {
    path: OPERATOR_CREATE_SPRECIALTY,
    component: CreateSpecialty,
  },
  {
    path: OPERATOR_EDIT_SPRECIALTY,
    component: EditSpecialty,
  },
  {
    path: OPERATOR_SEE_ALL_SPECIALISTS,
    component: SeeAllSpecialists,
  },
  {
    path: OPERATOR_SEE_ONE_SPECIALIST,
    component: SeeOneSpecialist,
  },
  {
    path: OPERATOR_SEE_ALL_ISSUING_AGENCY,
    component: SeeAllIssuingAgency,
  },
  {
    path: OPERATOR_CREATE_ISSUING_AGENCY,
    component: CreateIssuingAgency,
  },
  {
    path: OPERATOR_EDIT_ISSUING_AGENCY,
    component: EditIssuingAgency,
  },
  {
    path: OPERATOR_WALLET_SETTINGS,
    component: WalletSettings,
  },
]

const operatorRoutesComponent = operatorRoutes.map((props, index) => (
  <Route {...props} exact isPrivate key={index} />
))

export default operatorRoutesComponent
