import React from 'react'
import { ReactComponent as ViewIcon } from '@/assets/icons/eye-purple.svg'
// import { useHistory } from 'react-router-dom'
// import { CLINIC_EDIT_SCHEDULING } from '@/routes/constants/namedRoutes/routes'

const Edit: React.FC<{ idClinic: number; idSchedule: number }> = () => {
  // const history = useHistory()

  const pushToAppointmentSchedulerEdit = () => {
    // history.push(CLINIC_EDIT_SCHEDULING, { idClinic, idSchedule })
  }
  return <ViewIcon onClick={pushToAppointmentSchedulerEdit} />
}

export default Edit
