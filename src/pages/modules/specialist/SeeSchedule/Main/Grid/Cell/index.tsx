import React from 'react'
import { useScheduleSpecialist } from '../../../hooks'
import { Container } from './styles'
import { ScheduleI } from '../../../types'
import { ReactComponent as DeleteIcon } from '@/assets/icons/trash.svg'
import { ReactComponent as PadLockIcon } from '@/assets/icons/pad-lock2.svg'
import { useModal } from '@/hooks/useModal'
import DeleteEvent from '../messages/DeleteEvent/index'

interface CellProps {
  data?: ScheduleI
  nameDoctor?: string
  empty?: boolean
}

const Cell: React.FC<CellProps> = ({ data, nameDoctor, empty }) => {
  const { setGetSchedules } = useScheduleSpecialist()
  const { showMessage } = useModal()

  return (
    <Container>
      {!empty && (
        <div>
          <div>
            {/* <h5>{nameDoctor}</h5> */}
            <h5>{data.clinicName}</h5>
            <p>
              {data.specialtys.map((spec) => (
                <span key={spec.id}>{spec.name}</span>
              ))}
            </p>
            <span>
              {data.start} - {data.end}
            </span>
          </div>
          {nameDoctor === 'Ocupado' ? (
            <PadLockIcon />
          ) : (
            <DeleteIcon
              onClick={() =>
                showMessage(DeleteEvent, {
                  idSchedule: data.idSchedule,
                  setMakeNewRequest: setGetSchedules,
                  data
                })
              }
            />
          )}
        </div>
      )}
    </Container>
  )
}

export default Cell
