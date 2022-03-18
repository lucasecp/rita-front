import React from 'react'
import { Container } from './styles'
import DesassociateIcon from './Desassociate'
import View from './View'
import CustomTooltip from '@/components/Tooltip'
import Schedule from './Schedule'
import { SpecialistI } from '../../../types'

interface ActionsProps {
  id: string
  setMakeRequest: (x: number) => void
}

const Actions: React.FC<ActionsProps> = ({ id, setMakeRequest }) => {
  return (
    <Container>
      <CustomTooltip label="Desassociar">
        <div>
          <DesassociateIcon id={id} setMakeRequest={setMakeRequest} />
        </div>
      </CustomTooltip>
      <CustomTooltip label="Visualizar">
        <div>
          <View id={id} />
        </div>
      </CustomTooltip>
      <CustomTooltip label="Agenda">
        <div>
          <Schedule />
        </div>
      </CustomTooltip>
    </Container>
  )
}

export default Actions
