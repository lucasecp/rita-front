import React from 'react'
import Route from '../../custom.routes'
import {
  PATIENT_CLINIC_INFORMATION,
  PATIENT_SCHEDULE_APPOINTMENT
} from '../../constants/namedRoutes/routes'
import ScheduleAppointment from '@/pages/modules/patient/ScheduleAppointment'
import ClinicInformation from '@/pages/modules/patient/ClinicInformation'

const patientRoutes = [
  {
    path: PATIENT_SCHEDULE_APPOINTMENT,
    component: ScheduleAppointment,
  },
  {
    path: PATIENT_CLINIC_INFORMATION,
    component: ClinicInformation, 
  },
]

const patientRoutesRoutes = patientRoutes.map((props, index) => (
  <Route {...props} exact isPrivate key={index} />
))

export default patientRoutesRoutes
