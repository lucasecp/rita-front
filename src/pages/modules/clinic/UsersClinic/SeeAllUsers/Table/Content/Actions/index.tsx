import React from 'react'
import { Container } from './styles'
import View from './View'
import CustomTooltip from '@/components/Tooltip'
import { DataUsersClinic } from '../../../types'


const Actions: React.FC<DataUsersClinic> = (data) => {
  return (
    <Container>
      <CustomTooltip label="Visualizar">
        <div>
          <View {...data}/>
        </div>
      </CustomTooltip>
    </Container>
  )
}

export default Actions
