import React from 'react'
import { useScheduleSpecialist } from '../../../hooks'
import { Container } from './styles'
import { ScheduleI } from '../../../types'
import { ReactComponent as DeleteIcon } from '@/assets/icons/trash.svg'
import { useModal } from '@/hooks/useModal'
import DeleteEvent from '../messages/DeleteEvent/index'

interface CellProps {
  data?: ScheduleI
  nameDoctor?: string
  empty?: boolean
}

const Cell: React.FC<CellProps> = ({ data, nameDoctor, empty }) => {
  const { currentDataClinicAndDoctor, setGetSchedules } = useScheduleSpecialist()
  const { showMessage } = useModal()

  return (
    <Container>
      {!empty && (
        <div>
          <div>
            <h5>{nameDoctor}</h5>
            <h5>{data.clinicName}</h5>
            <span>
              {data.start} - {data.end}
            </span>
            <p>
              {data.specialtys.map((spec) => (
                <span key={spec.id}>{spec.name}</span>
              ))}
            </p>
          </div>
          <DeleteIcon
            onClick={() =>
              showMessage(DeleteEvent, {
                idClinic: currentDataClinicAndDoctor.idClinic,
                idDoctor: currentDataClinicAndDoctor.idDoctor,
                idSchedule: data.idSchedule,
                setMakeNewRequest: setGetSchedules
              })
            }
          />
        </div>
      )}
    </Container>
  )
}

export default Cell
