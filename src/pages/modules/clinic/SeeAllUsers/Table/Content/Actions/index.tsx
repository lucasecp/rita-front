import React from 'react'
import { Container } from './styles'
import View from './View'
import CustomTooltip from '@/components/Tooltip'
import { DataUsersClinic } from '../../../types'

interface ActionsProps {
  data: DataUsersClinic
  setMakeRequest?: (x: number) => void
}

const Actions: React.FC<ActionsProps> = ({ data }) => {
  return (
    <Container>
      <CustomTooltip label="Visualizar">
        <div>
          <View idUsuario={data.idUsuario} idClinica={data.idClinica}/>
        </div>
      </CustomTooltip>
    </Container>
  )
}

export default Actions
