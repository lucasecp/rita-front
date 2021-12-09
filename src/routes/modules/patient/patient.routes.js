import React from 'react'
import Route from '../../custom.routes'
import {
  PATIENT_SCHEDULE_APPOINTMENT
} from '../../constants/namedRoutes/routes'
import ScheduleAppointment from '@/pages/modules/patient/ScheduleAppointment'

const patientRoutes = [
  {
    path: PATIENT_SCHEDULE_APPOINTMENT,
    component: ScheduleAppointment,
  },
]

const patientRoutesRoutes = patientRoutes.map((props, index) => (
  <Route {...props} exact isPrivate key={index} />
))

export default patientRoutesRoutes
