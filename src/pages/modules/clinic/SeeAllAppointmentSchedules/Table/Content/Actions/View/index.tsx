import React from 'react'
import { ReactComponent as ViewIcon } from '@/assets/icons/eye-purple.svg'
import { useHistory } from 'react-router-dom'
import { CLINIC_SEE_ONE_SPECIALIST } from '@/routes/constants/namedRoutes/routes'

const View: React.FC<{ idDoctor: number, idScheduler: number }> = ({  idDoctor, idScheduler }) => {
  const history = useHistory()

  const pushToAppointmentSchedulerEdit = () => {
    history.push(CLINIC_SEE_ONE_SPECIALIST, { idDoctor, idScheduler  })
  }
  return <ViewIcon onClick={pushToAppointmentSchedulerEdit} />
}

export default View
