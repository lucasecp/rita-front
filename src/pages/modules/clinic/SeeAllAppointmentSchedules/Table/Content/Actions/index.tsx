import React from 'react'
import { Container } from './styles'
import Edit from './View'
import CustomTooltip from '@/components/Tooltip'
import { DataScheduler } from '../../../types'

interface ActionsProps {
  data: DataScheduler
  setMakeRequest: (x: number) => void
}

const Actions: React.FC<ActionsProps> = ({ data, setMakeRequest }) => {
  return (
    <Container>
      <CustomTooltip label="">
        <div>
          <Edit idDoctor={data.specialist.idSpecialist} idSchedule={data.id}/>
        </div>
      </CustomTooltip>
      <CustomTooltip label="">
        <div>
          {/** Button Here */}
        </div>
      </CustomTooltip>
      <CustomTooltip label="">
        <div>
          {/** Button Here */}
        </div>
      </CustomTooltip>
    </Container>
  )
}

export default Actions
