import React from 'react'
import {
  Container,
  EyePurpleIconStyled,
  // DeleteIconStyled,
  WarningIconStyled,
} from './styles'
import CustomTooltip from '@/components/Tooltip'
import { useHistory } from 'react-router-dom'
import { ActionsProps } from '../../../types'
import {
  PATIENT_SEE_DEPENDENT,
  PATIENT_ADD_DOCUMENT_DEPENDENT,
} from '@/routes/constants/namedRoutes/routes'

const Actions: React.FC<ActionsProps> = ({
  status,
  warning,
  documentsOk,
  isValidate,
  dependent,
}) => {
  const history = useHistory()

  const warninglabel = () => {
    let label = <></>

    if (!documentsOk) {
      label = (
        <>
          O dependente cadastrado ainda não possui documentos incluídos, clique
          aqui para adicionar.
        </>
      )
    }
    if (isValidate) {
      label = (
        <>
          A data de validação do seu cadastro ultrapassou os 730 dias.
          <br /> Para maiores informações, entre em contato pelo Whatsapp (61)
          3181-0999
        </>
      )
    }
    return label
  }

  return (
    <Container>
      <CustomTooltip label={warninglabel()}>
        <WarningIconStyled
          hidden={!warning}
          onClick={() =>
            history.push(PATIENT_ADD_DOCUMENT_DEPENDENT, { dependent })
          }
        />
      </CustomTooltip>

      <CustomTooltip label="Visualizar">
        <EyePurpleIconStyled
          hidden={status === 'inativo' || status === 'Excluido'}
          onClick={() => history.push(PATIENT_SEE_DEPENDENT, { dependent })}
        />
      </CustomTooltip>

      {/* <CustomTooltip label="Excluir">
        <DeleteIconStyled />
      </CustomTooltip> */}
    </Container>
  )
}

export default Actions
