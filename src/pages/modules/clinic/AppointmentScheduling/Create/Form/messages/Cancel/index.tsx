import React from 'react'

import ButtonPrimary from '@/components/Button/Primary'
import warningIcon from '@/assets/icons/alerts/warning.svg'
import { Container, ButtonGroup } from './styles'
import { useModal } from '@/hooks/useModal'
import OutlineButton from '@/components/Button/Outline'
import { useHistory } from 'react-router-dom'
import { CLINIC_SEE_ALL_SPECIALIST } from '@/routes/constants/namedRoutes/routes'

const Cancel: React.FC = () => {
  const { closeModal } = useModal()

  const history = useHistory()

  return (
    <Container>
      <img src={warningIcon} />
      <p>
        Ao sair desta tela o horário selecionado pode não estar mais disponível.
      </p>
      <p>Tem certeza que deseja realizar esta ação?</p>

      <ButtonGroup>
        <OutlineButton
          onClick={
            () => closeModal()
            // history.push(CLINIC_SEE_ALL_SPECIALIST)
          }
        >
          Sim
        </OutlineButton>
        <ButtonPrimary onClick={closeModal}>Não</ButtonPrimary>
      </ButtonGroup>
    </Container>
  )
}

export default Cancel
