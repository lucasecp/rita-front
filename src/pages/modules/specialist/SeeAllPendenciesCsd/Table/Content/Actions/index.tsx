/* eslint-disable @typescript-eslint/no-unused-vars */
import CustomTooltip from '@/components/Tooltip'
import React from 'react'
import { DataAllPendenciesCsd } from '../../../types'
import { Container } from './styles'
import Edit from './View'

interface ActionsProps {
  data: DataAllPendenciesCsd
}

const Actions: React.FC<ActionsProps> = ({ data }) => {
  return (
    <Container>
      <CustomTooltip label="Editar/Visualizar">
        <div>
          <Edit />
        </div>
      </CustomTooltip>
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
