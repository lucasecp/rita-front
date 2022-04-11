import React from 'react'
import { Container } from './styles'
import DesassociateIcon from './Desassociate'
import View from './View'
import CustomTooltip from '@/components/Tooltip'
import Schedule from './Schedule'
import { DataSpecialist } from '../../../types'

interface ActionsProps {
  data: DataSpecialist
  setMakeRequest: (x: number) => void
}

const Actions: React.FC<ActionsProps> = ({ data, setMakeRequest }) => {
  return (
    <Container>
      <CustomTooltip label="Desassociar">
        <div>
          <DesassociateIcon id={data.id} setMakeRequest={setMakeRequest} />
        </div>
      </CustomTooltip>
      <CustomTooltip label="Visualizar">
        <div>
          <View id={data.id} />
        </div>
      </CustomTooltip>
      <CustomTooltip label="Agenda">
        <div>
          <Schedule data={data}/>
        </div>
      </CustomTooltip>
    </Container>
  )
}

export default Actions
