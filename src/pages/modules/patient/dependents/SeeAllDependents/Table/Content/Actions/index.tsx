import React from 'react'
import {
  Container,
  EyePurpleIconStyled,
  DeleteIconStyled,
  WarningIconStyled,
} from './styles'
import CustomTooltip from '@/components/Tooltip'
import { useHistory } from 'react-router'
import { ActionsProps } from '../../../types'
import { PATIENT_SEE_DEPENDENT } from '@/routes/constants/namedRoutes/routes'

const Actions: React.FC<ActionsProps> = ({ status, warning, idDependent }) => {
  const history = useHistory()

  return (
    <Container>
      <CustomTooltip label="Atenção">
        <WarningIconStyled hidden={!warning} />
      </CustomTooltip>

      <CustomTooltip label="Visualizar">
        <EyePurpleIconStyled
          hidden={status !== 'inativo' && status !== 'Excluido'}
          onClick={() => history.push(PATIENT_SEE_DEPENDENT, { idDependent })}
        />
      </CustomTooltip>

      {/* <CustomTooltip label="Excluir">
        <DeleteIconStyled />
      </CustomTooltip> */}
    </Container>
  )
}

export default Actions
