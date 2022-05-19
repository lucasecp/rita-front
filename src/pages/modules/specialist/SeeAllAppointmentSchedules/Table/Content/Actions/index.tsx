import React from 'react'
import { Container } from './styles'
import Edit from './View'
import CustomTooltip from '@/components/Tooltip'
import { DataScheduler } from '../../../types'

interface ActionsProps {
  data: DataScheduler
}

const Actions: React.FC<ActionsProps> = ({ data }) => {
  return (
    <Container>
      {/* <CustomTooltip label="Editar/Visualizar">
        <div>
          <Edit idClinic={data.clinic.idClinic} idSchedule={data.id} />
        </div>
      </CustomTooltip> */}
      <CustomTooltip label="">
        <div>{/** Button Here */}</div>
      </CustomTooltip>
      <CustomTooltip label="">
        <div>{/** Button Here */}</div>
      </CustomTooltip>
    </Container>
  )
}

export default Actions
