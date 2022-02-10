import React from 'react'

import ButtonPrimary from '@/components/Button/Primary'
import WarningIcon from '@/assets/icons/alerts/warning.svg'
import { Container, ButtonGroup } from './styles'
import { useModal } from '@/hooks/useModal'
import OutlineButton from '@/components/Button/Outline'
import { DependentI, HolderI } from '../../types/index'
import { useConnectDependent } from '../../hooks/useConnectDependent'

interface BelongingOtherHolderProps {
  holder: HolderI
  dependent: DependentI
}

const BelongingOtherHolder: React.FC<BelongingOtherHolderProps> = ({
  holder,
  dependent,
}) => {
  const { closeModal } = useModal()
  const { connectDependent } = useConnectDependent()

  const onClickYes = () => {
    connectDependent({ id: holder.id, cpf: holder.cpf }, dependent.id)
    closeModal()
  }

  return (
    <Container>
      <img src={WarningIcon} />

      <p>CPF informado já associado a outro titular.</p>
      <p>Confirma a associação do dependente</p>
      <span>
        {dependent.name} - CPF: {dependent.cpf}
      </span>
      <p>Para o titular </p>
      <span>
        {holder.name} - CPF: {holder.cpf}
      </span>

      <ButtonGroup>
        <OutlineButton onClick={closeModal}>Não</OutlineButton>
        <ButtonPrimary onClick={onClickYes}>Sim</ButtonPrimary>
      </ButtonGroup>
    </Container>
  )
}

export default BelongingOtherHolder
