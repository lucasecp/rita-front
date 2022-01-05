import React from 'react'
import {
  Container,
  EyePurpleIconStyled,
  // DeleteIconStyled,
  WarningIconStyled,
} from './styles'
import CustomTooltip from '@/components/Tooltip'
import { useHistory } from 'react-router'
import { ActionsProps } from '../../../types'
import { PATIENT_SEE_DEPENDENT } from '@/routes/constants/namedRoutes/routes'

const Actions: React.FC<ActionsProps> = ({
  status,
  warning,
  idDependent,
  documentsOk,
  isValidate,
}) => {
  const history = useHistory()
  const warninglabel = () => {
    if (!documentsOk) {
      return 'O dependente cadastrado ainda não possui documentos incluídos. Para maiores informações entre em contato pelo Whatsapp (61) 3181-0999'
    }
    if (!isValidate) {
      return 'A data de validação do seu cadastro ultrapassou os 730 dias. Para maiores informações, entre em contato pelo Whatsapp (61) 3181-0999'
    }
    return ''
  }

  return (
    <Container>
      <CustomTooltip label={warninglabel()}>
        <WarningIconStyled hidden={!warning} />
      </CustomTooltip>

      <CustomTooltip label="Visualizar">
        <EyePurpleIconStyled
          hidden={status === 'inativo' || status === 'Excluido'}
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
