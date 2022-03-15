import React from 'react'
import Route from '../../custom.routes'
import {
  PATIENT_CLINIC_INFORMATION,
  PATIENT_SEE_DEPENDENT,
  PATIENT_DOCTOR_INFORMATION,
  PATIENT_SCHEDULE_APPOINTMENT,
  PATIENT_DEPENDENTS,
  PATIENT_ADD_DOCUMENT_DEPENDENT,
  PATIENT_EDIT_DEPENDENT,
} from '../../constants/namedRoutes/routes'
import ScheduleAppointment from '@/pages/modules/patient/ScheduleAppointment'
import ClinicInformation from '@/pages/modules/patient/ClinicInformation'
import DoctorInformation from '@/pages/modules/patient/DoctorInformation'
import SeeDependents from '@/pages/modules/patient/dependents/SeeOneDependent'
import { SeeAllDependents } from '@/pages/modules/patient/dependents/SeeAllDependents'
import { EditDependent } from '@/pages/modules/patient/dependents/EditDependent'
import { AddDependentDocument } from '@/pages/modules/patient/dependents/AddDependentDocument'

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
    component: SeeDependents,
  },

  {
    path: PATIENT_EDIT_DEPENDENT,
    component: EditDependent,
  },

  {
    path: PATIENT_ADD_DOCUMENT_DEPENDENT,
    component: AddDependentDocument,
  },
  {
    path: PATIENT_DEPENDENTS,
    component: SeeAllDependents,
  },
]

const patientRoutesRoutes = patientRoutes.map((props, index) => (
  <Route {...props} exact isPrivate key={index} />
))

export default patientRoutesRoutes
