import React from 'react'
import { Container } from './styles'
import View from './View'
import CustomTooltip from '@/components/Tooltip'


const Actions: React.FC = () => {
  return (
    <Container>
      <CustomTooltip label="Visualizar">
        <div>
          <View />
        </div>
      </CustomTooltip>
    </Container>
  )
}

export default Actions
