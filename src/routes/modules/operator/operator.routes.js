import React from 'react'
import Route from '../../custom.routes'

import { SeeOnePatient } from '@/pages/modules/operator/Patients/SeeOnePatient'
import AnalyzePatients from '@/pages/modules/operator/Patients/AnalyzePatients'
import Reports from '@/pages/modules/operator/Reports'
import { ConsultEligibility } from '@/pages/modules/operator/ConsultEligibility'

import Authorization from '@/pages/modules/operator/Reports/Authorization'
import SeeAllClinics from '@/pages/modules/operator/clinic/SeeAllClinics'
import SeeOneClinic from '@/pages/modules/operator/clinic/SeeOneClinic'

import {
  OPERATOR_ANALYZE_PATIENT,
  OPERATOR_CONSULT_ELIGIBILITY,
  OPERATOR_SEE_ONE_PATIENT,
  OPERATOR_REPORTS,
  OPERATOR_REPORTS_AUTHORIZATION,
  OPERATOR_SEE_ALL_CLINICS,
  OPERATOR_SEE_ONE_CLINIC,
  OPERATOR_SEE_ALL_SPECIALTYS,
  OPERATOR_DEPENDENT_MANAGMENT,
  OPERATOR_ADD_DEPENDENT,
  OPERATOR_CREATE_SPRECIALTY,
  OPERATOR_EDIT_SPRECIALTY,
  OPERATOR_SEE_ALL_SPECIALISTS,
  OPERATOR_SEE_ONE_SPECIALIST,
  OPERATOR_SEE_All_SPECIALTYS_TYPES
} from '../../constants/namedRoutes/routes'

import SeeAllSpecialtys from '@/pages/modules/operator/Specialtys/SeeAllSpecialtys'
import Managment from '@/pages/modules/operator/dependent/Managment'
import AddDependent from '@/pages/modules/operator/dependent/AddDependent'
import CreateSpecialty from '@/pages/modules/operator/Specialtys/CreateSpecialty'
import EditSpecialty from '@/pages/modules/operator/Specialtys/EditSpecialty'
import SeeAllSpecialists from '@/pages/modules/operator/specialists/SeeAllSpecialists'
import SeeOneSpecialist from '@/pages/modules/operator/specialists/SeeOneSpecialist'
import SpecialtysTypes from '@/pages/modules/operator/Specialtys/SpecialtytsTypes'

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
    path:  OPERATOR_SEE_All_SPECIALTYS_TYPES,
    component: SpecialtysTypes,
  },
]

const operatorRoutesComponent = operatorRoutes.map((props, index) => (
  <Route {...props} exact isPrivate key={index} />
))

export default operatorRoutesComponent
