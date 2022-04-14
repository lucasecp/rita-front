import React from 'react'

import warningIcon from '@/assets/icons/alerts/warning.svg'
import OutlineButton from '@/components/Button/Outline'
import ButtonPrimary from '@/components/Button/Primary'

import { ReasonToDeleteModal } from '../ReasonToDelete'

import { useModal } from '@/hooks/useModal'

import { Container } from './styles'

interface ConfirmDeleteProps {
  id: number
}

export const ConfirmDelete: React.FC<ConfirmDeleteProps> = ({ id }) => {
  const { closeModal, showMessage } = useModal()

  const onConfirmDelete = async () => {
    return showMessage(ReasonToDeleteModal, {
      id,
    })
  }

  const onCancelDelete = () => {
    return closeModal()
  }

  return (
    <Container>
      <img src={warningIcon} />
      <h6>Deseja realmente excluir esse perfil?</h6>
      <footer>
        <ButtonPrimary onClick={onCancelDelete}>Não</ButtonPrimary>
        <OutlineButton onClick={onConfirmDelete}>Sim</OutlineButton>
      </footer>
    </Container>
  )
}
