import React from 'react'

import ButtonPrimary from '@/components/Button/Primary'
import WarningIcon from '@/assets/icons/alerts/warning.svg'
import { Container, ButtonGroup } from './styles'
import { useModal } from '@/hooks/useModal'
import OutlineButton from '@/components/Button/Outline'
import AlreadyIsAHolder from '../AlreadyIsAHolder'

const BelongingOtherHolder: React.FC = () => {
  const { closeModal, showMessage } = useModal()

  return (
    <Container>
      <img src={WarningIcon} />

      <p>CPF informado já associado a outro titular.</p>
      <p>Confirma a associação do dependente</p>
      <span>Luísa Castilhos Silvestre - CPF: 969.803.890-68</span>
      <p>Para o titular </p>
      <span>Felipe Dantas Souza - CPF: 365.123.861-90</span>

      <ButtonGroup>
        <OutlineButton onClick={closeModal}>Não</OutlineButton>
        <ButtonPrimary onClick={() => showMessage(AlreadyIsAHolder)}>
          Sim
        </ButtonPrimary>
      </ButtonGroup>
    </Container>
  )
}

export default BelongingOtherHolder
