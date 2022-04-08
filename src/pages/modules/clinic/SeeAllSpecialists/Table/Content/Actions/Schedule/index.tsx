import React from 'react'
import { ReactComponent as ScheduleIcon } from '@/assets/icons/calendar-purple.svg'
import { useHistory } from 'react-router-dom'
import { CLINIC_SEE_SPECIALIST_SCHEDULE } from '@/routes/constants/namedRoutes/routes'
import { DataSpecialist } from '../../../../types'

const Schedule: React.FC<{ data: DataSpecialist }> = ({ data }) => {
  const history = useHistory()

  return (
    <ScheduleIcon
      onClick={() =>
        history.push(CLINIC_SEE_SPECIALIST_SCHEDULE, {
          dataDoctor: { id: data.id, name: data.name },
        })
      }
    />
  )
}

export default Schedule
