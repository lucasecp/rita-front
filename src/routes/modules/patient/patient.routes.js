import React from 'react'
import Route from '../../custom.routes'
import {
  PATIENT_CLINIC_INFORMATION,
  PATIENT_SEE_DEPENDENT,
  PATIENT_DOCTOR_INFORMATION,
  PATIENT_SCHEDULE_APPOINTMENT,
} from '../../constants/namedRoutes/routes'
import ScheduleAppointment from '@/pages/modules/patient/ScheduleAppointment'
import ClinicInformation from '@/pages/modules/patient/ClinicInformation'
import DoctorInformation from '@/pages/modules/patient/DoctorInformation'
import SeeDependents from '@/pages/modules/patient/dependents/SeeOneDependent'

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
]

const patientRoutesRoutes = patientRoutes.map((props, index) => (
  <Route {...props} exact isPrivate key={index} />
))

export default patientRoutesRoutes
